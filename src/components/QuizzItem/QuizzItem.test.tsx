import {render} from "@testing-library/react";

const QuizzItem = () => <article></article>;

describe("QuizzItem", () => {
    it("renders correctly", () => {
        const {container} = render(<QuizzItem/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})