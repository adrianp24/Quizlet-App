export class Answer {
    isCorrect: boolean;
    description: string;

    constructor(isCorrect: boolean, description: string) {
        this.isCorrect = isCorrect;
        this.description = description;
    }
}
