import * as universal from '../entries/pages/dashboard/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+page.js";
export const imports = ["_app/immutable/nodes/6.d7e32f85.js","_app/immutable/chunks/university-service.48b23381.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/MainNavigator.34d6b384.js","_app/immutable/chunks/Header.22ef1b96.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.86f99c48.js"];
export const stylesheets = [];
export const fonts = [];
