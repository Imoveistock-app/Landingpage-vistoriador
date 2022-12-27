import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {
  changeValue?: string


  constructor(
    private userService: UserService,
    private modalSevice: NgbModal
  ) {
  }

  exit(){
    this.modalSevice.dismissAll();
  }
  ngOnInit(): void {
    this.changeValue = this.userService.termsOrPolitic
  }
}
