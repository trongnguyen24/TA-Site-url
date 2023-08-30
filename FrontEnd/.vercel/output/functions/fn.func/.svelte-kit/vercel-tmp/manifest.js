export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.73ca6c30.js","imports":["_app/immutable/entry/start.73ca6c30.js","_app/immutable/chunks/index.b7dd4f9f.js","_app/immutable/chunks/singletons.db5ade20.js","_app/immutable/chunks/parse.5567e4e2.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.32231064.js","imports":["_app/immutable/entry/app.32231064.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.b7dd4f9f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/brief/[id]",
				pattern: /^\/brief\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/documents",
				pattern: /^\/documents\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/logout/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
