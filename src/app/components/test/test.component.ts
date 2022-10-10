import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() test!: Test;

  constructor() { }

  ngOnInit(): void {
  }

  // this works but should it go on the model for reusability
  addQuestion() {
    let answers = [];

    answers.push(new Answer(true, ''))
    answers.push(new Answer(false, ''))
    answers.push(new Answer(false, ''))
    answers.push(new Answer(false, ''))
    this.test.questions.push(new Question('', answers))
  }

  createTest() {

  }

}
