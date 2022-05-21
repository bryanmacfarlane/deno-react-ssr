import { getStyleTag, virtualSheet, twind, renderToString, React, setup } from "./deps.ts";

// https://twind.dev/usage-guides/react.html#server-side-rendering
const sheet = virtualSheet();

setup({
  theme: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Times", "serif"],
    },
  },
  sheet,
});

export function render(content: string) {
    // sheet.reset();
    const styleTag = getStyleTag(sheet);

    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Hello from Deno</title>
          ${styleTag}
        </head>
        <body>
          ${content}
        </body>
      </html>`;
  }