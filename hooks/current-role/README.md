<p align="center"><img alt="Directus Logo" src="https://user-images.githubusercontent.com/522079/158864859-0fbeae62-9d7a-4619-b35e-f8fa5f68e0c8.png"></p>

# current-role-hook

This hook injects the current user ID and role in the body element of the Data Studio.
This is useful when you want to apply custom CSS to a specific user or role.

## Usage

1. Install the extension using a package manager or from the Marketplace:

```sh
pnpm add directus-extension-current-role-hook
```

2. Data attribute gets inject in the body element.

![Screenshot 1](.screenshots/01.png)

1. Add your custom CSS:

```css
body[data-user-id="..."] {
  /* custom css */
}

body[data-user-role="..."] {
  /* custom css */
}
```
