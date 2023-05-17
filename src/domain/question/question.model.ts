import type { Answer } from "@domain/answer/answer.model";

export interface Question {
    id: string;
    statement: string;
    answers: Answer[];
}