import tailwindConfig from '@/tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'

/** @type {import('tailwindcss').Config} */
export const config = resolveConfig(tailwindConfig)
