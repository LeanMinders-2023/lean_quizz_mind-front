import {render} from "@testing-library/react";
import {Searcher} from "@components/Searcher/Searcher.tsx";

describe("Searcher", () => {
    it("renders correctly", () => {
        const { container } = render(<Searcher />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})