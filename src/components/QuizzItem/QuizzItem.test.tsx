import {render, screen, within} from "@testing-library/react";
import {QuizzItem} from "@components/QuizzItem/QuizzItem.tsx";
import {beforeEach, expect} from "vitest";
import {QuizzDTO} from "@domain/quizz/quizz.model.ts";

describe("QuizzItem", () => {
    let quizz: QuizzDTO

    beforeEach(() => {
        quizz = {
            id: "1",
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

    it("renders the information", () => {
        const totalInformationsCells = Object.entries(quizz).length - 2
        render(<QuizzItem quizzDTO={quizz}/>)

        const information = screen.getByRole("row", { name: `${quizz.name}-info`})
        const allInformationCell = screen.getAllByRole("cell")

        expect(information).toBeInTheDocument()
        expect(allInformationCell).toHaveLength(totalInformationsCells)
    })

    it("checks that cells are within row", () => {
        render(<QuizzItem quizzDTO={quizz}/>)

        const information = screen.getByRole("row", { name: `${quizz.name}-info`})
        const allInformationCell = within(information).getAllByRole("cell")

        expect(allInformationCell).not.toHaveLength(0)
    })
})