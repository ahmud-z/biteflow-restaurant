import {
    ArrowRight,
    Clock3,
    Heart,
    MapPin,
    Phone,
    ShieldCheck,
    Utensils,
} from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <main className="bg-[#fffaf5] text-stone-900">
            <Navbar />

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-8 lg:pt-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                            About BiteFlow
                        </p>

                        <h1 className="mt-3 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                            Good food,
                            <br />
                            <span className="text-[#f4511e]">
                                made with heart.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-500">
                            BiteFlow is a neighborhood kitchen built around
                            something simple — serving delicious food, honest
                            portions, and the kind of flavors that make you
                            want to come back.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/dishes"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#f4511e] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#d94113]"
                            >
                                Explore our menu
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-orange-100 bg-white px-5 py-3 text-sm font-bold text-stone-700 transition hover:border-orange-200 hover:text-[#f4511e]"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem]">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                                alt="BiteFlow restaurant"
                                className="h-[460px] w-full object-cover sm:h-[520px]"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-xl shadow-orange-100/50 sm:left-6">
                            <div className="flex items-center gap-3">
                                <span className="grid size-11 place-items-center rounded-xl bg-[#fff0e9] text-[#f4511e]">
                                    <Heart size={21} fill="currentColor" />
                                </span>

                                <div>
                                    <p className="text-lg font-black">
                                        Made with love
                                    </p>
                                    <p className="text-xs text-stone-400">
                                        Served with care
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="border-y border-orange-100 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                                Our story
                            </p>

                            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                                From our kitchen to your table.
                            </h2>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-stone-500">
                            <p>
                                BiteFlow was created with a love for the food
                                we grew up eating. From comforting biryani and
                                hearty meals to quick snacks and sweet treats,
                                our menu is inspired by familiar flavors and
                                everyday cravings.
                            </p>

                            <p>
                                We believe great food doesn't need to be
                                complicated. It needs fresh ingredients,
                                thoughtful preparation, and a kitchen that
                                genuinely cares about what goes on your plate.
                            </p>

                            <p>
                                Whether you're grabbing a quick lunch, ordering
                                dinner for the family, or simply treating
                                yourself, BiteFlow is here to make every meal
                                feel a little better.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                        What matters to us
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                        Simple values. Better food.
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card */}
                    <div className="rounded-3xl border border-orange-100 bg-white px-6 py-3 shadow-sm">
                        <h3 className="mt-5 text-lg font-black">
                            Quality first
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-stone-500">
                            We focus on fresh ingredients and careful
                            preparation in every dish.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-orange-100 bg-white px-6 py-3 shadow-sm">
                        <h3 className="mt-5 text-lg font-black">
                            Made with care
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-stone-500">
                            Every order matters to us, from the kitchen to
                            the moment it reaches you.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-orange-100 bg-white px-6 py-3 shadow-sm">
                        <h3 className="mt-5 text-lg font-black">
                            Honest food
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-stone-500">
                            No unnecessary complications. Just food that is
                            satisfying, familiar, and worth ordering again.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-orange-100 bg-white px-6 py-3 shadow-sm">
                        <h3 className="mt-5 text-lg font-black">
                            Always improving
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-stone-500">
                            We listen, learn, and keep working to make your
                            BiteFlow experience better.
                        </p>
                    </div>
                </div>
            </section>

            {/* Local Food Section */}
            <section className="bg-[#241814] text-orange-50">
                <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8a5c]">
                                Inspired by home
                            </p>

                            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                                The flavors we know and love.
                            </h2>

                            <p className="mt-5 max-w-xl leading-8 text-orange-100/70">
                                Our food takes inspiration from Bangladesh's
                                rich food culture — comforting rice dishesmenu
                                flavorful curries, crispy snacks, refreshing
                                drinks, and desserts that bring people
                                together.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="flex items-start gap-3">
                                    <MapPin
                                        size={20}
                                        className="mt-1 shrink-0 text-[#ff8a5c]"
                                    />

                                    <div>
                                        <p className="font-bold">
                                            Come visit us
                                        </p>
                                        <p className="mt-1 text-sm text-orange-100/60">
                                            Your neighborhood kitchen
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone
                                        size={20}
                                        className="mt-1 shrink-0 text-[#ff8a5c]"
                                    />

                                    <div>
                                        <p className="font-bold">
                                            Talk to us
                                        </p>
                                        <p className="mt-1 text-sm text-orange-100/60">
                                            We'd love to hear from you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
                                alt="Indian food"
                                className="h-64 w-full rounded-3xl object-cover"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
                                alt="Food served on a table"
                                className="mt-10 h-64 w-full rounded-3xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <div className="rounded-[2rem] bg-[#fff0e9] px-6 py-14 text-center sm:px-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                        Hungry yet?
                    </p>

                    <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                        Your next favorite meal is waiting.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-stone-500">
                        Explore our menu and find something delicious for
                        today.
                    </p>

                    <Link
                        to="/dishes"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#f4511e] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#d94113]"
                    >
                        Browse the menu
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;