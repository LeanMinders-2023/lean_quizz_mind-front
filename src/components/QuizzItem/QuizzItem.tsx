import type {QuizzDTO} from "@domain/quizz/quizz.model.ts";

interface QuizzItemProps {
    quizzDTO: QuizzDTO
}

export const QuizzItem = ({ quizzDTO }: QuizzItemProps) => {
    const { image, name, difficulty, questions} = quizzDTO
    return (
        <article className="w-full min-h-[200px] flex justify-around shadow-md p-5">
            <img src={image} alt={name} aria-label={name} className="w-2/4 object-cover rounded-lg"/>
            <div role="row" aria-label={`${name}-info`} className="w-1/3 flex flex-col justify-center">
                <h3 role="cell" className="font-bold">{name}</h3>
                <p role="cell">Difficulty: {difficulty}</p>
                <p role="cell">Questions: {questions.length}</p>
            </div>
        </article>
    )
};