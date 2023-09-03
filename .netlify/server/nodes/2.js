import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.214686b3.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/WelcomeNavigator.34a53750.js","_app/immutable/chunks/Header.22ef1b96.js","_app/immutable/chunks/university-service.48b23381.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/navigation.f8b69f66.js","_app/immutable/chunks/singletons.aada7f46.js","_app/immutable/chunks/paths.86f99c48.js"];
export const stylesheets = [];
export const fonts = [];
