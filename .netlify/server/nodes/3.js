import * as universal from '../entries/pages/charts/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/charts/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/charts/+page.js";
export const imports = ["_app/immutable/nodes/3.f6ec1340.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/Header.22ef1b96.js","_app/immutable/chunks/university-service.48b23381.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/MainNavigator.34d6b384.js"];
export const stylesheets = [];
export const fonts = [];
