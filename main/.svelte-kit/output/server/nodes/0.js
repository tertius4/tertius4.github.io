import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DP10g2Jd.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BsT7tmvf.js","_app/immutable/chunks/CNaSj9C7.js","_app/immutable/chunks/C36GHLWC.js","_app/immutable/chunks/4cWSwrbE.js"];
export const stylesheets = ["_app/immutable/assets/0.BcSy7uR7.css"];
export const fonts = [];
