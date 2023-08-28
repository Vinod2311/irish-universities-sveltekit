

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.bbc9dd02.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/Header.321d8988.js","_app/immutable/chunks/university-service.04ee4930.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/navigation.11dbc5ba.js","_app/immutable/chunks/singletons.2f7e195d.js","_app/immutable/chunks/paths.f8927a73.js","_app/immutable/chunks/WelcomeNavigator.34a53750.js"];
export const stylesheets = [];
export const fonts = [];
