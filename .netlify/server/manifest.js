export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dist/images/layers-2x.png","dist/images/layers.png","dist/images/marker-icon-2x.png","dist/images/marker-icon.png","dist/images/marker-shadow.png","dist/leaflet-src.esm.js","dist/leaflet-src.esm.js.map","dist/leaflet-src.js","dist/leaflet-src.js.map","dist/leaflet.css","dist/leaflet.js","dist/leaflet.js.map","favicon.png"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".map":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.0a4c16d7.js","app":"_app/immutable/entry/app.bfb2dc02.js","imports":["_app/immutable/entry/start.0a4c16d7.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/singletons.b0656115.js","_app/immutable/chunks/index.bc1ab0a8.js","_app/immutable/chunks/paths.03c7dc6d.js","_app/immutable/entry/app.bfb2dc02.js","_app/immutable/chunks/scheduler.f65c8eeb.js","_app/immutable/chunks/index.446d64b4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/charts",
				pattern: /^\/charts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/county/[countyId]",
				pattern: /^\/county\/([^/]+?)\/?$/,
				params: [{"name":"countyId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/county/[countyId]/uploadImage",
				pattern: /^\/county\/([^/]+?)\/uploadImage\/?$/,
				params: [{"name":"countyId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
