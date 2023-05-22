import type {Quizz} from "@domain/quizz/quizz.model.ts";
import {Either} from "@infrastructure/errorController/Either.ts";

interface Category {
    id: string;
    name: string;
    quizzes?: Quizz[];
}

interface CategoriesRepository {
    getAllCategories(): Promise<Either<Error, Category[]>>;
}

export type {Category, CategoriesRepository};