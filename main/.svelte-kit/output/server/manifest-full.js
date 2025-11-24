export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["doenit-logo.webp","instellings.webp","page-not-found.webp","robots.txt","sitemap.xml","tertius_picture.webp","tuisblad.webp","wysig-taak.webp"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DX4G1YKJ.js",app:"_app/immutable/entry/app.gJS_N4Qe.js",imports:["_app/immutable/entry/start.DX4G1YKJ.js","_app/immutable/chunks/B7fx7njZ.js","_app/immutable/chunks/CzOl981b.js","_app/immutable/chunks/DIqDojOK.js","_app/immutable/chunks/6CgbfeRc.js","_app/immutable/entry/app.gJS_N4Qe.js","_app/immutable/chunks/DIqDojOK.js","_app/immutable/chunks/6CgbfeRc.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CzOl981b.js","_app/immutable/chunks/C1Sh3YFC.js","_app/immutable/chunks/CC70Z4GQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/doenit",
				pattern: /^\/doenit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
