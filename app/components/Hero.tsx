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
    return (
    <div className="h-[40rem] w-full bg-white dark:bg-black flex flex-row items-center justify-center overflow-hidden rounded-md">
      <Boxes/>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center relative z-20 pr-30">
        <TypewriterEffect words={words.slice(0,3)} onComplete={() => setShowSecond(true)} />
        {showSecond && <TypewriterEffect words={words.slice(3,6)} />}
      </h1>
      <Image src={Qise} alt="Qise" width={200} height={200} className="relative z-20" />
    </div>
    )
}