import { render } from "@testing-library/react";
import {expect} from "vitest";

const NavBar = () => null;

describe("NavBar", () => {
    it("renders correctly", () => {
        const { container} = render(<NavBar />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})