import tailwindConfig from "@/tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

/** @type {import('tailwindcss').Config} */
export const config = resolveConfig(tailwindConfig);

export const minWidthSm =
  (!Array.isArray(config.theme?.screens) && config.theme?.screens?.sm) ?? "0px";

export const minWidthMd =
  (!Array.isArray(config.theme?.screens) && config.theme?.screens?.md) ?? "0px";

export const minWidthLg =
  (!Array.isArray(config.theme?.screens) && config.theme?.screens?.lg) ?? "0px";

export const minWidthXl =
  (!Array.isArray(config.theme?.screens) && config.theme?.screens?.xl) ?? "0px";
