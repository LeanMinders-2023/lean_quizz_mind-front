import {CategoriesRepository, Category} from "@domain/category/category.model";
import {Either} from "@infrastructure/errorController/Either.ts";
import {Http} from "@infrastructure/http/Http.ts";

export class CategoriesHttpRepository implements CategoriesRepository {
    private http: Http;
    public constructor() {
        this.http = Http.createInstance("https://jsonplaceholder.typicode.com/todos");
    }

    public async getAllCategories(): Promise<Either<Error, Category[]>> {
        try {
            const categories = await this.http.get<Category[]>();
            return Either.right(categories);
        } catch (e) {
            return Either.left(e as Error);
        }
    }
}