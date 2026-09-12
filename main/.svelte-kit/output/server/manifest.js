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
		client: {start:"_app/immutable/entry/start.l-tGQ3H7.js",app:"_app/immutable/entry/app.CE13jsKG.js",imports:["_app/immutable/entry/start.l-tGQ3H7.js","_app/immutable/chunks/zXxUKqkW.js","_app/immutable/chunks/BSYXwn4_.js","_app/immutable/chunks/CHo_rYOi.js","_app/immutable/chunks/DcsR2zyN.js","_app/immutable/chunks/DU8LGMgX.js","_app/immutable/chunks/C-v-Qi80.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/entry/app.CE13jsKG.js","_app/immutable/chunks/CHo_rYOi.js","_app/immutable/chunks/DcsR2zyN.js","_app/immutable/chunks/DU8LGMgX.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BSYXwn4_.js","_app/immutable/chunks/C-v-Qi80.js","_app/immutable/chunks/D8KtlTFE.js","_app/immutable/chunks/Ds3NoaC3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/doenit","/skills","/vinkel-of-koljander"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
