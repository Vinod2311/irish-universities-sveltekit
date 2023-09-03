

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1de5284b.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/singletons.aada7f46.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/paths.86f99c48.js"];
export const stylesheets = [];
export const fonts = [];
