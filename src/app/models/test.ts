import { Question } from "./question";

export class Test {
    course: string;
    questions: Question[];
    name: string;

    constructor(course: string, questions: Question[], name: string) {
        this.course = course;
        this.questions = questions;
        this.name = name;
    }

    

}
