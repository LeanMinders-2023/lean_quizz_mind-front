import {render} from "@testing-library/react";

describe("Header", () => {
    it("renders correctly", () => {
        const { container} = render(<Header />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})


