import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lazy-a',
	template: `
        <p>
           Don't mind me, just being lazy.
        </p>
    `
})
export class LazyAComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: LazyAComponent
			}
		])
	],
	exports: [],
	declarations: [ LazyAComponent ],
	providers: []
})
export class LazyModule {}
