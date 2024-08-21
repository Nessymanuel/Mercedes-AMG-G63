import { Galeria } from "../../components/Galeria";
import { HeroSection } from "../../components/HeroSection";
import { Menu } from "../../components/Menu";

import { } from "../../App.css"
import { Performance } from "../../components/Performance";
import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import { Characteristics } from "../../components/Characteristics";

export function Home() {
    return (
        <div>
            <Menu />
            <HeroSection />
            <Characteristics/>
            <About />
            <Galeria />
            <Performance />
            <Footer />
        </div>
    )
}