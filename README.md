<p align="center"><img alt="Banner" src="https://raw.githubusercontent.com/nerkarso/directus-extensions/master/.github/banner.png"></p>

# Directus Extensions

Collection of Directus extensions.

## Installation

1. Open the terminal in your Directus project.
2. Install the extension:

```sh
npm install directus-extension-<extension-name>
```

## Creating

The easiest way to start developing extensions is to use the `create-directus-extension` utility:

```sh
npx create-directus-extension
```

After specifying the name of the extension, the type of the extension and the programming language you want to use, the utility will create a folder with the recommended file structure to create an extension.

## Developing

Use the `watch` script when developing your extension because it rebuilds your source code whenever a file has changed.

```sh
npm run watch
```

## Building

Before your extension can be used by Directus, it has to be built. If you used the `create-directus-extension` utility to scaffold your extension, building your extension is as easy as running:

```sh
npm run build
```

## Publishing

1. Increment the version number in the `package.json` file.

2. Build the package:

```sh
npm run build
```

3. Publish the package:

```sh
npm publish --access=public
```
