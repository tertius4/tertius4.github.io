import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D93df9i0.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/qmVkqO-U.js","_app/immutable/chunks/B64cTtx7.js","_app/immutable/chunks/CZzYaBm8.js","_app/immutable/chunks/DliUrZRJ.js"];
export const stylesheets = ["_app/immutable/assets/0.ZbG3fs7Q.css"];
export const fonts = [];
