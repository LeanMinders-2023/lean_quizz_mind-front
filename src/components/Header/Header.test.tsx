import {render, screen} from "@testing-library/react";
import {Header} from "@components/Header/Header.tsx";

describe("Header", () => {
    it("renders correctly", () => {
        const { container} = render(<Header />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it('contains navbar component', function () {
        render(<Header />)

        const navbar = screen.getByRole("navigation")

        expect(navbar).toBeInTheDocument()
    });

    it("contains searcher component", function () {
        render(<Header />)

        const searcher = screen.getByRole("textbox")

        expect(searcher).toBeInTheDocument()
    });
})


