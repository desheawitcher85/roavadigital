import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = () =>
  new Response('This page no longer exists.', {
    status: 410,
    headers: { 'Content-Type': 'text/plain' },
  });
