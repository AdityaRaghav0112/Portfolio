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
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative flex flex-col items-center gap-5">
        <h1 className="text-center font-anton text-5xl md:text-7xl mt-44 uppercase max-w-7xl">
          Exploring the space where logic, creativity, and curiosity come
          together
        </h1>
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

      <div className="min-h-screen w-full bg-black">
        <div className="flex justify-center pt-30 gap-3">
          <div className="h-50 w-[20%] mt-10">
            <h1 className="font-inter text-white font-bold text-xl uppercase text-end px-5">
              about me
            </h1>
          </div>
          <div className="bg-gray-300 rounded-2xl h-[80vh] w-1" />
          <div className="text-white h-50 w-[60%] px-5">
            <TextType
              text={["Web Developer", "Engineering Student", "Tech Enthusiast"]}
              typingSpeed={85}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={90}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              className="text-[6rem] ibm-plex-mono-regular"
            />

            <p className="font-inter text-xl leading-loose flex flex-col gap-15 items-start">
              <span>
                👋 I am Aditya Raghav - CSE student and a full stack developer.
                born and raised in Ajmer/Rajasthan, currently living in
                Gurgaon/Haryana. Currently I'm pursuing my B.Tech from
                Dronacharya College of Engineering(DCE),Gurgaon. I love playing
                video games, watching anime, and building visually appealing
                websites in my free time. <br />
              </span>
              <span>
                I like working on accross the entire stack - shaping clean
                interfaces on the frontend while building solid, scalable logic
                on the backend. I'm driven by curiosity and learning through
                building - experimenting with new tools, refining my code and
                constantly improving how things look, feel, and perform. Whether
                it's crafting smooth UI or structuring efficient systems behind
                the scenes.
              </span>
              <button className="bg-white mt-30 text-black font-inter font-semibold relative w-56 h-12 rounded-xl overflow-hidden group cursor-pointer">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Download Resume
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0"><ArrowDown/></span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
