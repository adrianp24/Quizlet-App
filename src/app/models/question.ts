import { Answer } from "./answer";

export class Question {

    description: string;
    answers: Answer[] = [];
    constructor(description: string, answers: Answer[]) {
        this.description = description;
        
        for (let i = 0; i < answers.length; i++) {
            this.answers.push(answers[i])
        }
    }

    deleteAnswer(aIndex: number) {
        this.answers.splice(aIndex, 1)
    }

    addExtraAnswer() {
        let answer = new Answer(false, '');
        this.answers.push(answer);
      }





}
