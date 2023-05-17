import type { Question } from "@domain/question/question.model";

interface Quizz {
    id: string;
    name: string;
    description: string;
    image: string;
    difficulty: string;
    questions: Question[];
}

type QuizzDTO = Pick<Quizz, "name" | "image" | "difficulty" | "questions">

export type {
    Quizz,
    QuizzDTO
}