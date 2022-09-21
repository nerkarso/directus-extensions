![Banner](https://user-images.githubusercontent.com/522079/158864859-0fbeae62-9d7a-4619-b35e-f8fa5f68e0c8.png)

# Directus Extensions

Collection of Directus extensions.

## Installation

1. Open the terminal in your Directus project.
2. Install the extension:

```sh
npm install directus-extension-<extension-name>
```

## Creating Extensions

The easiest way to start developing extensions is to use the `create-directus-extension` utility:

```sh
npm init directus-extension
```

After specifying the name of the extension, the type of the extension and the programming language you want to use, the utility will create a folder with the recommended file structure to create an extension.

## Developing your Extension

Use the `watch` script when developing your extension because it rebuilds your source code whenever a file has changed.

```sh
npm run watch
```

## Building your Extension

Before your extension can be used by Directus, it has to be built. If you used the `create-directus-extension` utility to scaffold your extension, building your extension is as easy as running:

```sh
npm run build
```

## Publishing your Extension

To make an extension available to all Directus users, you can publish the npm package created by `@directus/extensions-sdk` to the npm registry. Make sure the name of the package follows the naming convention for package extensions: `directus-extension-<extension-name>` or `@<scope>/directus-extension-<extension-name>`. `<extension-name>` has to be replaced with the name of your extension.

```sh
npm publish -w directus-extension-<extension-name>
```
