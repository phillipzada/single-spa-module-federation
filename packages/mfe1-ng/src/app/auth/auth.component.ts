import { Component, Injector, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
	selector: 'app-auth',
	template: `
    <h3>Login</h3>

    <p>
        Let's log you in
    </p>

    <button type="button" (click)="login()">Login</button>
  `
})
export class AuthComponent implements OnInit {
	constructor(private oidcSecurityService: OidcSecurityService) {
  }

	ngOnInit() {
		this.oidcSecurityService.checkAuth().subscribe((e) => {
			console.log(e);
		});
	}

	login() {
		this.oidcSecurityService.authorize();
	}

	logout() {
		this.oidcSecurityService.logoff();
	}
}
