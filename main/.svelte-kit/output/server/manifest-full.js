export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cover-image.webp","doenit-logo.webp","instellings.webp","page-not-found.webp","robots.txt","sitemap.xml","tertius-pic-square.webp","tertius_picture.webp","tradesmith-logo.png","trou-webwerf-logo.webp","tuisblad.webp","vinkel-of-koljander-logo.webp","wysig-taak.webp"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain",".xml":"text/xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DpLxDQGO.js",app:"_app/immutable/entry/app.Bx8Wyk2u.js",imports:["_app/immutable/entry/start.DpLxDQGO.js","_app/immutable/chunks/cGz_a6oB.js","_app/immutable/chunks/Du52XyC-.js","_app/immutable/chunks/WdMg3gl8.js","_app/immutable/chunks/YHWgnW0Y.js","_app/immutable/chunks/Dw0bRWTK.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/entry/app.Bx8Wyk2u.js","_app/immutable/chunks/WdMg3gl8.js","_app/immutable/chunks/Du52XyC-.js","_app/immutable/chunks/YHWgnW0Y.js","_app/immutable/chunks/Dw0bRWTK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/V8-blTml.js","_app/immutable/chunks/Br3kh3WJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
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
