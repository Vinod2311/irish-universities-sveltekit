import * as universal from '../entries/pages/charts/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/charts/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/charts/+page.js";
export const imports = ["_app/immutable/nodes/3.f5619bba.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/Header.c905d80b.js","_app/immutable/chunks/store.22399be1.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/MainNavigator.34d6b384.js","_app/immutable/chunks/university-service.b3d7c5b4.js"];
export const stylesheets = [];
export const fonts = [];
