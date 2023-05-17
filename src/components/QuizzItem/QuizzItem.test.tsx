import {render} from "@testing-library/react";
import QuizzItem from "@components/QuizzItem/QuizzItem";

describe("QuizzItem", () => {
    it("renders correctly", () => {
        const {container} = render(<QuizzItem/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})