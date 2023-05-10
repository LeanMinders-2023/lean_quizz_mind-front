import { render } from "@testing-library/react";
import {expect} from "vitest";

const NavBar = () => <nav></nav>;

describe("NavBar", () => {
    it("renders correctly", () => {
        const { container} = render(<NavBar />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})