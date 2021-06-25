import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';
import { PathLocationStrategy } from '@angular/common';
@NgModule({
	declarations: [ AppComponent, AComponent, BComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [ PathLocationStrategy ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
