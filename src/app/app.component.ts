import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infosec';
  router: string;
  constructor(private routerRoute: Router){
    this.router = routerRoute.url;
    console.log(this.router);

  }
}
