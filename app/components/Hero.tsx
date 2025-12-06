"use client";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";
import { useState } from "react";
import { Boxes } from "./ui/background-boxes";
import Qise from "../assets/Qise.jpg"

export function Hero() {
    const [showSecond, setShowSecond] = useState(false);

    const words = [
    {
        text: "Hi!",
    }, {
        text: "I'm",
    }, {
        text: "Qise,",
    }, {
        text: "Aspiring",
    }, {
        text: "Software",
    }, { 
        text: "Engineer",
    },
];
// try changing dark:bg to blue later when rest of page is done
    return (
    <div className="h-[35rem] w-full relative overflow-hidden bg-white dark:bg-slate-950 flex flex-row items-center justify-center rounded-md"> 
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>
      <Boxes/>
      <h1 className="text-center relative z-20 pr-30">
        <TypewriterEffect words={words.slice(0,3)} onComplete={() => setShowSecond(true)} />
        {showSecond && <TypewriterEffect words={words.slice(3,6)} className=""/>}
      </h1>
      <Image src={Qise} alt="Qise" width={200} height={200} className="relative z-20 rounded-xl" />
    </div>
    )
}