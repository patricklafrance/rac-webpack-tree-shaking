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

We can see in the [dist/main.js](./dist/main.js) file that the whole `react-aria-components` has been added to the webpack production bundle.
