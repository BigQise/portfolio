"use client"
import { Linkedin, Github, Mail } from "lucide-react";
import { FadeInView } from "./ui/fade-in-view";

export default function Social() {
    return (
        <div className="bg-slate-950 pb-40">
            <FadeInView direction="up" duration={0.7}>
                <h2 className="text-foreground text-3xl lg:text-5xl font-bold xl:mb-12 text-center">
                    Let's Connect
                </h2>
            </FadeInView>
            <FadeInView direction="up" duration={0.8} delay={0.15}>
            <div className="flex flex-row justify-center gap-10 p-10">
                <a href={"https://www.linkedin.com/in/qise-salem/"} className="flex flex-row gap-2 hover:text-accent">
                    <Linkedin/>
                    <p className="font-sans text-lg">LinkedIn</p>
                </a>
                <a href={"https://github.com/BigQise"} className="flex flex-row gap-2 hover:text-accent">
                    <Github/>
                    <p className="font-sans text-lg">GitHub</p>
                </a>
                <a href={"mailto:qise360@gmail.com"} className="flex flex-row gap-2 hover:text-accent">
                    <Mail/>
                    <p className="font-sans text-lg">Email</p>
                </a>
            </div>
            </FadeInView>
        </div>
    )
}