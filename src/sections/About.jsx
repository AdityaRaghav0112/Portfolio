import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TextType from "@/components/TextType";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-full overflow-hidden">
      {/* HEADING */}
      <div className="relative flex flex-col items-center gap-5 px-4">
        <h1
          className="text-center font-anton uppercase max-w-7xl
                     text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                     mt-32 md:mt-44"
        >
          Exploring the space where logic, creativity, and curiosity come
          together
        </h1>
      </div>

      {/* CLIP SECTION */}
      <div id="clip" className="relative h-dvh w-screen overflow-hidden">
        <div className="mask-clip-path about-image h-full w-full">
          <img
            src="/Projects/Parallax.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
    </div>
  );
};

export default About;
