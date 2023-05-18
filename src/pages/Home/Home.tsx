import {Header} from "@components/Header/Header.tsx";
import {CategoriesTabs} from "@components/CategoriesTabs/CategoriesTabs";
import {useState} from "react";
import {Category} from "@domain/category/category.model";
import {QuizzItem} from "@components/QuizzItem/QuizzItem";

export const Home = () => {
    const [categories] = useState<Category[]>([
        {id: "1", name: "Frontend", quizzes: [{
            id: "1",
            name: "Frontend quizzes",
            description: "irrelevant",
            image: "https://www.servnet.mx/hubfs/Backend-y-Frontend-¿Qué-es-cómo-funcionan-en-la-programación.jpg",
            difficulty: "Easy",
            questions: []
        }]},
        {id: "2", name: "Backend", quizzes: [{
            id: "1",
            name: "Backend quizzes",
            description: "irrelevant",
            image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg",
            difficulty: "Hard",
            questions: []
        }]},
        {id: "3", name: "Fullstack"}
    ])

    return (
        <>
        <Header>
            <h1 className="mt-2 text-white text-center text-xl">Let's test your knowledge</h1>
        </Header>
        <main className="w-full flex justify-center">
            <CategoriesTabs categories={categories}/>
            <section aria-label="random">
                <QuizzItem quizzDTO={{
                    id: "1",
                    name: "irrelevant",
                    image: "irrelevantImg",
                    difficulty: "irrelevant",
                    questions: []
                }} />
            </section>
        </main>
        </>
    )
};
