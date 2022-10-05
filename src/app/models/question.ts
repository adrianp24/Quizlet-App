import { Answer } from "./answer";

export class Question {

    description: string;
    answers: Answer[] = [];
    constructor(description: string, answers: Answer[]) {
        this.description = description;
        this.answers = answers;
    }


}
