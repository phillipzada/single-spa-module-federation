import { Component } from "@angular/core";

@Component({
  selector: "navbar-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      ul.menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }

      ul.menu li {
        float: left;
      }

      ul.menu li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        cursor: pointer;
      }

      /* Change the link color to #111 (black) on hover */
      ul.menu li a:hover {
        background-color: #111;
      }
    `,
  ],
})
export class AppComponent {
  title = "nav";
}
