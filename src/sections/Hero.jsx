import React, { useRef } from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.set("#foreground", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#foreground", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#foreground",
        start: "center center",
        end: "bottom center",
        scrub: 0.8,
      },
    });
  });

  return (
    <section ref={heroRef} className="relative h-dvh w-full overflow-hidden">
      <div
        id="foreground"
        className="relative z-40 h-dvh w-full overflow-hidden bg-black px-10 py-10 rounded-lg"
      >
        {/* INTRODUCTION */}
        <div className="h-full gap-2 flex flex-col justify-center">
          <h1 className="text-white text-[10rem] font-anton">
            Aditya Raghav
          </h1>
          {/* <div className="flex gap-4 items-center text-white">
            <LayoutTextFlip
              text="I'm a"
              words={["web developer", "student", "tech enthusiast", "gamer"]}
            />
          </div> */}
          <p className="max-w-4xl font-inter text-xl text-gray-300 leading-normal">
            Final year B.Tech CSE student with hands-on experience in <span className="text-white ">ReactJS, NextJS, NodeJS, ExpressJS, JavaScript(Es6+), TypeScript</span>. Built performance optimized, responsive web and interactive applications. Seeking a Full-Stack/Frontend role. 
          </p>
        </div>

        <h1 className="font-anton uppercase absolute bottom-5 right-5 z-40 text-9xl text-white">
          Think. <br />Build. <br />Deploy.
        </h1>
      </div>

      <h1 className="font-anton uppercase absolute bottom-5 right-5 z-10 text-9xl font-bold text-black">
        Think. <br />Build. <br />Deploy.
      </h1>
    </section>
  );
};

export default Hero;
