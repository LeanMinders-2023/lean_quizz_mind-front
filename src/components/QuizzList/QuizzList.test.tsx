import {render, screen, within} from "@testing-library/react";
import {QuizzList} from "@components/QuizzList/QuizzList";
import {QuizzDTO} from "@domain/quizz/quizz.model";

describe("QuizzList", () => {
    it("renders correctly", () => {
        const {container} = render(<QuizzList quizzes={[]}/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("renders any items", () => {
        const quizzes: QuizzDTO[] = [{
            id: "1",
            name: "irrelevant",
            image: "irrelevantImg",
            difficulty: "irrelevant",
            questions: []
        }]
        render(<QuizzList quizzes={quizzes}/>)

        const allQuizzes = screen.getByRole("list")
        const quizzItem = within(allQuizzes).getByRole("article")

        expect(quizzItem).toBeInTheDocument()
    })
})
