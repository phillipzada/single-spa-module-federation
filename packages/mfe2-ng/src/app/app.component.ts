import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
	selector: 'mfe2-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {
	}
}
