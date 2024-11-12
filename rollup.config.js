import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./app/index.mjs",
  output: {
    file: "./static/js/index.all.min.js",
    format: "iife",
    name: "asciiMap",
  },
  plugins: [resolve({ extensions: [".mjs", ".js"] }), terser()]
};
