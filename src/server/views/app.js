export const renderIndex = ({ html, css, js, inlineCSS, emotionCSS }) => `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Games Tracker</title>
      ${css ? `<link rel="stylesheet" href="${css}">` : ""}
      ${inlineCSS ? `<style>${inlineCSS}</style>` : ""}
      <script>window.__emotion = ${emotionCSS}</script>
      <script src="${js}" defer></script>
      ${
        process.env.NODE_ENV === "production"
          ? `<script src="${js}" defer></script>`
          : `<script src="${js}" defer crossorigin></script>`
      }
    </head>

    <body>
      <div id="root">${html}</div>
    </body>
  </html>
`;
