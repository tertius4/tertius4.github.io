import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BBP-KQCA.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CHo_rYOi.js","_app/immutable/chunks/DU8LGMgX.js","_app/immutable/chunks/C-v-Qi80.js","_app/immutable/chunks/pph0JBhg.js"];
export const stylesheets = ["_app/immutable/assets/0.B1wb4Rlx.css"];
export const fonts = [];
