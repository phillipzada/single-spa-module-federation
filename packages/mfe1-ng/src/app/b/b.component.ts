import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-b',
	template: `
   <p>b works!</p>
  `
})
export class BComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
