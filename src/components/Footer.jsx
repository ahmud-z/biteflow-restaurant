import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#241814] text-orange-50 pt-6">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {/* Brand */}
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-xl bg-[#f4511e] font-black text-white">
                            B
                        </span>

                        <span className="text-xl font-black">
                            Bite<span className="text-[#ff8a5c]">Flow</span>
                        </span>
                    </div>

                    <p className="max-w-xs text-sm leading-6 text-orange-100/60">
                        Honest Bangladeshi comfort food, cooked with patience and
                        delivered with care.
                    </p>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="mb-4 font-bold">
                        Explore
                    </h3>

                    <div className="flex flex-col gap-3 text-sm text-orange-100/60">
                        <button
                            onClick={() => go("menu")}
                            className="text-left hover:text-white"
                        >
                            Our menu
                        </button>

                        <button
                            onClick={() => go("profile")}
                            className="text-left hover:text-white"
                        >
                            Order history
                        </button>

                        <button
                            onClick={() => go("tracking")}
                            className="text-left hover:text-white"
                        >
                            Track order
                        </button>
                    </div>
                </div>

                {/* Visit Us */}
                <div>
                    <h3 className="mb-4 font-bold">
                        Visit us
                    </h3>

                    <p className="text-sm leading-6 text-orange-100/60">
                        12 Nazira Bazar Lane
                        <br />
                        Old Dhaka, Bangladesh
                        <br />
                        Open daily 8 AM – 11 PM
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="mb-4 font-bold">
                        Get in touch
                    </h3>

                    <div className="flex gap-3">
                        <span className="grid size-9 place-items-center rounded-full bg-white/10">
                            <Heart size={17} />
                        </span>

                        <span className="grid size-9 place-items-center rounded-full bg-white/10">
                            <Mail size={17} />
                        </span>

                        <span className="grid size-9 place-items-center rounded-full bg-white/10">
                            <Phone size={17} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-orange-100/40">
                © {new Date().getFullYear()} BiteFlow Hotel & Restaurant.
            </div>
        </footer>
    );
};

export default Footer;