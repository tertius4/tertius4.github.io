import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DGCKadKZ.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CjXCw13j.js","_app/immutable/chunks/IWRaZMeA.js","_app/immutable/chunks/hUyNwIcC.js","_app/immutable/chunks/IFqT252O.js"];
export const stylesheets = ["_app/immutable/assets/0.dmKeBhXw.css"];
export const fonts = [];
