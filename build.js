import path from 'path';
import { fileURLToPath } from 'url';

import merger from "./merger.js";

// Configura __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

merger({
  folderRoot: path.join(__dirname, "public"),
  output: path.join(__dirname, "public", "app.client.merged.min.js"),
});
