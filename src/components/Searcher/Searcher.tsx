import { BsSearch } from "react-icons/bs";

export const Searcher = () => (
    <div className="bg-white flex items-center p-1.5 mt-4 rounded-2xl lg:w-[30%] lg:mx-auto">
        <input type="text" placeholder="Search"
               className="w-[90%] focus:outline-none placeholder: px-3"/>
        <BsSearch role="graphics-document"/>
    </div>
);