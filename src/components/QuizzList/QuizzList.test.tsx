import {render} from "@testing-library/react";

describe("QuizzList", () => {
    it("renders correctly", () => {
        const {container} = render(<QuizzList/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})
