"use client"
import { HoverEffect } from "@/app/components/ui/card-hover-effect"
import { FadeInView } from "./ui/fade-in-view"
import GopherTunnelsImg from "@/app/assets/GopherTunnel-3.png"
import GopherFitImg from "@/app/assets/GopherFit-3.png"
import Cat from "@/app/assets/catgamer.jpg"
import MemoryMosaic from "@/app/assets/MemoryMosaic.png";

const projects = [
  {
    title: "GopherTunnels",
    description:
      "A mobile navigation app based off MapBox, made to help University of Minnesota students navigate the campus\'s confusing skyway and tunnel system. Released Feb 2026 with 200+ downloads",
    technologies: ['React Native', 'Expo', 'TypeScript'],
    img: GopherTunnelsImg,
    link: "https://apps.apple.com/us/app/gophertunnels/id6754943228",
  },
  {
    title: "GopherFit [WIP]",
    description:
      "A fitness app that includes workout, macro and calorie tracking as well as a social media page for UMN students to share fitness related content with eachother",
    technologies: ['React Native', 'Expo', 'TypeScript', 'Go', 'MySQL'],
    img: GopherFitImg,
    link: "https://github.com/umn-adc/gopher-fit-front/tree/dev",
  },
  {
    title: "MemoryMosaic",
    description:
      "MinneHack 2026 first place winning project. MemoryMosaic is a collaborative, never-ending mosaic where anyone can upload an image and snap it into place on a shared infinite canvas. Each tile is mended together, making a community-built collage.",
    technologies: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    img: MemoryMosaic,
    link: "https://memorymosaic-khaki.vercel.app/",
  },
];

export default function Projects() {
    return (
        <div id="projects" className="bg-slate-950 min-h-screen flex flex-col items-center px-5 lg:px-15 py-40">
            <FadeInView direction="up" duration={0.7}>
                <h2 className="text-foreground text-3xl lg:text-5xl font-bold xl:mb-12 text-center">
                    Projects
                </h2>
            </FadeInView>
            <FadeInView direction="up" duration={0.8} delay={0.2} className="w-full">
                <HoverEffect items={projects}/>
            </FadeInView>
        </div>
    )
};