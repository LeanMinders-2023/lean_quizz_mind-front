import {render, screen} from "@testing-library/react";
import {Searcher} from "@components/Searcher/Searcher.tsx";

describe("Searcher", () => {
    it("renders correctly", () => {
        const { container } = render(<Searcher />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("contains input element by role", () => {
        render(<Searcher />)

        const input = screen.getByRole("textbox")

        expect(input).toBeInTheDocument()
    })

    it("contains input element with placeholder", () => {
        render(<Searcher />)

        const input = screen.getByPlaceholderText("Search")

        expect(input).toBeInTheDocument()
    });

    it("contains input with search icon", () => {
        render(<Searcher />)

        const searcherIcon = screen.getByRole("graphics-document", { hidden: true })

        expect(searcherIcon).toBeInTheDocument()
    });


})