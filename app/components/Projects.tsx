"use client"
import { HoverEffect } from "@/app/components/ui/card-hover-effect"
import GopherTunnelsImg from "@/app/assets/GopherTunnel-3.png"
import GopherFitImg from "@/app/assets/GopherFit-3.png"
import Cat from "@/app/assets/catgamer.jpg"

const projects = [
  {
    title: "GopherTunnels",
    description:
      "A mobile navigation app based off MapBox, made to help University of Minnesota students navigate the campus\'s confusing skyway and tunnel system. Releasing very soon!",
    technologies: ['React Native', 'Expo', 'TypeScript', 'Go', 'MySQL'],
    img: GopherTunnelsImg,
    link: "https://github.com/gopher-tunnels",
  },
  {
    title: "GopherFit [WIP]",
    description:
      "A fitness app that includes workout, macro and calorie tracking as well as a social media page for UMN students to share fitness related content with eachother",
    technologies: ['React Native', 'Expo', 'TypeScript'],
    img: GopherFitImg,
    link: "https://github.com/umn-adc/gopher-fit-front/tree/dev",
  },
  {
    title: "This Cool Website",
    description:
      "This is the website. It was built to show off some projects I'm currently working on and also to have fun with and learn React. More renovations coming! Cat pic will sit here for now",
    technologies: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    img: Cat,
    link: "https://github.com/BigQise/portfolio",
  },
];

export default function Projects() {
    return (
        <div id="projects" className="bg-slate-950 min-h-screen flex flex-col items-center px-5 lg:px-15 py-40">
            <h2 className="text-foreground text-3xl lg:text-5xl font-bold xl:mb-12 text-center">
                Projects
            </h2>
            <HoverEffect items={projects}/>
        </div>
    )
};