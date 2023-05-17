import {render} from "@testing-library/react";

const QuizzList = () => <ul></ul>;

describe("QuizzList", () => {
    it("renders correctly", () => {
        const {container} = render(<QuizzList/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})
