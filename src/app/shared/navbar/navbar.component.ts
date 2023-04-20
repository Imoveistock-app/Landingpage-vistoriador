import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Router } from '@angular/router';
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
  ) { }

  ngOnInit(): void {
  }
  goAbout(){
    this.router.navigate(['about']);
  }

  public scrollToMakeYourRegistration(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.scrollToMakeYourRegistration'
    });
  }

  public scrollIndicate(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.scrollIndicate'
    });
  }

  knowApp() {
    window.open('https://imoveistock-kjeth28zd-tgt.vercel.app', '_blank')
  }

  goVitrine(){
    window.open(environment.redirect.vitrine, '_blank');
  }
}
