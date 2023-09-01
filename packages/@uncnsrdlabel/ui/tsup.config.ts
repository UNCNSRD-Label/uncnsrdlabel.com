import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  banner: {
    js: "'use client'",
  },
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