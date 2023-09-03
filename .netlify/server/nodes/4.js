import * as universal from '../entries/pages/county/_countyId_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/county/_countyId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/county/[countyId]/+page.js";
export const imports = ["_app/immutable/nodes/4.bd2bd952.js","_app/immutable/chunks/university-service.48b23381.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/MainNavigator.34d6b384.js","_app/immutable/chunks/Header.22ef1b96.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.3b98a335.js","_app/immutable/chunks/leaflet-src.34d679d6.js"];
export const stylesheets = [];
export const fonts = [];
