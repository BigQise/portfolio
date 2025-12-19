import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Chip from "../Chip";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    img: string | StaticImageData;
    technologies: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardImage>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="absolute inset-0 object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pt-2 pb-4 bg-linear-to-t backdrop-blur-xs from-black/60 to-black/30">
                <CardDescription className="mt-0">{item.description}</CardDescription>
                <CardChips className="mt-3">
                  {item.technologies.map((tech, idx) => (
                    <Chip title={tech} key={idx}/>
                  ))}
                </CardChips>
              </div>
            </CardImage>  
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-8 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold font-sans tracking-wide text-lg lg:text-2xl", className)}>
      {children}
    </h4>
  );
};
export const CardImage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("relative z-0 h-80 md:h-96 lg:h-[36rem] w-full overflow-hidden ", className)}>
      {children}
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-200 tracking-wide leading-relaxed text-sm lg:text-lg font-sans relative z-10",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardChips = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex flex-wrap flex-row mt-6 relative z-10", className)}>
      {children}
    </div>
  );
};
