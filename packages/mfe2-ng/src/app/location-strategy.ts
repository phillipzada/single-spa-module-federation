import {
  APP_BASE_HREF,
  PathLocationStrategy,
  PlatformLocation,
} from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';

// @ts-ignore
if (!String.prototype.replaceAll) {
  // @ts-ignore
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (
      Object.prototype.toString.call(str).toLowerCase() === '[object regexp]'
    ) {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

@Injectable()
export class MyLocationStrategy extends PathLocationStrategy {
  private baseHref: string;

  constructor(
    private _myPlatformLocation: PlatformLocation,
    @Optional() @Inject(APP_BASE_HREF) href?: string
  ) {
    super(_myPlatformLocation, href);
    if (href == null) {
      href = this._myPlatformLocation.getBaseHrefFromDOM();
    }

    if (href == null) {
      throw new Error(
        `No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.`
      );
    }

    this.baseHref = href;
  }

  prepareExternalUrl(internal: string): string {
    // @ts-ignore
    return super.prepareExternalUrl(internal).replaceAll('%2F', '/');
  }
}
