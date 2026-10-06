import { Badge, CheckCircle2, ChevronRight, Clock3 } from "lucide-react";
import { categoryList } from "../data/categoryList";

const BrowseByCategorySection = () => {
    return (

        <main>
            <section className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="mb-7 flex items-end justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                            What are you craving?
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                            Browse by category
                        </h2>
                    </div>

                    <button
                        className="hidden items-center gap-1 text-sm font-bold text-[#f4511e] sm:flex"
                    >
                        View all categories <ChevronRight />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                    {categoryList.map((category) => (
                        <button
                            key={category.name}
                            // onClick={() => onCategory(category.name)}
                            className="group rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                        >
                            <span className="mx-auto mb-3 grid size-14 place-items-center rounded-2xl bg-[#fff4eb] text-3xl transition group-hover:scale-105">
                                {category.icon}
                            </span>

                            <span className="block text-sm font-bold">
                                {category.name}
                            </span>

                            <span className="mt-1 block text-xs text-stone-400">
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>
            </section>


        </main>
    );
};

export default BrowseByCategorySection;