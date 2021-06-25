import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const ngVersion = '^12.0.3';

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps: any) => {
    singleSpaPropsSubject.next(singleSpaProps);

    (window as any).plattform = (window as any).plattform || {};
    let platform = (window as any).plattform[ngVersion];

    if (!platform) {
      platform = platformBrowserDynamic(getSingleSpaExtraProviders());
      (window as any).plattform[ngVersion] = platform;
    }

    return platform.bootstrapModule(AppModule);
  },
  template: '<mfe1-root />',
  Router,
  NavigationStart,
  NgZone,
  // domElementGetter: () => document.getElementsByClassName('.mfe1-root')
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
