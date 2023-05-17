import {render, within} from "@testing-library/react";
import CategoriesTabs from "@components/CategoriesTabs/CategoriesTabs";

describe("CategoriesTabs", () => {
    it("renders correctly", () => {
        const {container} = render(<CategoriesTabs/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("does not contains quizzes", () => {
        const {container} = render(<CategoriesTabs/>)
        const quizzList = within(container).getByText("This category has not quizzes")

        expect(quizzList).toBeInTheDocument()
    })

    it("contains a quizz list", () => {
        const {container} = render(<CategoriesTabs/>)
        const quizzList = within(container).getByRole("list")

        expect(quizzList).toBeInTheDocument()
    })
})