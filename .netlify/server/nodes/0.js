

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.abe8f089.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js","_app/immutable/chunks/university-service.48b23381.js","_app/immutable/chunks/index.bc1ab0a8.js"];
export const stylesheets = [];
export const fonts = [];
