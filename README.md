# rac-webpack-tree-shaking

This is a POC to test if React Aria Components can be tree-shaken when using Webpack 5.

## Getting Started

Install the dependencies with:

```bash
pnpm install
```

Build the code:

```bash
pnpm build
```

If you want to serve the build:

```bash
pnpm serve-build
```

## What's in this repository?

The `index.jsx` file render a simple React application with an header and a `Button` component from `react-aria-components`. As we only import a single `Button` component from `react-aria-components`, we expect that only RAC utils/shared code and the `Button` component would be added to the production bundle.

## Conclusion

Tree-shaking does work but it requires to install the `TerserPlugin` and having the `optimization.usedExports: true` configuration.

To test it, first only import the `Button` component from `react-aria-components`:

```jsx
import { Button } from "react-aria-components";

...

<Button
    onClick={() => {
        alert("You clicked me!");
    }}
>
    Click me
</Button>
```

Then, open the [dist/main.js](./dist/main.js) file and search for "ListBox(". **You should find no result.**

Then, also import the `Listbox` component from `react-aria-components`:

```jsx
import { Button, ListBox, ListBoxItem } from "react-aria-components";

...

<Button
    onClick={() => {
        alert("You clicked me!");
    }}
>
    Click me
</Button>
<ListBox aria-label="Favorite animal" selectionMode="single">
    <ListBoxItem>Aardvark</ListBoxItem>
    <ListBoxItem>Cat</ListBoxItem>
    <ListBoxItem>Dog</ListBoxItem>
    <ListBoxItem>Kangaroo</ListBoxItem>
    <ListBoxItem>Panda</ListBoxItem>
    <ListBoxItem>Snake</ListBoxItem>
</ListBox>
```

Open the [dist/main.js](./dist/main.js) file and search for "ListBox(" again. **This time, you should find at least one result!**

## Webpack bundle analyzer

You can't use the [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) plugin to test this as it isn't able to consider tree shaking in the stats that it shows: https://github.com/webpack-contrib/webpack-bundle-analyzer/issues/161
