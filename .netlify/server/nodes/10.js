

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.cb0aecf9.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/Header.321d8988.js","_app/immutable/chunks/university-service.04ee4930.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/navigation.b8e26dda.js","_app/immutable/chunks/singletons.ff7ca9ae.js","_app/immutable/chunks/paths.67bdbcb2.js","_app/immutable/chunks/WelcomeNavigator.34a53750.js"];
export const stylesheets = [];
export const fonts = [];
