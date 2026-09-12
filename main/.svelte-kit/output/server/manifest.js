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
		client: {start:"_app/immutable/entry/start.D82uY4lD.js",app:"_app/immutable/entry/app.YLx9ZrDw.js",imports:["_app/immutable/entry/start.D82uY4lD.js","_app/immutable/chunks/YZ2Yp0sL.js","_app/immutable/chunks/Chg4t6RR.js","_app/immutable/chunks/Mzdsah1Y.js","_app/immutable/chunks/Dn26GfVg.js","_app/immutable/chunks/e16lVE3f.js","_app/immutable/chunks/Gnqgb4wS.js","_app/immutable/chunks/Quel_c3R.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/entry/app.YLx9ZrDw.js","_app/immutable/chunks/Mzdsah1Y.js","_app/immutable/chunks/Dn26GfVg.js","_app/immutable/chunks/e16lVE3f.js","_app/immutable/chunks/Gnqgb4wS.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Chg4t6RR.js","_app/immutable/chunks/Quel_c3R.js","_app/immutable/chunks/DGFTwpfK.js","_app/immutable/chunks/DR5lN-Jx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
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
