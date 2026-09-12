import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C_YSGVdB.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Mzdsah1Y.js","_app/immutable/chunks/Gnqgb4wS.js","_app/immutable/chunks/Quel_c3R.js","_app/immutable/chunks/DJl0zoxz.js","_app/immutable/chunks/e16lVE3f.js"];
export const stylesheets = ["_app/immutable/assets/0.CcgTkjbO.css"];
export const fonts = [];
