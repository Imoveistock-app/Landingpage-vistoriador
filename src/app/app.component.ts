import { Component } from '@angular/core';
import {NgcCookieConsentService} from "ngx-cookieconsent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-page-proprietario1';


  constructor(private ngCookieService: NgcCookieConsentService) {
  }
  ngOnInit(){
    // this.ngCookieService.destroy();
    this.ngCookieService.init(this.ngCookieService.getConfig())
  }
}
