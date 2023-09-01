import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  clean: true,
  dts: true,
  entry: ["src/**/*.{ts,tsx}"],
  format: ["esm"],
  minify: true,
  splitting: true,
  treeshake: true,
  ...options,
}));