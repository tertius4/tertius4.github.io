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
		client: {start:"_app/immutable/entry/start.VoIfNG4n.js",app:"_app/immutable/entry/app.C5rehy_2.js",imports:["_app/immutable/entry/start.VoIfNG4n.js","_app/immutable/chunks/CqCkh8zZ.js","_app/immutable/chunks/C4Yy5BIK.js","_app/immutable/chunks/BuoSeif0.js","_app/immutable/chunks/BH1uJKPK.js","_app/immutable/chunks/SxKQB1hq.js","_app/immutable/entry/app.C5rehy_2.js","_app/immutable/chunks/BuoSeif0.js","_app/immutable/chunks/C4Yy5BIK.js","_app/immutable/chunks/BH1uJKPK.js","_app/immutable/chunks/SxKQB1hq.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Ct86THFs.js","_app/immutable/chunks/G6XPxs3T.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json","/doenit","/doenit/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
