import { CheckCircle2, Clock3 } from "lucide-react";

const CTASection = () => {
    return (
        <main>
            <section className="section-container py-14">
                <div className="grid overflow-hidden rounded-[2rem] bg-[#f4511e] lg:grid-cols-2">
                    <div className="p-8 text-white sm:p-12">

                        <span className="bg-white/15 text-white hover:bg-white/15 py-1 px-6 rounded-full text-xs sm:text-sm">
                            BiteFlow promise
                        </span>
                        <h2 className="mt-5 text-2xl font-black leading-tight sm:text-4xl">
                            The comfort of home,
                            <br />without the cooking.
                        </h2>
                        <p className="mt-4 max-w-md leading-7 text-orange-50/80">Carefully sourced ingredients, traditional techniques, and a little extra love in every order.</p>
                        <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
                            <span className="flex items-center gap-2"><CheckCircle2 />
                                Fresh every meal
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock3 /> On-time delivery
                            </span>
                        </div>
                    </div><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85" alt="Fresh food prepared in the BiteFlow kitchen" className="min-h-64 w-full object-cover lg:min-h-full" />
                </div>
            </section>
        </main>
    );
};

export default CTASection;