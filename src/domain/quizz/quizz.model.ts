import type { Question } from "@domain/question/question.model";

export interface Quizz {
    id: string;
    name: string;
    description: string;
    image: string;
    difficulty: string;
    questions: Question[];
}