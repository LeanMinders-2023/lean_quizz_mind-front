import {Header} from "@components/Header/Header.tsx";
import {CategoriesTabs} from "@components/CategoriesTabs/CategoriesTabs";
import {useState} from "react";
import {Category} from "@domain/category/category.model";

export const Home = () => {
    const [categories] = useState<Category[]>([
        {id: "1", name: "Frontend", quizzes: [{
            id: "1",
            name: "irrelevant",
            description: "irrelevant",
            image: "https://www.servnet.mx/hubfs/Backend-y-Frontend-¿Qué-es-cómo-funcionan-en-la-programación.jpg",
            difficulty: "irrelevant",
            questions: []
        }]},
        {id: "2", name: "Backend", quizzes: [{
            id: "1",
            name: "irrelevant",
            description: "irrelevant",
            image: "https://www.servnet.mx/hubfs/Backend-y-Frontend-¿Qué-es-cómo-funcionan-en-la-programación.jpg",
            difficulty: "irrelevant",
            questions: []
        }]},
        {id: "3", name: "Fullstack"}
    ])

    return (
        <>
        <Header>
            <h1 className="mt-2 text-white text-center text-xl">Let's test your knowledge</h1>
        </Header>
        <CategoriesTabs categories={categories}/>
        </>
    )
};
