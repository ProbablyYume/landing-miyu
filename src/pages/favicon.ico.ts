import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

export const GET: APIRoute = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const faviconPath = join(__dirname, '../../public/favicon.ico');
    const favicon = readFileSync(faviconPath);
    
    return new Response(favicon, {
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    return new Response('Favicon not found', { status: 404 });
  }
};
