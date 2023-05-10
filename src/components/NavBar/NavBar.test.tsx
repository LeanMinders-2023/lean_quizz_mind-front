import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";
import {expect} from "vitest";

describe("NavBar", () => {
    it("renders correctly", () => {
        const { container} = render(<NavBar />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("has a hamburger menu", () => {
        render(<NavBar />)

        const hamburgerIcon = screen.getByRole("graphics-document")

        expect(hamburgerIcon).toBeInTheDocument()
    })
})