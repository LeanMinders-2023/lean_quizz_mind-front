import {render, screen} from "@testing-library/react";
import {QuizzItem} from "@components/QuizzItem/QuizzItem.tsx";
import {expect} from "vitest";
import {QuizzDTO} from "@domain/quizz/quizz.model.ts";

describe("QuizzItem", () => {
    it("renders correctly", () => {
        const quizz: QuizzDTO = {
            name: "irrelevant",
            image: "irrelevantImg",
            difficulty: "irrelevant",
            questions: []
        }

        const {container} = render(<QuizzItem quizzDTO={quizz}/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("renders the cover", () => {
        const quizz: QuizzDTO = {
            name: "irrelevant",
            image: "irrelevantImg",
            difficulty: "irrelevant",
            questions: []
        }
        render(<QuizzItem quizzDTO={quizz}/>)

        const cover = screen.getByRole("img", { name: quizz.name })

        expect(cover).toBeInTheDocument()
    })
})