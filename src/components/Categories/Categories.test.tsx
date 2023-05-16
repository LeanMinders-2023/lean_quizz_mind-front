import {render, screen} from "@testing-library/react";
import {Categories} from "@components/Categories/Categories";
import {Tab} from '@headlessui/react'
import {Category} from "@domain/category/category.model";
import userEvent from "@testing-library/user-event"
import {classNames} from "@components/CategoriesTabs/CategoriesTabs";

describe("Categories", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Tab.Group>
                <Categories categories={[]} classNames={() => ""}/>
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

    it("focus when clicked", async () => {
        const frontCategory: Category = {id: "1", name: "front"}
        const backCategory: Category = {id: "2", name: "back"}
        render(
            <Tab.Group>
                <Categories categories={[frontCategory, backCategory]} classNames={classNames}/>
            </Tab.Group>
        )

        const backCategoryInTab = screen.getByText(backCategory.name)
        await userEvent.click(backCategoryInTab)

        expect(backCategoryInTab).toHaveClass("bg-white shadow")
    })
})