import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-redirect-app-modal',
  templateUrl: './redirect-app-modal.component.html',
  styleUrls: ['./redirect-app-modal.component.scss']
})
export class RedirectAppModalComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    window.open('https://imoveistock-app.vercel.app/auth/insert-tel', '_blank');
    this.exit();
  }

  exit() {
    this.modalService.dismissAll()
  }

}
