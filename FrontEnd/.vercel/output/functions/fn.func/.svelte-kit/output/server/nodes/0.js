import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.436cace1.js';
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.436cace1.js","_app/immutable/chunks/index.b7dd4f9f.js","_app/immutable/chunks/stores.53385f21.js","_app/immutable/chunks/singletons.db5ade20.js","_app/immutable/chunks/forms.834dbd2e.js","_app/immutable/chunks/parse.5567e4e2.js"];
export const stylesheets = ["_app/immutable/assets/_layout.0d92347e.css"];
export const fonts = [];
