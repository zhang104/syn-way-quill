import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "packages/components/BaseQuill/index.vue",
  output: [
    {
      name: "SynQuill",
      file: "lib/index.js",
      format: "umd",
      sourcemap: false,
      globals: {
        vue: "vue",
      },
    },
  ],
  plugins: [
    resolve({
      extensions: [".vue", ".js"],
    }),

    vue({
      include: /\.vue$/,
    }),
    commonjs(),
    postcss({
      plugins: [],
    }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".vue"],
    }),
  ],
  external: ["vue"],
};
