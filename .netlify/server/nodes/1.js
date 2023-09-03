

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d59ad540.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/singletons.a9230970.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/paths.3b98a335.js"];
export const stylesheets = [];
export const fonts = [];
