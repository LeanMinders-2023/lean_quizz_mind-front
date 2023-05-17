import type {QuizzDTO} from "@domain/quizz/quizz.model.ts";

interface QuizzItemProps {
    quizzDTO: QuizzDTO
}

export const QuizzItem = ({ quizzDTO }: QuizzItemProps) => {
    const { image, name } = quizzDTO
    return (
        <article>
            <img src={image} alt={name} aria-label={name}/>
        </article>
    )
};