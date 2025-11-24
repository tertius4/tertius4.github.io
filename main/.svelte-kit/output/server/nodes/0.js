import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8z8z7u8n.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CSO1kEPt.js","_app/immutable/chunks/DIqDojOK.js","_app/immutable/chunks/CDH6alCE.js"];
export const stylesheets = ["_app/immutable/assets/0.DWFsrMGn.css"];
export const fonts = [];
