import { render } from "@testing-library/react";

describe("Home", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})