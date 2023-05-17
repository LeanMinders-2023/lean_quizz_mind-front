import {Tab} from '@headlessui/react'
import {Categories} from "@components/Categories/Categories";
import type {Category} from "@domain/category/category.model.ts";
import {QuizzList} from "@components/QuizzList/QuizzList";

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface CategoriesTabsProps {
    categories: Category[]
}

export const CategoriesTabs = ({categories}: CategoriesTabsProps) => (
    <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] px-2 py-16 sm:px-0 flex flex-col items-center">
        <Tab.Group>
            <Categories categories={categories} classNames={classNames}/>
            <Tab.Panels className="mt-2">
                {Object.values(categories).map((category, idx) => (
                    <Tab.Panel
                        key={idx}
                        className={classNames(
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}
                    >
                        {category.quizzes ? (
                            <>
                                <QuizzList quizzes={category.quizzes}/>
                            </>
                        ) : (
                            <p>This category has not quizzes</p>
                        )}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    </div>
);
