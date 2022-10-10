import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { SavedTestsService } from 'src/app/services/saved-tests.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  tests: Test[] = [];
  test?: Test;

  displayTestList: boolean = true;

  constructor(private savedTestsService: SavedTestsService) { }

  ngOnInit(): void {
    this.savedTestsService.getTestList().subscribe(testsFromService => {
      this.tests = testsFromService;
    });
  }





  onClickTest() {
    this.displayTestList = false;
    this.savedTestsService.getATest().subscribe(testFromService => {
      // this.test = new Test(testFromService.course, testFromService.questions,testFromService.name)
      this.test = new Test(testFromService.course, testFromService.questions, testFromService.name)
    })
    console.log('clicked')
    alert(`Clicked on`)
  }





}
