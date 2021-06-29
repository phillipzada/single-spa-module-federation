import { navigateToUrl, registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';
import { loadRemoteModule } from './dynamic-loader/loader';
// import { loadRemoteModule } from "@angular-architects/module-federation";
import 'regenerator-runtime/runtime';
import 'core-js/stable';

// // function loadRemoteModule(args) {
// //   if (!args.remoteEntry) {
// //     return;
// //   }

// //   return async () => {
// //     debugger;
// //     const element = document.createElement("script");

// //     element.src = args.remoteEntry;
// //     element.type = "text/javascript";
// //     element.async = true;

// //     element.onload = () => {
// //       console.log(`Dynamic Script Loaded: ${args.url}`);
// //       var module = loadComponent(args.remoteName, args.exposedModule);
// //       return module;
// //     };

// //     element.onerror = () => {
// //       console.error(`Dynamic Script Error: ${args.url}`);
// //     };

// //     document.head.appendChild(element);
// //   };
// // }

// // function loadComponent(scope, module) {
// //   return async () => {
// //     // Initializes the share scope. This fills it with known provided modules from this build and all remotes
// //     await __webpack_init_sharing__("default1");
// //     const container = window[scope]; // or get the container somewhere else
// //     // Initialize the container, it may provide shared modules
// //     // @ts-ignore
// //     await container.init(__webpack_share_scopes__.default);
// //     // @ts-ignore
// //     const factory = await container.get(module);
// //     const Module = factory();
// //     return Module;
// //   };
// // }

// @ts-ignore
import('dep/DEP').then(() => {

  (window as any).sharedScope = __webpack_require__.S["default"];

	const loadingFns = {
	  // @ts-ignore
	 // mfe1: () => import("mfe1/MFE1"),
	    // @ts-ignore
	  mfe1: ()=> {
	    return loadRemoteModule({
	      remoteEntry: "http://localhost:4301/remoteEntry.js",
	      remoteName: "mfe1",
	      exposedModule: "./MFE1",
	    });
	  },
	  nav: ()=> {
	    return loadRemoteModule({
	      remoteEntry: "http://localhost:4303/remoteEntry.js",
	      remoteName: "nav",
	      exposedModule: "./App",
	    });
	  },
	  mfe2: ()=> {
	    return loadRemoteModule({
	      remoteEntry: "http://localhost:4302/remoteEntry.js",
	      remoteName: "mfe2",
	      exposedModule: "./App",
	    });
	  },
	  app3: ()=> {
	    return loadRemoteModule({
	      remoteEntry: "http://localhost:4304/remoteEntry.js",
	      remoteName: "app3",
	      exposedModule: "./App",
	    });
	  },
	  // @ts-ignore
	  // mfe2: () => import("mfe2/App"),
	  // @ts-ignore
	  // nav: () => import("nav/App"),
	  // @ts-ignore
	  // app3: () => import("app3/App"),
	  // app2: () => import('./app2')
	};

	// (async () => {
	//   await __webpack_init_sharing__("default");
	// })();

	const routes = constructRoutes(microfrontendLayout);
	const applications = constructApplications({
	  routes,
	  loadApp: ({ name }) => {
	    return loadingFns[name]();
	  },
	});
	const layoutEngine = constructLayoutEngine({ routes, applications });

	const callBack = (s) => {
	  navigateToUrl(s);
	};
	applications.forEach(
	  (e) =>
	    (e.customProps = {
	      test: "1",
	      callBack,
	    })
	);

	applications.forEach(registerApplication);

	layoutEngine.activate();

  start();

});
