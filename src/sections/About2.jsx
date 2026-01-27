import React from 'react'
import { ArrowDown } from 'lucide-react';

import TextType from "@/components/TextType";

const About2 = () => {
  return (
    <div>
      <div className="w-full bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* LEFT LABEL */}
            <div className="md:flex-[1] md:pt-4">
              <h1
                className="font-inter text-white font-bold uppercase
                     text-sm sm:text-base md:text-xl
                     md:text-right"
              >
                about me
              </h1>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:flex justify-center">
              <div className="w-[2px] bg-white rounded-full self-stretch h-[75vh]" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:flex-[3] text-white">
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
                cursorBlinkDuration={0.5}
                className="ibm-plex-mono-regular
                     text-2xl sm:text-3xl md:text-5xl lg:text-6xl
                     leading-tight break-words"
              />

              <div
                className="font-inter text-base sm:text-lg md:text-2xl
                     leading-relaxed md:leading-loose
                     flex flex-col gap-8 mt-8"
              >
                <p>
                  👋 I am Aditya Raghav – CSE student and a full stack
                  developer, born and raised in Ajmer/Rajasthan, currently
                  living in Gurgaon/Haryana. Currently I'm pursuing my B.Tech
                  from Dronacharya College of Engineering (DCE), Gurgaon. I love
                  playing video games, watching anime, and building visually
                  appealing websites in my free time.
                </p>

                <p>
                  I like working across the entire stack – shaping clean
                  interfaces on the frontend while building solid, scalable
                  logic on the backend. I'm driven by curiosity and learning
                  through building, constantly refining how things look, feel,
                  and perform.
                </p>

                {/* DOWNLOAD BUTTON */}
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Aditya_Fullstack.pdf";
                    link.download = "Resume.pdf";
                    link.click();
                  }}
                  className="bg-white text-black font-inter font-semibold
                       relative w-64 h-12 rounded-xl
                       overflow-hidden group"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                    Download Resume
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <ArrowDown />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2
