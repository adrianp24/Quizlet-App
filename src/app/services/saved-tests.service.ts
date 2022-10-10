import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class SavedTestsService {
  savedTests: Test[] = [];

  constructor() { }

  // this function pretend to get from database a list of tests
  // DATA is returned in JSON Format
  // an observable can be subscribed to
  // this observer goes through the data stream
  getTestList(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      setTimeout(function () {
        let testList = [{
          name: 'FIRST TEST',
          course: 'Math',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        },
        {
          name: 'SECOND TEST',
          course: 'English',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        },
        {
          name: 'THIRD TEST',
          course: 'Science',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        },
        {
          name: 'FOURTH TEST',
          course: 'History',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        },
        {
          name: 'FIFTH TEST',
          course: 'PE',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        },
        {
          name: 'SIXTH TEST',
          course: 'ART',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        // once the code gets here it is successful so returns complete(`)
        observer.complete();
      }, 1000);
    });
  }

  getATest(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      setTimeout(function () {
        let test = [{
          name: 'TEST',
          course: 'Math',
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
          }, {
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
          },
          {
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
          }, {
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
          },
          {
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
          }, {
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
          }, {
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
        observer.next(test);
        // once the code gets here it is successful so returns complete(`)
        observer.complete();
      }
      )
    })
  }
}


