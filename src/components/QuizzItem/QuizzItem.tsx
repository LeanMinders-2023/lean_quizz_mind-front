import type {QuizzDTO} from "@domain/quizz/quizz.model.ts";

interface QuizzItemProps {
    quizzDTO: QuizzDTO
}

export const QuizzItem = ({ quizzDTO }: QuizzItemProps) => {
    const { image, name, difficulty, questions} = quizzDTO
    return (
        <article>
            <img src={image} alt={name} aria-label={name}/>
            <div role="row" aria-label={`${name}-info`}>
                <h3 role="cell">{name}</h3>
                <p role="cell">Difficulty: {difficulty}</p>
                <p role="cell">Questions: {questions.length}</p>
            </div>
        </article>
    )
};