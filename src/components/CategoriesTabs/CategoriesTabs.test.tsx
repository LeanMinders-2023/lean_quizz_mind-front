import {render} from "@testing-library/react";
import CategoriesTabs from "@components/CategoriesTabs/CategoriesTabs";

describe("CategoriesTabs", () => {
    it("renders correctly", () => {
        const {container} = render(<CategoriesTabs/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})