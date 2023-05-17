import {render} from "@testing-library/react";
import {QuizzList} from "@components/QuizzList/QuizzList";

describe("QuizzList", () => {
    it("renders correctly", () => {
        const {container} = render(<QuizzList/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})
