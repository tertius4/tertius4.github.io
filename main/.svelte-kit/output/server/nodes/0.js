import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DTnDcsqT.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/WdMg3gl8.js","_app/immutable/chunks/YHWgnW0Y.js","_app/immutable/chunks/Dw0bRWTK.js","_app/immutable/chunks/jBBiBjhY.js"];
export const stylesheets = ["_app/immutable/assets/0.B0fcRfbQ.css"];
export const fonts = [];
