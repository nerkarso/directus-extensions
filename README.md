<p align="center"><img alt="Banner" src="https://raw.githubusercontent.com/nerkarso/directus-extensions/master/.github/banner.png"></p>

# Directus Extensions

Collection of Directus extensions.

## Available Extensions

### Bundles

- [SweetAlert](bundles/sweetalert/README.md)

### Displays

- [Date Formatter](displays/date-formatter/README.md)

### Endpoints

- [File Preview](endpoints/file-preview/README.md)

### Hooks

- [Current Role](hooks/current-role/README.md)

### Interfaces

- [Spacer](interfaces/spacer/README.md)

### Operations

- [Firebase Messaging](operations/firebase-messaging/README.md)
- [Mailer](operations/mailer/README.md)

### Themes

- [Sleek Dark](themes/sleek-dark/README.md)

## Installation

1. Open the terminal in your Directus project.
2. Install the extension:

```sh
npm install directus-extension-<extension-name>
```

## Creating

The easiest way to start developing extensions is to use the `create-directus-extension` utility:

```sh
pnpx create-directus-extension
```

After specifying the name of the extension, the type of the extension and the programming language you want to use, the utility will create a folder with the recommended file structure to create an extension.

## Developing

Use the `watch` script when developing your extension because it rebuilds your source code whenever a file has changed.

```sh
pnpm watch
```

## Building

Before your extension can be used by Directus, it has to be built. If you used the `create-directus-extension` utility to scaffold your extension, building your extension is as easy as running:

```sh
pnpm build
```

## Publishing

1. Increment the version number in the `package.json` file.

2. Build the package:

```sh
pnpm build
```

3. Publish the package:

```sh
npm publish --access=public
```
