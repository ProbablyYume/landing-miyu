// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Base URL pour le domaine personnalisé (racine)
  // Si vous déployez aussi sur GitHub Pages avec chemin, utilisez: base: '/landing-miyu/'
  base: '/',
  integrations: [react()],
});
