import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.mjs",
  output: {
    file: "public/index.min.js",
    format: "iife",
    name: "asciiMap",
  },
  plugins: [resolve({ extensions: [".mjs", ".js"] }), terser()],
};
