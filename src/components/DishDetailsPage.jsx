import { useEffect, useState } from "react";
import { dishes } from "../data/dishes";
import { Link, useNavigate, useParams } from "react-router";
import { useCart } from "../context/CartContext";
import DishCard from "./DishCard.jsx";

import {
    ArrowRight,
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Star,
} from "lucide-react";

const DishDetailsPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);

    const navigate = useNavigate();
    const { slug } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth",
        });
    }, [slug]);

    const dish = dishes.find((item) => item.slug === slug);

    // Handle invalid dish URLs
    if (!dish) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-[#fffaf5] px-5 text-center">
                <span className="text-6xl">🍽️</span>

                <h1 className="mt-5 text-3xl font-black text-stone-900">
                    Dish not found
                </h1>

                <p className="mt-3 text-stone-500">
                    This dish may have been removed from our menu.
                </p>

                <Link
                    to="/dishes"
                    className="mt-6 rounded-xl bg-[#f4511e] px-6 py-3 font-bold text-white transition hover:bg-[#d94113]"
                >
                    Explore our menu
                </Link>
            </main>
        );
    }

    const totalPrice = dish.price * quantity;

    // Find other dishes in the same category
    const relatedDishes = dishes
        .filter(
            (item) =>
                item.id !== dish.id &&
                item.category === dish.category
        )
        .slice(0, 4);

    // Fill the recommendation row if the category has few dishes
    const recommendations =
        relatedDishes.length >= 4
            ? relatedDishes
            : [
                ...relatedDishes,
                ...dishes.filter(
                    (item) =>
                        item.id !== dish.id &&
                        !relatedDishes.some(
                            (related) => related.id === item.id
                        )
                ),
            ].slice(0, 4);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-stone-900">
            {/* Breadcrumb / Back */}
            <div className="mx-auto max-w-7xl px-5 pt-7 lg:px-8">
                <div className="flex flex-wrap items-center gap-2 text-sm text-stone-400">
                    <Link
                        to="/"
                        className="transition hover:text-[#f4511e]"
                    >
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        to="/dishes"
                        className="transition hover:text-[#f4511e]"
                    >
                        Menu
                    </Link>

                    <span>/</span>

                    <span className="font-semibold text-stone-700">
                        {dish.name}
                    </span>
                </div>

                {/* <button
                    onClick={() => navigate(-1)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-stone-500 transition hover:text-[#f4511e]"
                >
                    <ArrowLeft size={18} />
                    Go back
                </button> */}
            </div>

            {/* Main Product Section */}
            <section className="mx-auto max-w-7xl px-5 pb-14 pt-7 lg:px-8 lg:pb-20 lg:pt-10">
                <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                    {/* Image */}
                    <div className="relative">
                        <div className="group relative aspect-square w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-orange-100 bg-[#f4511e] p-1 shadow-sm">
                            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#fff0e8]">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                {/* Category */}
                                <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/95 px-4 py-2 text-xs font-bold text-stone-700 shadow-sm backdrop-blur">
                                    {dish.category}
                                </span>

                                {/* Wishlist */}
                                <button
                                    onClick={() => setLiked((prev) => !prev)}
                                    aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
                                    aria-pressed={liked}
                                    className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/95 text-stone-600 shadow-md transition hover:scale-105 hover:text-[#f4511e]"
                                >
                                    <Heart
                                        size={20}
                                        className={
                                            liked ? "fill-[#f4511e] text-[#f4511e]" : ""
                                        }
                                    />
                                </button>

                                {/* Rating */}
                                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                                    <Star size={19} className="fill-amber-400 text-amber-400" />

                                    <div>
                                        <p className="text-sm font-black text-stone-900">
                                            {dish.rating} / 5
                                        </p>
                                        <p className="text-xs text-stone-400">
                                            {dish.reviews ?? 0} reviews
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dish Information */}
                    <div className="lg:pt-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#f4511e]">
                            <span className="size-2 rounded-full bg-[#f4511e]" />
                            From our kitchen
                        </div>

                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-4xl">
                            {dish.name}
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-8 text-stone-500">
                            {dish.desc}
                        </p>

                        {/* Price */}
                        <div className="mt-7 flex flex-wrap items-end gap-3">
                            <span className="text-3xl font-bold tracking-tight text-[#f4511e]">
                                ৳{dish.price}
                            </span>

                            <span className="pb-1.5 text-sm text-stone-400">
                                / serving
                            </span>
                        </div>

                        {/* Order Panel */}
                        <div className="mt-5 max-w-lg rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-bold text-stone-800">
                                        Quantity
                                    </p>
                                    <p className="mt-1 text-xs text-stone-400">
                                        ৳{dish.price} per serving
                                    </p>
                                </div>

                                <div className="flex h-10 items-center gap-2 rounded-xl border border-orange-100 bg-[#fffaf5] px-1.5">
                                    <button
                                        onClick={decreaseQuantity}
                                        disabled={quantity === 1}
                                        aria-label="Decrease quantity"
                                        className="grid size-8 place-items-center rounded-lg text-stone-500 transition hover:bg-orange-100 hover:text-[#f4511e] disabled:opacity-40"
                                    >
                                        <Minus size={15} />
                                    </button>

                                    <span className="min-w-5 text-center text-sm font-bold">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={increaseQuantity}
                                        aria-label="Increase quantity"
                                        className="grid size-8 place-items-center rounded-lg text-stone-500 transition hover:bg-orange-100 hover:text-[#f4511e]"
                                    >
                                        <Plus size={15} />
                                    </button>
                                </div>
                            </div>

                            <div className="my-4 border-t border-dashed border-orange-100" />

                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-sm text-stone-500">
                                    Total
                                </span>
                                <span className="text-xl font-black text-stone-900">
                                    ৳{totalPrice}
                                </span>
                            </div>

                            <button
                                onClick={() => addToCart(dish, quantity)}
                                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#f4511e] px-4 text-sm font-bold text-white shadow-md shadow-orange-100 transition hover:bg-[#df4317] active:scale-[0.99]"
                            >
                                <ShoppingBag size={18} />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Dishes */}
            {recommendations.length > 0 && (
                <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-12">
                    <div className="mb-8 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4511e]">
                                You might also like
                            </p>

                            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                                More delicious choices
                            </h2>

                            <p className="mt-2 text-sm text-stone-500">
                                Find your next BiteFlow favorite.
                            </p>
                        </div>

                        <Link
                            to="/dishes"
                            className="hidden items-center gap-1 text-sm font-bold text-[#f4511e] transition hover:gap-2 sm:flex"
                        >
                            View menu
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
                        {recommendations.map((item) => (
                            <Link
                                key={item.id}
                                to={`/dish/${item.slug}`}
                                className="group overflow-hidden rounded-3xl border border-orange-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100/60"
                            >
                                <DishCard dish={item} />
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/dishes"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f4511e] sm:hidden"
                    >
                        View full menu
                        <ArrowRight size={17} />
                    </Link>
                </section>
            )}
        </main>
    );
};

export default DishDetailsPage;