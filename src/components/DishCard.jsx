import { Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const DishCard = ({ dish }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();
        addToCart(dish);
    };

    return (
        <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm transition-all duration-300 min-h-[400px] hover:-translate-y-1 hover:shadow-md hover:shadow-orange-100/60">

            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-52 w-full object-cover transition duration-300 ease-out group-hover:scale-102"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold text-stone-700 shadow-sm backdrop-blur-sm">
                    {dish.category}
                </span>

                {/* discount badge */}
                {/* <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 text-xs font-bold text-stone-700 shadow-md backdrop-blur-sm">
                    <Star className="size-3.5 fill-[#f6a623] text-[#f6a623]" />
                    50% off
                </div> */}
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Name + Price */}
                <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-lg font-bold leading-tight text-stone-800 transition-colors group-hover:text-[#f4511e]">
                            {dish.name}
                        </h3>
                    </div>

                    <span className="shrink-0 rounded-lg bg-orange-50 px-2.5 py-1 text-base font-bold text-[#f4511e]">
                        ৳{dish.price}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-sm">
                    <Star className="size-4 text-[#f6a623]" />

                    <span className="font-semibold text-stone-700">
                        {dish.rating}
                    </span>

                    <span className="text-stone-400">
                        ({dish.reviews} reviews)
                    </span>
                </div>
            </div>

            {/* Button */}
            <div className="px-5 pb-5">
                <button
                    onClick={handleAddToCart}
                    className="
                        flex h-11 w-full items-center justify-center gap-2
                        rounded-xl
                        bg-[#fff4ef]
                        font-semibold text-[#f4511e]
                        transition-all duration-200
                        hover:bg-[#f4511e]
                        hover:text-white
                        cursor-pointer
                        text-base
                        active:scale-[0.98]
                    "
                >
                    <span>Add to cart</span>
                    <Plus className="size-4 transition-transform duration-200 group-hover:rotate-90" />
                </button>
            </div>
        </div>
    );
};

export default DishCard;
