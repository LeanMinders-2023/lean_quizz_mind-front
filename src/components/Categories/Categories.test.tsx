import {render} from "@testing-library/react";
import {Categories} from "@components/Categories/Categories";
import {Tab} from '@headlessui/react'

describe("Categories", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Tab.Group>
                <Categories categories={{}}/>
            </Tab.Group>
        )

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })
})