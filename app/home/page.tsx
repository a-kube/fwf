import React from "react";
import Navbar from "../navbar";
import ProjectPage from "./components/projects";
import Footer from "../footer";
import DiscordPage from "./components/discord";
import Spline from "@splinetool/react-spline";
import { FaArrowDownLong } from "react-icons/fa6";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"></p>
        </div>
        <div className="z-50 content-center justify-center text-center items-center">
          <Spline scene="https://prod.spline.design/Ng8BGoAyjFDWDigB/scene.splinecode" />
        </div>
      </BackgroundGradientAnimation>
      <FaArrowDownLong />
      <ProjectPage />
      <DiscordPage />
      <Footer />
    </div>
  );
};

export default HomePage;
