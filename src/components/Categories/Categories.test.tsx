import {render, screen} from "@testing-library/react";
import {Categories} from "@components/Categories/Categories";
import {Tab} from '@headlessui/react'
import {Category} from "@domain/category/category.model";

describe("Categories", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Tab.Group>
                <Categories categories={{}} classNames={() => ""}/>
            </Tab.Group>
        )

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("contains any category", () => {
        const testingCategory: Category = {id: "1", name: "testing"}
        render(
            <Tab.Group>
                <Categories categories={[testingCategory]} classNames={() => ""}/>
            </Tab.Group>
        )

        const categoryInTab = screen.getByText(testingCategory.name)

        expect(categoryInTab).toBeInTheDocument()
    })
})