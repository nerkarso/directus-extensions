<p align="center"><img alt="Banner" src="https://raw.githubusercontent.com/nerkarso/directus-extensions/master/.github/banner.png"></p>

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
