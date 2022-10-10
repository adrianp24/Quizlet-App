import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { Test } from 'src/app/models/test';
import { SavedTestsService } from 'src/app/services/saved-tests.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  tests: Test[] = []
  constructor(private savedTestsService: SavedTestsService) { }

  ngOnInit(): void {
    // this.initializeTestList();
    this.savedTestsService.getTestList().subscribe();
  }

  // initializeTestList() {3

  //   // this.createsQuestions();
  //   for (let j = 0; j < 5; j++) {
  //   this.savedTests.push(new Test('Course Name', this.createsQuestions(), `Test Name # ${j+1}`))
  //   console.log(`${this.savedTests.length}`);
  //   }
  //   new TestList(this.savedTests);
  // }

  onClickTest() {
    console.log('clicked')
    alert(`Clicked on`)
  }

  // createsQuestions() {
  //   let questions: Question[] = [];
    
  //   for (let j = 0; j < 10 ; j++) {
  //     let answers: Answer[] = [];
  //     answers.push(new Answer(true, ''))
  //     answers.push(new Answer(false, ''))
  //     answers.push(new Answer(false, ''))
  //     answers.push(new Answer(false, ''))
  //     questions.push(new Question('', answers))
      
  //   }
  //   return questions;
  // }




}
