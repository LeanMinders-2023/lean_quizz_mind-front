import {Header} from "@components/Header/Header.tsx";
import CategoriesTabs from "@components/CategoriesTabs/CategoriesTabs";

export const Home = () => (
    <>
    <Header>
        <h1 className="mt-2 text-white text-center text-xl">Let's test your knowledge</h1>
    </Header>
    <CategoriesTabs/>
    </>
);