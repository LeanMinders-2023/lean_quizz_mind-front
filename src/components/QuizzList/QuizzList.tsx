import type {QuizzDTO} from "@domain/quizz/quizz.model";
import {QuizzItem} from "@components/QuizzItem/QuizzItem";

interface QuizzListProps {
    quizzes: QuizzDTO[]
}

export const QuizzList = ({ quizzes }: QuizzListProps) => (
    <ul>
        {quizzes.map(quizz => (
            <li key={quizz.id}>
                <QuizzItem quizzDTO={quizz} />
            </li>
        ))}
    </ul>
);