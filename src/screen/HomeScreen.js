import { CartSection } from "../component/CartSection";
import { Footer } from "../component/Footer";
import { HeroSection } from "../component/HeroSection";
import Navbar from "../component/Navbar";
import "./HomeScreen.css"



const HomeScreen = () => {
    return(
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <CartSection></CartSection>
            <Footer></Footer>
        </div>
        
    );
}

export default HomeScreen;