import {CategoriesService} from "@domain/category/category.service";
import {CategoriesHttpRepository} from "@domain/category/category.repository";

describe("Category Service", () => {
    // TODO review this test
    it("should get all categories", async () => {
        const categoriesRepository = new CategoriesHttpRepository();
        const categoriesService = new CategoriesService(categoriesRepository);

        const response = await categoriesService.getAllCategories();

        expect(response.isRight()).toBeTruthy();
    })
});