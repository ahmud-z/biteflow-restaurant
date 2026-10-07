import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BrowseByCategorySection from "../components/BrowseByCategorySection"
import PopularDishesSection from "../components/PopularDishesSection"
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <BrowseByCategorySection />
            <PopularDishesSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default HomePage;