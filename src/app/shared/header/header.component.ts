import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      number: ['', [Validators.required]],
      termsAndPolicy: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    
  }

}
