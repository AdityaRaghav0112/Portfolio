import React from "react";

const ProjectCard2 = ({ title, desc, img }) => {
  return (
    <div className="h-dvh w-full flex flex-col items-center mt-20">
      <div className="h-[60%] w-[70%] bg-black rounded-4xl flex text-white overflow-hidden">
        {/* TEXT */}
        <div className="border-r-4 border-white w-[60%] h-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="font-anton text-5xl">{title}</h1>
            <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg">
              {desc}
            </ul>
          </div>

          <div>
            <p className="text-4xl font-anton">Tech Stack</p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-[40%] h-full">
          <img
            src={img}
            alt="Skivvy project preview"
            className="w-full h-full object-cover"
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
    <section
      id="projects"
      className="w-full h-dvh flex flex-col items-center mt-40"
    >
      <h1 className="text-5xl font-anton">Featured Projects</h1>
      <ProjectCard2
        title={"Skivvy - A skill sharing platform"}
        desc={
          <>
            <li>
              Developed a peer-to-peer skill sharing platform enabeling users to
              match based on skills preferencies.
            </li>
            <li>
              Implemented a recommendation algorithm improving a match accuracy
              by 30%.
            </li>
            <li>
              Built a responsive UI using Tailwind and shadcn, achieving a load
              time under 1.2 seconds.
            </li>
          </>
        }
        img="/Projects/Skivvy.png"
      />
    </section>
  );
};

export default Projects;
