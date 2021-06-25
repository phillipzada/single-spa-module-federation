import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationStart, Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { filter } from 'rxjs/operators';
import { AppProps } from 'single-spa';
import { PathLocationStrategy } from '@angular/common';

@Component({
	selector: 'mfe1-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  private singleSpaPropsSubject!: AppProps;

	constructor(private router: Router, private pathLocation: PathLocationStrategy) {}

	ngOnInit(): void {
		this.router.events.pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((e) => {
        if((e as NavigationStart).url == '/app2') {
          const navigation = this.router.getCurrentNavigation() as Navigation;
          navigation.extras.replaceUrl = false;
          navigation.extras.skipLocationChange = true;
          (this.singleSpaPropsSubject as any).callBack('/app2');
          // this.router.navigateByUrl('/app2', { replaceUrl: true });
        }
      });

		singleSpaPropsSubject.subscribe((e: any) => {
      this.singleSpaPropsSubject = e;
    });
	}
}
