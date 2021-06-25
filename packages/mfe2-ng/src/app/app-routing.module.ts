import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: 'lazy',
		loadChildren: () => import('./lazy/lazy.module').then((e) => e.LazyModule)
		//
	},
	{ path: '**', component: EmptyRouteComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ { provide: APP_BASE_HREF, useValue: '/app2' } ]
})
export class AppRoutingModule {}
