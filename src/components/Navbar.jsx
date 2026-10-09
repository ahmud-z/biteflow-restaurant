import { useState } from "react";
import { ShoppingBag, Menu, X, UtensilsCrossed } from "lucide-react";
import { Link } from 'react-router';
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { itemCount } = useCart();

    return (
        <header className="sticky top-0 z-40  shadow-xs bg-white backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* Logo */}
                <Link to={"/"} className="flex items-center gap-3 text-left">
                    <span className="grid size-10 place-items-center rounded-full bg-[#f4511e] text-xl text-white shadow-sm">
                        <UtensilsCrossed />
                    </span>

                    <span>
                        <span className="block text-lg font-black tracking-tight">
                            Bite<span className="text-[#f4511e]">Flow</span>
                        </span>

                        <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 sm:block">
                            Old Dhaka Kitchen
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 lg:flex">
                    <Link to={"/"} className="cursor-pointer hover:text-[#f4511e]">Home</Link>
                    <Link to={"/dishes"} className="cursor-pointer hover:text-[#f4511e]">Menu</Link>
                    <Link to={"/about"} className="cursor-pointer hover:text-[#f4511e]">About Us</Link>
                    <Link to={"/contact"} className="cursor-pointer hover:text-[#f4511e]">Contact</Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Login */}
                    <Link to={"/login"} className="hidden rounded-full px-3 py-2 text-sm font-semibold text-stone-600 hover:bg-orange-50 sm:block">
                        Login
                    </Link>

                    {/* Register */}
                    <Link to={"/register"} className="hidden rounded-full bg-[#f4511e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 hover:bg-[#e94a1b] sm:block">
                        Register
                    </Link>

                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative grid size-10 place-items-center rounded-full bg-white text-stone-700 shadow-sm ring-1 ring-orange-100"
                        aria-label="Shopping cart"
                    >
                        <ShoppingBag size={20} />

                        {itemCount > 0 && (
                            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#e33c1b] text-[10px] font-semibold text-white">
                                {itemCount}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="grid size-10 place-items-center rounded-full border border-orange-100 text-stone-700 hover:bg-orange-50 lg:hidden"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="border-t border-orange-100 bg-white px-5 py-4 lg:hidden">
                    <nav className="flex flex-col gap-1 text-sm font-semibold text-stone-700">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-left hover:bg-orange-50 hover:text-[#f4511e]"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-left hover:bg-orange-50 hover:text-[#f4511e]"
                        >
                            Menu
                        </button>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-left hover:bg-orange-50 hover:text-[#f4511e]"
                        >
                            About Us
                        </button>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-left hover:bg-orange-50 hover:text-[#f4511e]"
                        >
                            Contact
                        </button>

                        <div className="my-2 border-t border-orange-100" />

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-left hover:bg-orange-50 hover:text-[#f4511e]"
                        >
                            Login / Register
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
