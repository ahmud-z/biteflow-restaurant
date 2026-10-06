import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BrowseByCategorySection from "../components/BrowseByCategorySection"
import PopularDishesSection from "../components/PopularDishesSection"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <BrowseByCategorySection />
            <PopularDishesSection />

        </div>
    );
};

export default HomePage;