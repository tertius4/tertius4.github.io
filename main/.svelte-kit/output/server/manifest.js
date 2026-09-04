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
		client: {start:"_app/immutable/entry/start.CD_3o54B.js",app:"_app/immutable/entry/app.C4Zw2zBY.js",imports:["_app/immutable/entry/start.CD_3o54B.js","_app/immutable/chunks/DA205z4O.js","_app/immutable/chunks/D7uSHXSy.js","_app/immutable/chunks/qmVkqO-U.js","_app/immutable/chunks/B64cTtx7.js","_app/immutable/chunks/CZzYaBm8.js","_app/immutable/entry/app.C4Zw2zBY.js","_app/immutable/chunks/qmVkqO-U.js","_app/immutable/chunks/D7uSHXSy.js","_app/immutable/chunks/B64cTtx7.js","_app/immutable/chunks/CZzYaBm8.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CpBC_Be2.js","_app/immutable/chunks/BmR0ARdT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/doenit"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
