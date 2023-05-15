import {render, screen} from "@testing-library/react";
import {Searcher} from "@components/Searcher/Searcher.tsx";
import {expect} from "vitest";

describe("Searcher", () => {
    it("renders correctly", () => {
        const { container } = render(<Searcher />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("contains input element", () => {
        render(<Searcher />)

        const input = screen.getByRole("textbox")

        expect(input).toBeInTheDocument()
    })
})