import { Galeria } from "../../components/Galeria";
import { HeroSection } from "../../components/HeroSection";
import { Menu } from "../../components/Menu";

import { } from "../../App.css"
import { Especification } from "../../components/Especification";
import { Services } from "../../components/Services";
import { Footer } from "../../components/Footer";
import { AboutUs } from "../../components/AboutUs";

export function Home() {
    return (
        <div>
            <Menu />
            <HeroSection />
            <AboutUs/>
            <Galeria />
            <Especification />
            <Services />
            <Footer />
        </div>
    )
}