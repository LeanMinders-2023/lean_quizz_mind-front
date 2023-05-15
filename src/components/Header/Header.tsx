import {NavBar} from "@components/NavBar/NavBar.tsx";
import {ReactNode} from "react";
import {Searcher} from "@components/Searcher/Searcher.tsx";

interface ChildrenProps {
    children?: ReactNode
}

export const Header = ({children} : ChildrenProps) => (
    <header className="bg-[#11111f] p-5">
        <NavBar />
        {children}
        <Searcher />
    </header>
);