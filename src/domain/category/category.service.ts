import {CategoriesHttpRepository} from "@domain/category/category.repository.ts";

export class CategoriesService {
    constructor(private categoriesRepository: CategoriesHttpRepository) {}

    public async getAllCategories() {
        return await this.categoriesRepository.getAllCategories();
    }
}