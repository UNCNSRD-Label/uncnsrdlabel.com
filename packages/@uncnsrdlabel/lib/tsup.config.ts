import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  clean: true,
  dts: true,
  entry: ["src/**/*.{ts,tsx}"],
  external: ["react"],
  format: ["esm"],
  minify: false,
  splitting: false,
  treeshake: false,
  ...options,
}));