import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  minify: false,
  clean: true,
  ...options,
}));