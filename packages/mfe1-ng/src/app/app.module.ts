import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';
import { PathLocationStrategy } from '@angular/common';
import { AuthConfigModule } from './auth/auth-config.module';
@NgModule({
	declarations: [ AppComponent, AComponent, BComponent ],
	imports: [ BrowserModule, AppRoutingModule, AuthConfigModule ],
	providers: [ PathLocationStrategy ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
