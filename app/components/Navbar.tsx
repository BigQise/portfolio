"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "./ui/resizable-navbar";
import Floppa from "../assets/floppa-floppa-spin.gif"

export default function NavbarHeader() {
    


      const navItems = [
    {
      name: "About",
      link: "#bio",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
];

  // Possibly add mobile navigation bar

    return (
      <div>
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
          <NavbarLogo src={Floppa}/>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
              <NavbarButton variant="primary">Contact</NavbarButton>
          </div>
          </NavBody>
        </Navbar>
      </div>
    )
}