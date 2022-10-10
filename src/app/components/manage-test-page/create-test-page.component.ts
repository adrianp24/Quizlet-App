import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-create-test-page',
  templateUrl: './create-test-page.component.html',
  styleUrls: ['./create-test-page.component.css']
})
export class CreateTestPageComponent implements OnInit {
  test!: Test;
  constructor() { }

  ngOnInit(): void {
    this.initializeTest()
  }

  initializeTest() {
    let questions: Question[] = [];

    for (let i = 0; i < 5; i++) {
    let answers: Answer[] = [];

      answers.push(new Answer(true, ''))
      answers.push(new Answer(false, ''))
      answers.push(new Answer(false, ''))
      answers.push(new Answer(false, ''))
      questions.push(new Question('', answers))
    }
    this.test = new Test('testing', questions, 'testing')
  }

}
