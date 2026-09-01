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
		client: {start:"_app/immutable/entry/start.BOCycHto.js",app:"_app/immutable/entry/app.UpC_eeOj.js",imports:["_app/immutable/entry/start.BOCycHto.js","_app/immutable/chunks/4xGoGE9T.js","_app/immutable/chunks/DUI2O8Fk.js","_app/immutable/chunks/BA3sBYwL.js","_app/immutable/chunks/CIdfx8GB.js","_app/immutable/chunks/BJEp80Tu.js","_app/immutable/entry/app.UpC_eeOj.js","_app/immutable/chunks/BA3sBYwL.js","_app/immutable/chunks/CIdfx8GB.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DUI2O8Fk.js","_app/immutable/chunks/BJEp80Tu.js","_app/immutable/chunks/D37eTNF2.js","_app/immutable/chunks/BMQttaPa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
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
