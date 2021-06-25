import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: 'a', component: AComponent },
			{ path: 'b', component: BComponent }
			//
		]
	},
	{ path: '**', component: EmptyRouteComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ { provide: APP_BASE_HREF, useValue: '/app1' } ]
})
export class AppRoutingModule {}
