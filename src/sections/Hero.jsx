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
      className="relative h-dvh w-full overflow-hidden"
    >
      {/* FOREGROUND */}
      <div
        id="foreground"
        className="
          relative z-40 h-dvh w-full overflow-hidden bg-black 
          px-6 py-8 sm:px-10 sm:py-10 
          rounded-lg
        "
      >
        {/* INTRO */}
        <div className="h-full flex flex-col justify-center items-start gap-4">
          <h1
            className="
              text-white font-anton leading-none
              text-[3.2rem]
              sm:text-[4.5rem]
              md:text-[6rem]
              lg:text-[8rem]
              xl:text-[10rem]
            "
          >
            Aditya Raghav
          </h1>

          {/* TEXT FLIP (optional) */}
          {/* 
          <div className="flex gap-4 items-center text-white text-base sm:text-lg">
            <LayoutTextFlip
              text="I'm a"
              words={["web developer", "student", "tech enthusiast", "gamer"]}
            />
          </div>
          */}

          <div className="flex items-center gap-2">
            <button className="relative px-4 py-3 rounded-full overflow-hidden">
              <img
                src="/location.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />

              <span className="flex items-center gap-1 relative z-10 text-white font-bold">
                <MapPin /> Gurgaon, Haryana, India
              </span>
            </button>

            <button className="relative overflow-hidden text-white font-bold px-4 py-3 rounded-full  border-2 flex items-center justify-center gap-2 group ">
              {/* EXPANDING DOT */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full  bg-green-500 transition-all duration-200 ease-out group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:translate-y-0 group-hover:rounded-full z-0 "/>

              {/* CONTENT */}
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-0" />
                <span>Open to work</span>
              </span>
            </button>
          </div>

          <p
            className="
              max-w-4xl font-inter text-gray-300 leading-relaxed
              text-base
              sm:text-lg
              md:text-xl
            "
          >
            Final year B.Tech CSE student with hands-on experience in{" "}
            <span className="text-white">
              ReactJS, NextJS, NodeJS, ExpressJS, JavaScript (ES6+), TypeScript
            </span>
            . Built performance-optimized, responsive web and interactive
            applications. Seeking a Full-Stack/Frontend role.
          </p>
        </div>

        {/* FOREGROUND TEXT */}
        <h1
          className="
            font-anton uppercase absolute z-40 text-white leading-none
            bottom-4 right-4
            text-[2.5rem]
            sm:text-[3.5rem]
            md:text-[5rem]
            lg:text-[7rem]
            xl:text-[9rem]
          "
        >
          Think. <br /> Build. <br /> Deploy.
        </h1>
      </div>

      {/* BACKGROUND TEXT */}
      <h1
        className="
          font-anton uppercase absolute z-10 font-bold text-black leading-none
          bottom-4 right-4
          text-[2.5rem]
          sm:text-[3.5rem]
          md:text-[5rem]
          lg:text-[7rem]
          xl:text-[9rem]
        "
      >
        Think. <br /> Build. <br /> Deploy.
      </h1>
    </section>
  );
};

export default Hero;
