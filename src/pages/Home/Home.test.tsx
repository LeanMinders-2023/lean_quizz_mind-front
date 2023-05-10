import { render } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})