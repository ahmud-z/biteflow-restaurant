import { ChevronRight } from 'lucide-react';
import DishCard from '../components/DishCard'
import { dishes } from '../data/dishes';
import { Link } from 'react-router';
const PopularDishesSection = () => {
    return (
        <section className="section-container py-20">
            {/* Section Header */}
            <div className="mb-7 flex items-end justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                        Most loved
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                        Popular on BiteFlow
                    </h2>
                </div>

                <button
                    className="hidden items-center gap-1 text-sm font-bold text-[#f4511e] sm:flex"
                >
                    View full menu <ChevronRight />
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {dishes.slice(0, 4).map((dish,) => (
                    <Link to={`/dish/${dish.slug}`} key={dish.id}>
                        <DishCard dish={dish} />
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default PopularDishesSection;
