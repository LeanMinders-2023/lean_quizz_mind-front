import { render } from "@testing-library/react";

describe("NavBar", () => {
    it("renders correctly", () => {
        const { container} = render(<NavBar />)

        expect(container).toBeInTheDocument()
    })
})