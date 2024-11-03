import { merger, build_SASS_rollup } from "merger-client-static-jsx";

await build_SASS_rollup({
  mainSASS: "./theme/scss/abrevs.scss",
  outCSS: "./theme/css/main-sass.css",
});

merger({
  folderRoot: "./static/jsx",
  output: "./static/js/app.client.merged.min.js",
});
