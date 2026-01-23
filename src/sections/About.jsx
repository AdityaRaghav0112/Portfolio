import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 flex flex-col items-center gap-5">
        <h1 className="text-center font-anton text-5xl md:text-7xl mt-44 uppercase">
          about me
        </h1>
        <p className="flex-center text-xl  max-w-full flex-wrap gap-2 px-10 md:gap-3">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing <br /> elit.
          Harum, unde.
        </p>
      </div>

      <div id="clip" className="relative h-dvh w-screen overflow-hidden">
        <div className="mask-clip-path about-image">
          <img
            src="/Projects/Parallax.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="min-h-screen w-full">
        <h1 className="text-center">dnksndksa</h1>

      </div>
    </div>
  );
};

export default About;
