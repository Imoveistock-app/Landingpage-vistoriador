import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {TermComponent} from "../term/term.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  goTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  openTermsModal(value: string){
    this.userService.termsOrPolitic = value;
    this.modalService.open(TermComponent,{size:"lg"})
  }

  cookies() {
    this.router.navigate(['cookie-policy']);
  }

  goToFacebook() {
    window.open('https://www.facebook.com/imoveistock', '_blank')
  }
  goToInstagram() {
    window.open('https://www.instagram.com/imoveistock/', '_blank')
  }
  goToLinkedin() {
    window.open('https://www.linkedin.com/company/imoveistock/', '_blank')
  }
  goToYoutube() {
    window.open('https://www.youtube.com/@imoveistock5198', '_blank')
  }

}
