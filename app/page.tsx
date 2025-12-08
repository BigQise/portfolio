import Hero from "@/app/components/Hero";
import Bio from "./components/Bio";
import NavbarHeader from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <NavbarHeader/>
      <Hero/>
      <Bio/>
      <Projects/>
    </div>
  );
}
