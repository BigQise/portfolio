import { Linkedin, Github, Mail } from "lucide-react";

export default function Social() {
    return (
        <div className="bg-slate-950">
            <h2 className="text-foreground text-3xl lg:text-5xl font-bold xl:mb-12 text-center">
                Let's Connect
            </h2>
            <div className="flex flex-row justify-center gap-10 p-10 pb-30">
                <a href={"https://www.linkedin.com/in/qise-salem/"} className="flex flex-row gap-2">
                    <Linkedin/>
                    <p className="font-sans text-lg">LinkedIn</p>
                </a>
                <a href={"https://github.com/BigQise"} className="flex flex-row gap-2">
                    <Github/>
                    <p className="font-sans text-lg">GitHub</p>
                </a>
                <a href={"mailto:qise360@gmail.com"} className="flex flex-row gap-2">
                    <Mail/>
                    <p className="font-sans text-lg">Email</p>
                </a>
            </div>
        </div>
    )
}