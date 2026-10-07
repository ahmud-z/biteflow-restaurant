import { useState } from "react";
import { dishes } from "../data/dishes";

import {
    ArrowLeft,
    Clock3,
    Minus,
    Plus,
    ShoppingBag,
    Star,
    Flame,
    Heart,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";

const DishDetailsPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const { slug } = useParams();
    const dish = dishes.find((dish) => dish.slug === slug);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };


    const totalPrice = dish.price * quantity;

    return (
        <main className="min-h-screen bg-[#fffaf5]">

            {/* Back Navigation */}
            <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-stone-500 transition hover:text-[#f4511e]"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>
            </div>

            {/* Main Content */}
            <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                    {/* Image Section */}
                    <div className="relative">

                        {/* Main Image */}
                        <div className="group relative overflow-hidden rounded-[2rem] bg-orange-100">
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                            {/* Category */}
                            <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs font-bold text-stone-700 shadow-sm backdrop-blur-md">
                                {dish.category}
                            </span>

                            {/* Wishlist */}
                            <button
                                onClick={() => setLiked(!liked)}
                                className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/90 text-stone-600 shadow-md backdrop-blur-md transition hover:scale-105 hover:text-[#f4511e]"
                                aria-label="Add to wishlist"
                            >
                                <Heart
                                    size={20}
                                    className={
                                        liked
                                            ? "fill-[#f4511e] text-[#f4511e]"
                                            : ""
                                    }
                                />
                            </button>

                            {/* Rating */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">
                                <Star
                                    size={17}
                                    className="fill-[#f6a623] text-[#f6a623]"
                                />

                                <span className="text-sm font-black text-stone-800">
                                    {dish.rating}
                                </span>

                                <span className="text-xs text-stone-400">
                                    ({dish.reviews} reviews)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="lg:pl-6">

                        {/* Small Label */}
                        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#f4511e]">
                            <span className="h-px w-6 bg-[#f4511e]" />
                            BiteFlow Special
                        </div>

                        {/* Title */}
                        <h1 className="max-w-xl text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
                            {dish.name}
                        </h1>

                        {/* Price */}
                        <div className="mt-5 flex items-center gap-4">
                            <span className="text-3xl font-black text-[#f4511e]">
                                ৳{dish.price}
                            </span>

                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-stone-500">
                                Per serving
                            </span>
                        </div>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-stone-500">
                            {dish.desc}
                        </p>

                        {/* Info */}
                        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

                            <div className="rounded-2xl border border-orange-100 bg-white p-4">
                                <Clock3 className="mb-2 size-5 text-[#f4511e]" />

                                <p className="text-xs font-semibold text-stone-400">
                                    Preparation
                                </p>

                                <p className="mt-1 text-sm font-black text-stone-700">
                                    {dish.prepTime}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-orange-100 bg-white p-4">
                                <Flame className="mb-2 size-5 text-[#f4511e]" />

                                <p className="text-xs font-semibold text-stone-400">
                                    Calories
                                </p>

                                <p className="mt-1 text-sm font-black text-stone-700">
                                    {dish.calories}
                                </p>
                            </div>

                            <div className="col-span-2 rounded-2xl border border-orange-100 bg-white p-4 sm:col-span-1">
                                <Star className="mb-2 size-5 fill-[#f6a623] text-[#f6a623]" />

                                <p className="text-xs font-semibold text-stone-400">
                                    Rating
                                </p>

                                <p className="mt-1 text-sm font-black text-stone-700">
                                    {dish.rating} / 5
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-8 border-t border-orange-100" />

                        {/* Quantity + Cart */}
                        <div className="flex flex-col gap-4 sm:flex-row">

                            {/* Quantity */}
                            <div className="flex h-12 items-center justify-between rounded-xl border border-orange-100 bg-white px-2 sm:w-36">
                                <button
                                    onClick={decreaseQuantity}
                                    className="grid size-9 place-items-center rounded-lg text-stone-500 transition hover:bg-orange-50 hover:text-[#f4511e]"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus size={17} />
                                </button>

                                <span className="font-black text-stone-800">
                                    {quantity}
                                </span>

                                <button
                                    onClick={increaseQuantity}
                                    className="grid size-9 place-items-center rounded-lg text-stone-500 transition hover:bg-orange-50 hover:text-[#f4511e]"
                                    aria-label="Increase quantity"
                                >
                                    <Plus size={17} />
                                </button>
                            </div>

                            {/* Add To Cart */}
                            <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#f4511e] px-6 font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#e94a1b] active:translate-y-0">
                                <ShoppingBag size={19} />
                                Add to cart
                                <span className="ml-1 opacity-80">
                                    · ৳{totalPrice}
                                </span>
                            </button>
                        </div>

                        {/* Delivery Note */}
                        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#fff1e9] px-4 py-3 text-sm text-stone-600">
                            <div className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#f4511e]">
                                <Clock3 size={17} />
                            </div>

                            <p>
                                <span className="font-bold text-stone-800">
                                    Freshly prepared
                                </span>{" "}
                                and delivered hot from our Old Dhaka kitchen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default DishDetailsPage;