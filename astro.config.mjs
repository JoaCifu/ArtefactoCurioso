// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';



export default defineConfig({
  site: 'https://JoaCifu.github.io',
  base: '/ArtefactoCurioso',
  vite: {
    plugins: [tailwindcss()],
  },
});