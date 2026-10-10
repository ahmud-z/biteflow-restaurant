import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <main className="bg-[#fffaf5] text-stone-900">
            <Navbar />
            <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-8 lg:pt-20">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                        Contact BiteFlow
                    </p>

                    <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                        We would love to
                        <br />
                        <span className="text-[#f4511e]">hear from you.</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-500">
                        Have a question about the menu, an order, or a special
                        request? Send us a message and our team will get back
                        to you as soon as possible.
                    </p>
                </div>

                <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-4">
                        <div className="rounded-3xl bg-[#241814] p-7 text-orange-50">
                            <h2 className="text-2xl font-black">
                                Come say hello
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-orange-100/60">
                                Our kitchen is open daily. Stop by for a meal,
                                pick up your order, or simply meet the people
                                behind your favorite dishes.
                            </p>

                            <div className="mt-8 space-y-5 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 shrink-0 text-[#ff8a5c]" size={19} />
                                    <span>
                                        12 Nazira Bazar Lane
                                        <br />
                                        Old Dhaka, Bangladesh
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="shrink-0 text-[#ff8a5c]" size={19} />
                                    <a className="hover:text-white" href="tel:+8801712345678">
                                        +880 1712-345678
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="shrink-0 text-[#ff8a5c]" size={19} />
                                    <a className="hover:text-white" href="mailto:hello@biteflow.com">
                                        hello@biteflow.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="grid size-11 place-items-center rounded-xl bg-[#fff0e9] text-[#f4511e]">
                                    <Clock3 size={21} />
                                </span>
                                <h2 className="text-xl font-black">Opening hours</h2>
                            </div>

                            <div className="mt-5 space-y-3 text-sm text-stone-500">
                                <div className="flex justify-between gap-4">
                                    <span>Monday – Sunday</span>
                                    <span className="font-semibold text-stone-900">10:00 AM – 11:00 PM</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span>Kitchen closes</span>
                                    <span className="font-semibold text-stone-900">10:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="text-2xl font-black">Send us a message</h2>
                        <p className="mt-2 text-sm leading-6 text-stone-500">
                            Fill out the form below and we will be in touch.
                        </p>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            <label className="text-sm font-semibold text-stone-700">
                                Your name
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="e.g. Rahim Ahmed"
                                    className="mt-2 w-full rounded-xl border border-orange-100 bg-[#fffaf7] px-4 py-3 font-normal outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:ring-2 focus:ring-orange-100"
                                />
                            </label>

                            <label className="text-sm font-semibold text-stone-700">
                                Email address
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="mt-2 w-full rounded-xl border border-orange-100 bg-[#fffaf7] px-4 py-3 font-normal outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:ring-2 focus:ring-orange-100"
                                />
                            </label>
                        </div>

                        <label className="mt-5 block text-sm font-semibold text-stone-700">
                            Subject
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="How can we help?"
                                className="mt-2 w-full rounded-xl border border-orange-100 bg-[#fffaf7] px-4 py-3 font-normal outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:ring-2 focus:ring-orange-100"
                            />
                        </label>

                        <label className="mt-5 block text-sm font-semibold text-stone-700">
                            Message
                            <textarea
                                name="message"
                                required
                                rows="5"
                                placeholder="Tell us a little more..."
                                className="mt-2 w-full resize-none rounded-xl border border-orange-100 bg-[#fffaf7] px-4 py-3 font-normal outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:ring-2 focus:ring-orange-100"
                            />
                        </label>

                        <button
                            type="submit"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f4511e] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#d94113]"
                        >
                            Send message
                            <Send size={17} />
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default ContactPage;