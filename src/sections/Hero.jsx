import React, { useRef } from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MapPin } from "lucide-react";

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
        scrub: 0.2,
      },
    });
  });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* FOREGROUND */}
      <div
        id="foreground"
        className="relative z-40 min-h-screen w-full overflow-hidden bg-black px-5 py-8 sm:px-10 sm:py-10 rounded-none sm:rounded-lg">
        {/* INTRO */}
        <div className="h-full flex flex-col justify-center items-start gap-4 md:mt-50 mt-[58vh]">
          <h1 className="text-white font-anton leading-none text-[2.8rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
            Aditya Raghav
          </h1>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="group relative px-4 py-3 rounded-full overflow-hidden transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95">
              {/* Background image */}
              <img
                src="/location.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />

              {/* Light sweep */}
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%]  group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/20 to-transparent"/>

              {/* Text */}
              <span className="relative z-10 flex items-center gap-1 text-white font-bold text-sm sm:text-base">
                <MapPin className="w-4 h-4" />

                {/* Wave text */}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-white via-gray-200 to-white 
                  bg-size-[200%_100%] bg-left group-hover:bg-right 
                  transition-[background-position] duration-700 ease-out bg-clip-text text-transparent">
                    Gurgaon, Haryana, India
                  </span>
                </span>
              </span>
            </button>

            <button className="relative overflow-hidden text-white font-bold px-4 py-3  rounded-full border-2 flex items-center justify-center gap-2 group transition-transform duration-200 hover:scale-[1.03] active:scale-95">
              {/* EXPANDING DOT */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 z-0 transition-all duration-500 ease-out group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-[40]"/>

              {/* CONTENT */}
              <span className="relative z-10 flex items-center gap-2">
                {/* STATIC DOT (keeps spacing) */}
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-90 animate-pulse" />

                <span className="text-sm sm:text-base transition-colors duration-300 group-hover:text-black">
                  Open to work
                </span>
              </span>
            </button>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-4xl font-inter text-gray-300 leading-relaxed text-sm sm:text-lg
          md:text-xl">
            Final year B.Tech CSE student with hands-on experience in{" "}
            <span className="text-white">
              ReactJS, NextJS, NodeJS, ExpressJS, JavaScript (ES6+), TypeScript
            </span>
            . Built performance-optimized, responsive web and interactive
            applications. Seeking a Full-Stack/Frontend role.
          </p>
        </div>

        {/* FOREGROUND TEXT */}
        <h1 className="font-anton uppercase absolute z-40 text-white leading-none bottom-4 right-4 pointer-events-none text-[1.8rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem]
        xl:text-[9rem]">
          Think. <br /> Build. <br /> Deploy.
        </h1>
      </div>

      {/* BACKGROUND TEXT (DESKTOP ONLY) */}
      <h1 className="hidden sm:block font-anton uppercase absolute z-10 font-bold text-black leading-none bottom-4 right-4 pointer-events-none text-[3.5rem] md:text-[5rem] 
      lg:text-[7rem] xl:text-[9rem]">
        Think. <br /> Build. <br /> Deploy.
      </h1>
    </section>
  );
};

export default Hero;
