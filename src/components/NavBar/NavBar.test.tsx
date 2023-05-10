import { render } from "@testing-library/react";
import { expect } from "vitest";
import { NavBar } from "./NavBar";

describe("NavBar", () => {
    it("renders correctly", () => {
        const { container} = render(<NavBar />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})