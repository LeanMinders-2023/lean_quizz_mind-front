import {render} from "@testing-library/react";
import {Header} from "@components/Header/Header.tsx";

describe("Header", () => {
    it("renders correctly", () => {
        const { container} = render(<Header />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})


