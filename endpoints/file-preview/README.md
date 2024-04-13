<p align="center"><img alt="Directus Logo" src="https://user-images.githubusercontent.com/522079/158864859-0fbeae62-9d7a-4619-b35e-f8fa5f68e0c8.png"></p>

# file-preview-endpoint

This endpoint allows you to preview files stored in Directus.
This is useful when you want to preview an image or PDF in the Live Preview.

## Usage

1. Install the extension using a package manager or from the Marketplace:

```sh
pnpm add directus-extension-file-preview-endpoint
```

2. Get the **Filename (Disk)** value of the file from the File Library.

3. Construct the URL:

**Format:**

```sh
<PUBLIC_URL>/file-preview/<filename_disk>
```

**Example:**

```sh
http://example.com/file-preview/33461458-ed8b-4917-9f74-318ef4731ddf.png
```
