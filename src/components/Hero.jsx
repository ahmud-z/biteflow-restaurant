import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    return (
        <main>
            <section className="section-container grid items-center gap-10 pb-12 pt-10 lg:grid-cols-[1.04fr_.96fr] lg:pb-20 lg:pt-16">
                <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-[#e84c23]">
                        <span className="size-2 rounded-full bg-[#ff5b2e]">
                        </span>
                        Authentic taste & Healthy meals
                    </div>
                    <h1 className="max-w-xl text-5xl font-bold leading-[.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                        Good food.
                        <br />

                        <span className="text-[#ff5b2e]">
                            <TypeAnimation
                                sequence={[
                                    "Better mood.",
                                    2000,
                                    "",
                                    500,
                                    "Best moments.",
                                    2000,
                                    "",
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </span>
                    </h1>
                    <p className="mt-6 max-w-md text-lg leading-7 text-stone-500">
                        From our Kitchen in Old Dhaka to your table. Warm spices, generous portions, and recipes worth coming back for.
                    </p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=90" alt="" className="w-full rounded-4xl" />
                </div>
            </section>
        </main>
    );
};

export default Hero;