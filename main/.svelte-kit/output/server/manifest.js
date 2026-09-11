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
		client: {start:"_app/immutable/entry/start.DSjnfNc5.js",app:"_app/immutable/entry/app.D1lJPCAP.js",imports:["_app/immutable/entry/start.DSjnfNc5.js","_app/immutable/chunks/B2vTV8ut.js","_app/immutable/chunks/C3PQUiLt.js","_app/immutable/chunks/BsT7tmvf.js","_app/immutable/chunks/C8F1-0j3.js","_app/immutable/chunks/CNaSj9C7.js","_app/immutable/chunks/C36GHLWC.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/entry/app.D1lJPCAP.js","_app/immutable/chunks/BsT7tmvf.js","_app/immutable/chunks/C8F1-0j3.js","_app/immutable/chunks/CNaSj9C7.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/C3PQUiLt.js","_app/immutable/chunks/C36GHLWC.js","_app/immutable/chunks/BtBJpNRK.js","_app/immutable/chunks/HiGChCIY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
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
