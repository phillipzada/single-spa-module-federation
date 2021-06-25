import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LogLevel, OidcConfigService } from 'angular-auth-oidc-client';

// this is needed as the angular-auth-oidc-client doesnt support module level implementation
@Injectable({
	providedIn: 'root'
})
export class AuthResolver implements Resolve<Promise<any>> {
	constructor(@Inject(OidcConfigService) private oidcConfigService: OidcConfigService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
		const action$ = this.oidcConfigService.withConfig({
			stsServer: 'https://demo.identityserver.io',
			redirectUrl: `${window.location.origin}/app1/auth`,
			postLogoutRedirectUri: `${window.location.origin}/app1/auth`,
			clientId: 'interactive.public.short',
			scope: 'openid profile email offline_access',
			responseType: 'code',
			silentRenew: false,
			useRefreshToken: false,
			logLevel: LogLevel.Debug
		});
		return action$;
	}
}
