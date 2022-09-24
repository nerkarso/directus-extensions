import { defineOperationApi } from '@directus/extensions-sdk';
import { Attachment, MailMessage, Options, StreamAttachment } from './_types';

export default defineOperationApi<Options>({
  id: 'mailer',
  // @ts-ignore
  handler: async (options, context) => {
    const { AssetsService, MailService } = context.services;

    // Assets service
    const assetsService = new AssetsService({
      accountability: context.accountability,
      schema: context.getSchema(),
    });

    // Mail service
    const mailService = new MailService({
      accountability: context.accountability,
      schema: context.getSchema(),
    });

    // Get the attachments
    const attachments = async (fileIds: string[]) => {
      let list: Attachment[] = new Array();
      let streamAttachments: StreamAttachment[] = new Array();

      // Resolve all streams to an array
      streamAttachments = await Promise.all(fileIds.map((id) => assetsService.getAsset(id, {})));

      // Create attachment objects from streams
      streamAttachments.forEach((asset) => {
        const { file, stream } = asset;
        let attachment: Attachment = new Object();
        attachment.contentType = file.type;
        attachment.filename = file.filename_download;
        attachment.content = stream;
        list.push(attachment);
      });

      // Return our array of formatted attachments
      return list;
    };

    // Create the email
    const create = async (payload: Options) => {
      let mail: MailMessage = new Object();

      if (payload.from) mail.from = payload.from;
      if (payload.to) mail.to = payload.to;
      if (payload.cc) mail.cc = payload.cc;
      if (payload.bcc) mail.bcc = payload.bcc;
      if (payload.replyTo) mail.replyTo = payload.replyTo;
      if (payload.subject) mail.subject = payload.subject;
      if (payload.template) {
        mail.template = {
          name: payload.template,
          data: payload.data,
        };
      }
      mail.attachments = payload.attachments;

      // Reset attachments field
      if (mail.attachments == null) {
        mail.attachments = new Array();
      }

      // Merge attachments with files
      if (payload.files != null && payload.files.length > 0) {
        let streams = await attachments(payload.files);
        mail.attachments = mail.attachments.concat(streams);
      }

      return mail;
    };

    try {
      const mail = await create(options);
      await mailService.send(mail);
      return mail;
    } catch (ex) {
      return ex;
    }
  },
});
