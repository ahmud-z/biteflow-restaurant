import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { items, subtotal, updateQuantity, removeFromCart } = useCart();

    return (
        <div className="min-h-screen bg-[#fffaf5]">
            <Navbar />
            <main className="section-container px-5 py-12 lg:px-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                    Your order
                </p>
                <h1 className="mt-2 text-4xl font-black tracking-tight">Shopping cart</h1>

                {items.length === 0 ? (
                    <div className="mt-10 rounded-3xl border border-dashed border-orange-200 bg-white px-6 py-16 text-center">
                        <ShoppingBag className="mx-auto size-12 text-[#f4511e]" />
                        <h2 className="mt-4 text-xl font-bold text-stone-800">Your cart is empty</h2>
                        <p className="mt-2 text-stone-500">Add something delicious from our menu.</p>
                        <Link
                            to="/dishes"
                            className="mt-6 inline-flex rounded-xl bg-[#f4511e] px-5 py-3 font-bold text-white hover:bg-[#e94a1b]"
                        >
                            Browse menu
                        </Link>
                    </div>
                ) : (
                    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
                        <div className="space-y-4">
                            {items.map((item) => (
                                <article
                                    key={item.id}
                                    className="flex gap-4 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="size-24 rounded-xl object-cover sm:size-32"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h2 className="font-bold text-stone-800">{item.name}</h2>
                                                <p className="mt-1 text-sm text-stone-500">৳{item.price} each</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-stone-400 hover:text-red-500"
                                                aria-label={`Remove ${item.name} from cart`}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                        <div className="mt-5 flex items-center justify-between">
                                            <div className="flex h-9 items-center rounded-lg border border-orange-100">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="grid size-8 place-items-center text-stone-500 hover:text-[#f4511e]"
                                                    aria-label={`Decrease ${item.name} quantity`}
                                                >
                                                    <Minus size={15} />
                                                </button>
                                                <span className="w-7 text-center text-sm font-bold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="grid size-8 place-items-center text-stone-500 hover:text-[#f4511e]"
                                                    aria-label={`Increase ${item.name} quantity`}
                                                >
                                                    <Plus size={15} />
                                                </button>
                                            </div>
                                            <strong className="text-lg text-[#f4511e]">
                                                ৳{item.price * item.quantity}
                                            </strong>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <aside className="h-fit rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-black text-stone-800">Order summary</h2>
                            <div className="mt-5 flex justify-between border-b border-orange-100 pb-4 text-stone-500">
                                <span>Subtotal</span>
                                <span className="font-bold text-stone-800">৳{subtotal}</span>
                            </div>
                            <div className="mt-4 flex justify-between text-lg font-black text-stone-800">
                                <span>Total</span>
                                <span className="text-[#f4511e]">৳{subtotal}</span>
                            </div>
                            <button className="mt-6 w-full rounded-xl bg-[#f4511e] py-3 font-bold text-white hover:bg-[#e94a1b]">
                                Proceed to checkout
                            </button>
                        </aside>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;
