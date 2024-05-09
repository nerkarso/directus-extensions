import type { EndpointConfig } from '@directus/extensions';
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs/promises';
import { PDFDocument, PDFTextField, StandardFonts } from 'pdf-lib';

const endpoint: EndpointConfig = {
  id: 'pdf-filled-viewer',
  handler: (router, { services, getSchema }) => {
    const { ItemsService } = services;

    router.get('/:file', async (req, res) => {
      const { file } = req.params;

      let filename = file;
      const filePath = `uploads/${filename}`;
      let fileBuffer;

      const sendResponse = (status: number, message: string) => {
        res.status(status).send(message);
      };

      try {
        fileBuffer = await fs.readFile(filePath);
      } catch (e) {
        console.error(e);
        sendResponse(404, `File not found: ${filePath}`);
        return;
      }

      let pdfDoc;

      try {
        pdfDoc = await PDFDocument.load(fileBuffer);
      } catch (e) {
        console.error(e);
        sendResponse(500, 'Failed to load PDF document');
        return;
      }

      const pdfForm = pdfDoc.getForm();
      const pdfFields = pdfForm.getFields();

      if (!pdfForm) {
        sendResponse(500, 'Failed to load PDF form');
        return;
      }
      if (!pdfFields) {
        sendResponse(500, 'Failed to load PDF fields');
        return;
      }

      let settingsService;
      let settings;

      try {
        settingsService = new ItemsService('settings_pdf_filled_viewer', {
          accountability: (req as any).accountability,
          schema: await getSchema(),
        });
        settings = await settingsService.readSingleton({});
        if (!settings?.code) {
          sendResponse(404, 'Field not found: code in settings_pdf_filled_viewer');
          return;
        }
      } catch (e) {
        console.error(e);
        sendResponse(500, 'Failed to read: settings_pdf_filled_viewer');
        return;
      }

      const createItemsService = async (collection: string) => {
        return new ItemsService(collection, {
          accountability: (req as any).accountability,
          schema: await getSchema(),
        });
      };

      const logFields = () => {
        pdfFields.forEach((field) => {
          const type = field.constructor.name;
          const name = field.getName();
          console.log(`${type}: \t${name}`);
        });
      };

      const updateFilename = (name: string) => {
        filename = name;
      };

      // Create a new function with contents of the arbitrary code
      const asyncFunction = Function(settings.code)();
      await asyncFunction({
        query: req.query,
        form: pdfForm,
        fields: pdfFields,
        createItemsService,
        logFields,
        updateFilename,
        sendResponse,
      });

      // Register a fontkit instance and apply the standard font to all text fields
      pdfDoc.registerFontkit(fontkit);
      const standardFont = pdfDoc.embedStandardFont(StandardFonts.Helvetica);
      pdfFields.forEach((field) => {
        if (field instanceof PDFTextField) {
          field.defaultUpdateAppearances(standardFont);
        }
      });

      let pdfBytes;

      try {
        pdfBytes = await pdfDoc.save({ updateFieldAppearances: false });
      } catch (e) {
        console.error(e);
        sendResponse(500, 'Failed to serialize PDF document');
        return;
      }

      // res.removeHeader('Content-Security-Policy');

      res.setHeader('Content-Disposition', `inline; filename="${filename}"`);
      res.setHeader('Content-Length', pdfBytes.length);
      res.setHeader('Content-Type', 'application/pdf');
      res.send(Buffer.from(pdfBytes));
    });
  },
};

export default endpoint;
