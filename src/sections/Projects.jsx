import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard2 = ({ title, desc, img }) => {
  return (
    <div className="w-full flex flex-col items-center py-20">
      <div
        className="
    min-h-[60vh] 
    w-[70%] 
    bg-black 
    rounded-4xl 
    flex 
    text-white 
    overflow-hidden

    max-lg:w-[90%]
-   max-md:flex-col
+   max-md:flex-col-reverse
  "
      >
        {/* TEXT */}
        <div
          className="
            border-r-4 border-white 
            w-[60%] 
            p-8 
            flex flex-col justify-between

            max-md:w-full
            max-md:border-r-0
            max-md:border-b-4
          "
        >
          <div>
            <h1 className="font-anton text-5xl max-sm:text-4xl">{title}</h1>

            <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg max-sm:text-base">
              {desc}
            </ul>
          </div>

          <p className="text-4xl font-anton max-sm:text-3xl">Tech Stack</p>
        </div>

        {/* IMAGE */}
        <div
          className="
            w-[40%] 
            min-h-[60vh] 
            relative 
            overflow-hidden

            max-md:w-full 
            max-md:min-h-[40vh]
          "
        >
          <img
            src={img}
            alt="Project preview"
            className="
              absolute inset-0
              w-full h-full
              object-cover object-center
              select-none
            "
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="w-screen mt-24 flex justify-center">
      <div
        className="relative flex flex-col md:flex-row 
               items-center w-[90%] px-6 md:px-10"
      >
        {/* TEXT CARD */}
        <div
          className="relative z-20 bg-black/90 text-white
                 w-[90%] md:w-[55%]
                 rounded-xl p-8 md:p-5
                 flex flex-col justify-center
                 order-2 md:order-1
                 -mt-20 md:mt-0
                 md:-mr-32"
        >
          <h1 className="text-3xl font-anton">Skivvy</h1>
          <p className="text-base leading-relaxed mb-4">
            A skill sharing platform for both learning and teaching.
          </p>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            tempore distinctio est perspiciatis eaque omnis dicta.
          </p>
        </div>

        {/* IMAGE CARD */}
        <div
          className="relative z-10
                 w-full md:w-[55%]
                 rounded-xl overflow-hidden shadow-xl
                 order-1 md:order-2"
        >
          <img
            src="/Projects/Parallax.png"
            alt="Skivvy"
            className="w-full h-[280px] md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full flex flex-col items-center pt-40">
      <h1 className="text-5xl font-anton mb-20">Featured Projects</h1>

      <div className="w-full relative">
        <div className="project-card">
          <ProjectCard2
            title={"Skivvy - A skill sharing platform"}
            desc={
              <>
                <li>
                  Developed a peer-to-peer skill sharing platform enabling users
                  to match based on skill preferences.
                </li>
                <li>
                  Implemented a recommendation algorithm improving match
                  accuracy by 30%.
                </li>
                <li>
                  Built a responsive UI using Tailwind and shadcn, achieving a
                  load time under 1.2 seconds.
                </li>
              </>
            }
            img="/Projects/Skivvy.png"
          />
        </div>

        <div className="project-card">
          <ProjectCard2
            title={"Schedulify - CPU shceduling algorithm's visualizer"}
            desc={
              <>
                <li>
                  Developed a peer-to-peer skill sharing platform enabling users
                  to match based on skill preferences.
                </li>
                <li>
                  Implemented a recommendation algorithm improving match
                  accuracy by 30%.
                </li>
                <li>
                  Built a responsive UI using Tailwind and shadcn, achieving a
                  load time under 1.2 seconds.
                </li>
              </>
            }
            img="/Projects/Schedulify.png"
          />
        </div>
        <div className="project-card">
          <ProjectCard2
            title={"Parallax - A UI responsive UI component"}
            desc={
              <>
                <li>
                  Developed a peer-to-peer skill sharing platform enabling users
                  to match based on skill preferences.
                </li>
                <li>
                  Implemented a recommendation algorithm improving match
                  accuracy by 30%.
                </li>
                <li>
                  Built a responsive UI using Tailwind and shadcn, achieving a
                  load time under 1.2 seconds.
                </li>
              </>
            }
            img="/Projects/Parallax.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
