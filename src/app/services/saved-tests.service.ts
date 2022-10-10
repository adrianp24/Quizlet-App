import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { Test } from '../models/test';
import { TestList } from '../models/test-list';

@Injectable({
  providedIn: 'root'
})
export class SavedTestsService {
  savedTests: Test[] = [];
  // testList!: TestList;

  constructor() { }

  getTestList(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      setTimeout(function(){
        let testList = [{
          name: 'plus',
          course: 'math',
          questions: [{
            description: '2 plus 2',
            answers: [{
              description: '4', isCorrect: true
            }, {
              description: '5', isCorrect: false
            }, {
              description: '7', isCorrect: false
            }, {
              description: '9', isCorrect: false
            }]
          }, {
            description: '4 plus 4',
            answers: [{
              description: '4', isCorrect: false
            }, {
              description: '5', isCorrect: false
            }, {
              description: '8', isCorrect: true
            }, {
              description: '9', isCorrect: false
            }]
          }]
        }];
        observer.next(testList);
        observer.complete();
      }, 3000);
    });
  }

  createsQuestions() {
    let questions: Question[] = [];

    for (let j = 0; j < 10; j++) {
      let answers: Answer[] = [];
      answers.push(new Answer(true, ''))
      answers.push(new Answer(false, ''))
      answers.push(new Answer(false, ''))
      answers.push(new Answer(false, ''))
      questions.push(new Question('', answers))
    }
    return questions;
  }

  // getTestList() {
  //   // this.createsQuestions();
  //   for (let j = 0; j < 5; j++) {
  //     this.savedTests.push(new Test('Course Name', this.createsQuestions(), `Test Name # ${j + 1}`))
  //     console.log(`${this.savedTests.length}`);
  //   }
  //   return new TestList(this.savedTests);
  // }
}
