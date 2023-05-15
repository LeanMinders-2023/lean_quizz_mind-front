import {render} from "@testing-library/react";

describe("Searcher", () => {
    it("renders correctly", () => {
        const { container } = render(<Searcher />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})