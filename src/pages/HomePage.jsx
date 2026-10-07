import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BrowseByCategorySection from "../components/BrowseByCategorySection"
import PopularDishesSection from "../components/PopularDishesSection"
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <BrowseByCategorySection />
            <PopularDishesSection />
            <Footer />
        </div>
    );
};

export default HomePage;