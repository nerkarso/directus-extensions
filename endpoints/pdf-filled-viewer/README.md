<p align="center"><img alt="Banner" src="https://raw.githubusercontent.com/nerkarso/directus-extensions/master/.github/banner.png"></p>

# PDF Filled Viewer Endpoint

This endpoint allows you to view a filled PDF file in Directus.

## Usage

1. Install the extension using a package manager or from the Marketplace:

```sh
npm install directus-extension-pdf-filled-viewer-endpoint
```

2. Import this [collection](https://github.com/nerkarso/directus-extensions/blob/master/endpoints/pdf-filled-viewer/data/collection.json).

3. Update the settings by adding your form filling logic:

```js
return async function (props) {
  const { settings, query, form, fields, createItemsService, logFields, updateFilename, sendResponse } = props;
  const { collection, id } = query;

  if (!collection || !id) {
    sendResponse(404, 'Missing query params: collection or id');
    return;
  }

  try {
    const itemsService = await createItemsService(collection);
    const item = await itemsService.readOne(id);

    form.getCheckBox('<field>').check();
    form.getTextField('<field>').setText('...');
  } catch (e) {
    console.error(e);
  }
}
```

4. Add this as the Preview URL:

**Format:**

```sh
<PUBLIC_URL>/pdf-filled-viewer/<filename_disk>
```

**Example:**

```sh
http://localhost:8055/pdf-filled-viewer/33461458-ed8b-4917-9f74-318ef4731ddf.pdf?collection=items&id=1
```
