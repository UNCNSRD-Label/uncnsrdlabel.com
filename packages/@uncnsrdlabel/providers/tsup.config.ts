import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  banner: {
    js: "'use client'",
  },
  clean: true,
  dts: true,
  entry: ["src/**/*.{ts,tsx}"],
  external: ["react"],
  format: ["cjs", "esm"],
  minify: false,
  splitting: true,
  treeshake: true,
  ...options,
}));