import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-create-question-container',
  templateUrl: './create-question-container.component.html',
  styleUrls: ['./create-question-container.component.css']
})
export class CreateQuestionContainerComponent implements OnInit {
  question!: Question;
  answers: Answer[] = [];
  answerDescription = '';
  isCorrect?: boolean;
  // numberOfAnswerInputs: number = 3;


  constructor() { }

  ngOnInit(): void {
    this.initializeAnswers();
    this.initializeQuestion();

  }

  initializeQuestion() {
    this.question = new Question('', this.answers);
  }

  initializeAnswers() {
    // creates instance of each answer
    for (let i = 0; i < 3; i++) {
      let answer = new Answer(false, '');
      this.answers.push(answer);
    }
    this.question = new Question('', this.answers);
  }

  addExtraAnswer() {
    let answer = new Answer(false, '');
    this.answers.push(answer);
  }


  // saveQuestion() {
  //   let tempAnswersArray = [];
  //   let answer1 = new Answer(true, 'Biden');
  //   tempAnswersArray.push(answer1)
  //   let answer2 = new Answer(false, 'Trump');
  //   tempAnswersArray.push(answer2)
  //   let answer3 = new Answer(false, 'Obama');
  //   tempAnswersArray.push(answer3)
  //   let answer4 = new Answer(false, 'Bush');
  //   tempAnswersArray.push(answer4)
  //   let firstQuestion = new Question("Who is the president of USA?", tempAnswersArray)
  //   console.log(`QUESTION: ${firstQuestion.description}`)
  //   console.log(`-${firstQuestion.answers[0].description}`)
  //   console.log(`-${firstQuestion.answers[1].description}`)
  //   console.log(`-${firstQuestion.answers[2].description}`)
  //   console.log(`-${firstQuestion.answers[3].description}`)
  //   if(firstQuestion.answers[0].isCorrect) {
  //     console.log('Yes')
  //   } else {
  //     console.log('no')

  //   }
  // }

  testSaveQuestion() {
    let tempAnswersArray = [];

    for (let i = 0; i < this.answers!.length; i++) {
      let answer = new Answer(this.answers![i].isCorrect, this.answers![i].description);
      if (answer.description !== '') {
        tempAnswersArray.push(answer);
      }
    }
    this.question = new Question(this.question.description, this.answers);
    
    //under is for console logging
    console.log(`***Question: ${this.question.description}`)
    for (let i = 0; i < tempAnswersArray.length; i++) {
      console.log(`Answer #${i+1}.${tempAnswersArray[i].description}----- isCorrect ${tempAnswersArray[i].isCorrect}`)

    }
  }


}
