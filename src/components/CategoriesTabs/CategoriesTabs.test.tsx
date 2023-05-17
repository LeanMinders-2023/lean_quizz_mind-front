import {render, within} from "@testing-library/react";
import {CategoriesTabs} from "@components/CategoriesTabs/CategoriesTabs";
import {Category} from "@domain/category/category.model";

describe("CategoriesTabs", () => {
    it("renders correctly", () => {
        const {container} = render(<CategoriesTabs categories={[]}/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    })

    it("does not contains quizzes", () => {
        const categories: Category[] = [{id: "2", name: "Backend"}]
        const {container} = render(<CategoriesTabs categories={categories}/>)
        const quizzList = within(container).getByText("This category has not quizzes")

        expect(quizzList).toBeInTheDocument()
    })

    it("contains a quizz list", () => {
        const categories: Category[] = [
            {id: "1", name: "Frontend", quizzes: [{
                id: "1",
                name: "irrelevant",
                description: "irrelevant",
                image: "https://www.servnet.mx/hubfs/Backend-y-Frontend-¿Qué-es-cómo-funcionan-en-la-programación.jpg",
                difficulty: "irrelevant",
                questions: []
            }]}
        ]
        const {container} = render(<CategoriesTabs categories={categories}/>)
        const quizzList = within(container).getByRole("list")

        expect(quizzList).toBeInTheDocument()
    })
})