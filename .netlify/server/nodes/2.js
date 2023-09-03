import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.5d4eda2d.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/WelcomeNavigator.34a53750.js","_app/immutable/chunks/Header.22ef1b96.js","_app/immutable/chunks/university-service.48b23381.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/navigation.dcd2a872.js","_app/immutable/chunks/singletons.a9230970.js","_app/immutable/chunks/paths.3b98a335.js"];
export const stylesheets = [];
export const fonts = [];
