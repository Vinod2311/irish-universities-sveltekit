

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eb743957.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/singletons.b0656115.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/paths.03c7dc6d.js"];
export const stylesheets = [];
export const fonts = [];
