import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router";
import { dishes } from "../data/dishes";
import DishCard from "./DishCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { categoryList } from "../data/categoryList";

const AllDishesPage = () => {
    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");


    const filteredDishes = dishes.filter((dish) => {
        const matchesSearch = dish.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            dish.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="bg-[#fffaf5]">
            <Navbar />
            <section className="section-container px-5 pb-20 pt-12 lg:px-8">
                {/* Header */}
                <div className="mb-10 max-w-xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                        From our kitchen
                    </p>

                    <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                        The full menu
                    </h1>

                    <p className="mt-3 text-stone-500">
                        A little bit of everything, made the BiteFlow way.
                    </p>
                </div>

                {/* Search & Category Filter */}
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Search */}
                    <div className="relative w-full max-w-md">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search biryani, snacks, desserts..."
                            className="h-12 w-full rounded-2xl border border-orange-100 bg-white pl-11 pr-4 text-sm outline-none shadow-sm transition focus:border-[#f4511e] focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {/* All Button */}
                        <button
                            onClick={() => setSelectedCategory("All")}
                            className={`rounded-full cursor-pointer px-3 py-2 text-sm font-semibold transition ${selectedCategory === "All"
                                ? "bg-[#f4511e] text-white shadow-sm"
                                : "bg-orange-100/80 text-stone-600 hover:bg-orange-200/80"
                                }`}
                        >
                            All
                        </button>

                        {/* Category Buttons */}
                        {categoryList.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`rounded-full cursor-pointer px-3 py-2 text-sm font-semibold transition ${selectedCategory === category.name
                                    ? "bg-[#f4511e] text-white shadow-sm"
                                    : "bg-orange-100/80 text-stone-600 hover:bg-orange-200/80"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result count */}
                <div className="mb-5 flex items-center justify-between text-sm text-stone-500">
                    <span>
                        {filteredDishes.length}{" "}
                        {filteredDishes.length === 1 ? "dish" : "dishes"} found
                    </span>

                    {/* <button className="font-semibold text-stone-700">
                        Sort:{" "}
                        <span className="text-[#f4511e]">
                            Popular
                        </span>{" "}
                        ↓
                    </button> */}
                </div>

                {/* Dishes */}
                {filteredDishes.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredDishes.map((dish) => (
                            <Link
                                to={`/dish/${dish.slug}`}
                                key={dish.id}
                            >
                                <DishCard dish={dish} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-orange-200 bg-white py-20 text-center text-stone-500">
                        No dishes match that search.
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
};

export default AllDishesPage;