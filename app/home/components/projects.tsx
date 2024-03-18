"use client";
import React from "react";
import Image from "next/image";
import { HeroParallax } from "../../../components/ui/hero-parallax";

const ProjectPage = () => {
  return (
    <div className="overflow-hidden rounded-2xl has-shadow w-[30rem] relative">
      <div>
        <Image src="/project1.png" className="aspect-video" alt="" width={480} height={270} />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black" />
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 text-white">
        <div className="text-xs">Ricco Xie • 1 June 2023</div>
        <h3 className="text-xl font-semibold">Sira team talk</h3>
        <div className="text-sm opacity-80">
          <p>
            🕹 Customizable and 😍 accessible design system which provides TailwindCSS component
            className name library to build modern UI. 💥
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
