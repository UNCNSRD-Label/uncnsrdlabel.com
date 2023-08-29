import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  clean: true,
  dts: true,
  entry: ["src/**/*.{ts,tsx}"],
  format: ["cjs", "esm"],
  minify: false,
  splitting: true,
  treeshake: true,
  ...options,
}));