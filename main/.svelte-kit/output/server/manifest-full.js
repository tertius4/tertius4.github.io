export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cover-image.webp","doenit-logo.webp","instellings.webp","page-not-found.webp","robots.txt","sitemap.xml","tertius_picture.webp","tradesmith-logo.png","trou-webwerf-logo.webp","tuisblad.webp","vinkel-of-koljander-logo.webp","wysig-taak.webp"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain",".xml":"text/xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.COchDzRz.js",app:"_app/immutable/entry/app.DrOhvn5F.js",imports:["_app/immutable/entry/start.COchDzRz.js","_app/immutable/chunks/DgiC5fvG.js","_app/immutable/chunks/CYejwDYg.js","_app/immutable/chunks/B-rt0v6a.js","_app/immutable/chunks/ChvWDbGE.js","_app/immutable/chunks/DmvJjNGr.js","_app/immutable/entry/app.DrOhvn5F.js","_app/immutable/chunks/B-rt0v6a.js","_app/immutable/chunks/CYejwDYg.js","_app/immutable/chunks/ChvWDbGE.js","_app/immutable/chunks/DmvJjNGr.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BiZHs1M6.js","_app/immutable/chunks/BiDpajKl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/(me)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/doenit",
				pattern: /^\/doenit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
