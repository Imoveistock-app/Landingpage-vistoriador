import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
  ) { }

  ngOnInit(): void {
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

}
