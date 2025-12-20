import Hero from "@/app/components/Hero";
import Bio from "./components/Bio";
import NavbarHeader from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Social from "./components/Social";

export default function Home() {
  return (
    <div>
      <NavbarHeader/>
      <Hero/>
      <Bio/>
      <Projects/>
      <Social/>
      <Footer/>
    </div>
  );
}
