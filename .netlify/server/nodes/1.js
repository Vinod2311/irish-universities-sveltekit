

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cd5f9e28.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/singletons.ff7ca9ae.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/paths.67bdbcb2.js"];
export const stylesheets = [];
export const fonts = [];
