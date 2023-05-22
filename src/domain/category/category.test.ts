describe("Category Service", () => {
    it("should get all categories", () => {
        const categoriesRepository = new CategoriesRepository();
        const categoriesService = new CategoriesService(categoriesRepository);

        const response = categoriesService.getAllCategories();

        expect(response.isRight()).toBeTruthy();
    })
});