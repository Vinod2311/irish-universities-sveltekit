import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.4def43c9.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/WelcomeNavigator.34a53750.js","_app/immutable/chunks/Header.321d8988.js","_app/immutable/chunks/university-service.04ee4930.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/navigation.51b5c767.js","_app/immutable/chunks/singletons.b1ac2350.js","_app/immutable/chunks/paths.e6a6d15a.js"];
export const stylesheets = [];
export const fonts = [];
