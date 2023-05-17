import {render, screen} from "@testing-library/react";
import {QuizzItem} from "@components/QuizzItem/QuizzItem.tsx";
import {beforeEach, expect} from "vitest";
import {QuizzDTO} from "@domain/quizz/quizz.model.ts";

describe("QuizzItem", () => {
    let quizz: QuizzDTO

    beforeEach(() => {
        quizz = {
            name: "irrelevant",
            image: "irrelevantImg",
            difficulty: "irrelevant",
            questions: []
        }
    })

    it("renders correctly", () => {
        const {container} = render(<QuizzItem quizzDTO={quizz}/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("renders the cover", () => {
        render(<QuizzItem quizzDTO={quizz}/>)

        const cover = screen.getByRole("img", { name: quizz.name })

        expect(cover).toBeInTheDocument()
    })
})