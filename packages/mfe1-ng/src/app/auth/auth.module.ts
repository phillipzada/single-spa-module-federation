import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthResolver } from './auth.resolver';
// ...

@NgModule({
	declarations: [ AuthComponent ],
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: AuthComponent,
				resolve: { auth: AuthResolver }
			}
		])
	]
	// ...
})
export class LoginModule {}
