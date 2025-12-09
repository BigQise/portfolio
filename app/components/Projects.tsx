"use client"
import { HoverEffect } from "@/app/components/ui/card-hover-effect"

const projects = [
  {
    title: "GopherTunnels",
    description:
      "A mobile navigation app based off MapBox, made to help University of Minnesota students naviagate the campus\'s confusing skyway and tunnel system",
    technologies: ['React Native', 'Expo', 'TypeScript', 'Go', 'MySQL'],
    img: "",
    link: "https://github.com/gopher-tunnels",
  },
  {
    title: "GopherFit",
    description:
      "A fitness app that includes workout, macro and calorie tracking as well as a social media page for UMN students to share fitness related content with eachother",
    technologies: ['React Native', 'Expo', 'Express', 'Neo4j', 'TypeScript'],
    img: "",
    link: "https://github.com/umn-adc/gopher-fit-front/tree/dev",
  },
  {
    title: "This Cool Website",
    description:
      "This is the website. It features stuff about me and was built so I can show off more projects that I am currently working on to show my constant learning and also to have fun with React. Much more renovations will come to this site",
    technologies: ['React', 'Tailwind CSS', 'Next.js'],
    img: "",
    link: "/",
  },
];

export default function Projects() {
    return (
        <div id="projects" className="bg-slate-950 min-h-screen flex flex-col items-center px-20 py-40">
            <h2 className="text-foreground text-5xl font-bold mb-12 text-center">
                Projects
            </h2>
            <HoverEffect items={projects}/>
        </div>
    )
};