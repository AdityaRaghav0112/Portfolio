import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TextType from "@/components/TextType";

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
              text={[
                "Web Developer",
                "Engineering Student",
                "Tech Enthusiast",
              ]}
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

            <p className="font-inter text-xl leading-loose">👋 I am Aditya Raghav - CSE student and a full stack developer. born and raised in Ajmer/Rajasthan, currently living in Gurgaon/Haryana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
