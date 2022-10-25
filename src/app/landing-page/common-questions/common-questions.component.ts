import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss']
})
export class CommonQuestionsComponent implements OnInit {

  question1: boolean = false;
  question2: boolean = false;
  question3: boolean = false;
  question4: boolean = false;
  question5: boolean = false;
  question6: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openQuestion(value: number) {
    if(value === 1 && this.question1 === false) {
      this.question1 = true;
    } else {
      this.question1 = false;
    }

    if(value === 2 && this.question2 === false) {
      this.question2 = true;
    } else {
      this.question2 = false;
    }

    if(value === 3 && this.question3 === false) {
      this.question3 = true;
    } else {
      this.question3 = false;
    }

    if(value === 4 && this.question4 === false) {
      this.question4 = true;
    } else {
      this.question4 = false;
    }

    if(value === 5 && this.question5 === false) {
      this.question5 = true;
    } else {
      this.question5 = false;
    }

    if(value === 6 && this.question6 === false) {
      this.question6 = true;
    } else {
      this.question6 = false;
    }
  }

}
