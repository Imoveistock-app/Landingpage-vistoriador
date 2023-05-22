import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterRequestDto } from '../../dtos/user-register-request.dto';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import {ProfileService} from "../../services/profile.service";
import {TermComponent} from "../term/term.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProfileClientEnum} from "../../dtos/enum/profile-client.enum";
import { RedirectAppModalComponent } from './redirect-app-modal/redirect-app-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form: FormGroup;

  request!: UserRegisterRequestDto;

  response: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private profileService: ProfileService,
    private modalService: NgbModal
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      addressZipCode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      termsAndPolicy: ['', [Validators.requiredTrue]]
    })
  }

  ngOnInit(): void {
  }

  submit() {

    var cpf = `${this.form.controls['cpf'].value[0]}${this.form.controls['cpf'].value[1]}${this.form.controls['cpf'].value[2]}.${this.form.controls['cpf'].value[3]}${this.form.controls['cpf'].value[4]}${this.form.controls['cpf'].value[5]}.${this.form.controls['cpf'].value[6]}${this.form.controls['cpf'].value[7]}${this.form.controls['cpf'].value[8]}-${this.form.controls['cpf'].value[9]}${this.form.controls['cpf'].value[10]}`

    this.request = {
      cpf: cpf,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      addressZipCode: this.form.controls['addressZipCode'].value,
      phone: `+55${this.form.controls['phone'].value}`,
      profilesIds: [ProfileClientEnum.indicacao, ProfileClientEnum.proprietario]
    }

    
    
    this.userService.register(this.request).subscribe(
      success => {
        this.toastrService.success('Usuário cadastrado com sucesso!', '', { progressBar: true });
        this.modalService.open(RedirectAppModalComponent, { size: 'sm', centered: true })
        this.form.reset();
      },
      error => {
        this.toastrService.error(`${error.error.errors}`, '', { progressBar: true });
        console.log(error)
      }
    )
  }
  openTermsModal(value: string){
    this.userService.termsOrPolitic = value;
    this.modalService.open(TermComponent,{size:"lg"})
  }

}
