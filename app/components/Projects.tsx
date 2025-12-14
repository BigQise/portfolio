"use client"
import { HoverEffect } from "@/app/components/ui/card-hover-effect"

const projects = [
  {
    title: "GopherTunnels",
    description:
      "A mobile navigation app based off MapBox, made to help University of Minnesota students navigate the campus\'s confusing skyway and tunnel system",
    technologies: ['React Native', 'Expo', 'TypeScript', 'Go', 'MySQL'],
    img: "",
    link: "https://github.com/gopher-tunnels",
  },
  {
    title: "GopherFit",
    description:
      "A fitness app that includes workout, macro and calorie tracking as well as a social media page for UMN students to share fitness related content with eachother",
    technologies: ['React Native', 'Expo', 'TypeScript', 'Express', 'Neo4j'],
    img: "",
    link: "https://github.com/umn-adc/gopher-fit-front/tree/dev",
  },
  {
    title: "This Cool Website",
    description:
      "This is the website. It was built to show off some projects I'm currently working on and also to have fun with and learn React. More renovations coming",
    technologies: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    img: "",
    link: "/",
  },
];

export default function Projects() {
    return (
        <div id="projects" className="bg-slate-950 min-h-screen flex flex-col items-center px-20 py-40">
            <h2 className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-12 text-center">
                Projects
            </h2>
            <HoverEffect items={projects}/>
        </div>
    )
};