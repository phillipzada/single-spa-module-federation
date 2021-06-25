import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-a',
	template: `
   <p>a works!</p>

   <p>
	<a routerLink="/app2">Navigate to App 2</a>
   </p>
  `
})
export class AComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
