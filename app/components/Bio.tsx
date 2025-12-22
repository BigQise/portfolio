"use client"
import { TextGenerateEffect } from "./ui/text-generate-effect";
//TODO: update descriptions and add a mission section the right side of the background card

const words = `I am a junior CS Student located in Minnesota, USA. I'm most familiar with front-end development but always looking to grow and learn more in any sub-field of SWE.
            I enjoy the creative process in and outside of programming and would love to work on unique or impactful projects that could help make the world a better place.`;

export default function Bio() {
    return (
        <div id="bio" className="dark:bg-slate-950 flex items-center justify-center py-20 lg:py-60">
            <TextGenerateEffect words={words} className="text-foreground text-3xl lg:text-5xl font-bold m-15"/>
        </div>
    );
;}