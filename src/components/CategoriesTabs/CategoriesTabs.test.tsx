import {render} from "@testing-library/react";

describe("CategoriesTabs", () => {
    it("renders correctly", () => {
        const {container} = render(<CategoriesTabs/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})