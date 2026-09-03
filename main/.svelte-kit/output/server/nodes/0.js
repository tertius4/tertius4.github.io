import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DcnRDn7Q.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BuoSeif0.js","_app/immutable/chunks/BH1uJKPK.js","_app/immutable/chunks/SxKQB1hq.js","_app/immutable/chunks/blHhaNpA.js"];
export const stylesheets = ["_app/immutable/assets/0.DKM0F4lc.css"];
export const fonts = [];
