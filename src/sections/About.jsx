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
    <div id="about" className="min-h-screen w-screen overflow-x-hidden">
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

      {/* CONTENT */}
      <div className="min-h-screen w-full bg-black">
        <div
          className="flex flex-col md:flex-row justify-center gap-6
                     pt-20 md:pt-30 px-4 md:px-0"
        >
          {/* LEFT LABEL */}
          <div className="md:h-50 md:w-[20%] md:mt-10">
            <h1
              className="font-inter text-white font-bold uppercase
                         text-sm sm:text-base md:text-xl
                         md:text-end px-5"
            >
              about me
            </h1>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block bg-gray-300 rounded-2xl h-[70vh] w-1" />

          {/* RIGHT CONTENT */}
          <div className="text-white md:h-50 md:w-[60%] px-2 md:px-5">
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
              className="ibm-plex-mono-regular
                         text-3xl sm:text-4xl md:text-6xl lg:text-[6rem]
                         leading-tight"
            />

            <p
              className="font-inter text-base sm:text-lg md:text-xl
                         leading-relaxed md:leading-loose
                         flex flex-col gap-10 md:gap-15 mt-6"
            >
              <span>
                👋 I am Aditya Raghav – CSE student and a full stack developer,
                born and raised in Ajmer/Rajasthan, currently living in
                Gurgaon/Haryana. Currently I'm pursuing my B.Tech from
                Dronacharya College of Engineering (DCE), Gurgaon. I love
                playing video games, watching anime, and building visually
                appealing websites in my free time.
              </span>

              <span>
                I like working across the entire stack – shaping clean
                interfaces on the frontend while building solid, scalable logic
                on the backend. I'm driven by curiosity and learning through
                building, constantly refining how things look, feel, and
                perform.
              </span>

              {/* DOWNLOAD BUTTON */}
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Aditya_Fullstack.pdf";
                  link.download = "Resume.pdf";
                  link.click();
                }}
                className="bg-white text-black font-inter font-semibold
                           relative w-52 sm:w-56 h-12 rounded-xl
                           overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Download Resume
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <ArrowDown />
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
