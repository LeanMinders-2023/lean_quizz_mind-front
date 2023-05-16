import {Tab} from "@headlessui/react";
import {Category} from "@domain/category/category.model";

interface CategoriesProps {
    categories: Category[];
    classNames(...classes: string[]): string;
}

export const Categories = ({categories, classNames}: CategoriesProps) => (
    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {categories.map((category) => (
            <Tab
                key={category.id}
                className={({selected}) =>
                    classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                            ? 'bg-white shadow'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                }
            >
                {category.name}
            </Tab>
        ))}
    </Tab.List>
);