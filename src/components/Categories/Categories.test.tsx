import {render} from "@testing-library/react";

describe("Categories", () => {
    it("renders correctly", () => {
        const {container} = render(<Categories/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})