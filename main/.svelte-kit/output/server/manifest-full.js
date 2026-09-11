export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cover-image.webp","doenit-logo.webp","icons/svelte.webp","instellings.webp","page-not-found.webp","robots.txt","sitemap.xml","tertius-pic-square.webp","tertius_picture.webp","tradesmith-logo.png","trou-webwerf-logo.webp","tuisblad.webp","vinkel-of-koljander-logo.webp","wysig-taak.webp"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain",".xml":"text/xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CeR-SdV6.js",app:"_app/immutable/entry/app.Ca354mTP.js",imports:["_app/immutable/entry/start.CeR-SdV6.js","_app/immutable/chunks/BqK34ko_.js","_app/immutable/chunks/C3PQUiLt.js","_app/immutable/chunks/BsT7tmvf.js","_app/immutable/chunks/C8F1-0j3.js","_app/immutable/chunks/CNaSj9C7.js","_app/immutable/chunks/C36GHLWC.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/entry/app.Ca354mTP.js","_app/immutable/chunks/BsT7tmvf.js","_app/immutable/chunks/C8F1-0j3.js","_app/immutable/chunks/CNaSj9C7.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/C3PQUiLt.js","_app/immutable/chunks/C36GHLWC.js","_app/immutable/chunks/BtBJpNRK.js","_app/immutable/chunks/HiGChCIY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/(main)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(main)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(main)/(projects)/doenit",
				pattern: /^\/doenit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(main)/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(main)/(projects)/vinkel-of-koljander",
				pattern: /^\/vinkel-of-koljander\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
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
