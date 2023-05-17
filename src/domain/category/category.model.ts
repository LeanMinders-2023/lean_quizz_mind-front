import type {Quizz} from "@domain/quizz/quizz.model.ts";

export interface Category {
    id: string;
    name: string;
    quizzes?: Quizz[];
}