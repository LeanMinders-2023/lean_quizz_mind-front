import {render, screen, within} from "@testing-library/react";
import { Home } from "./Home";
import {expect} from "vitest";

describe("Home", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("has a NavBar", () => {
        render(<Home />)

        const navBar = screen.getByRole("navigation")

        expect(navBar).toBeInTheDocument()
    })

    it("contains a challenge", () => {
        render(<Home />)

        const challenge = screen.getByRole("section", { name: "random"})
        const quizzItem = within(challenge).getByRole("article")

        expect(quizzItem).toBeInTheDocument()
    })
})