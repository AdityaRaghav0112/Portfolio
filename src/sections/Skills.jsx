import React from "react";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";
import { SiExpress, SiMysql, SiMongodb, SiJsonwebtokens, SiVercel, SiNetlify, SiRender } from "react-icons/si";

const Skills = () => {
  const frontend = [
    { id: 1, skill: "ReactJS", icon: <FaReact className="size-20" />, color: "#61DAFB" },
    { id: 2, skill: "NextJS", icon: <RiNextjsFill className="size-20" />, color: "#000000" },
    { id: 3, skill: "Tailwind CSS", icon: <RiTailwindCssFill className="size-20" />, color: "#38BDF8" },
    { id: 4, skill: "JavaScript", icon: <RiJavascriptFill className="size-20" />, color: "#F7DF1E" },
    { id: 5, skill: "TypeScript", icon: <BiLogoTypescript className="size-20" />, color: "#3178C6" },
    { id: 6, skill: "ThreeJS", icon: <TbBrandThreejs className="size-20" />, color: "#111111" },
    { id: 7, skill: "HTML5", icon: <FaHtml5 className="size-20" />, color: "#E34F26" },
    { id: 8, skill: "CSS3", icon: <FaCss3 className="size-20" />, color: "#1572B6" },
  ];

  const backend = [
    { id: 1, skill: "NodeJS", icon: <FaNodeJs className="size-20" />, color: "#3C873A" },
    { id: 2, skill: "ExpressJS", icon: <SiExpress className="size-20" />, color: "#000000" },
    { id: 3, skill: "REST API", icon: <SiExpress className="size-20" />, color: "#444444" },
    { id: 4, skill: "JWT Auth", icon: <SiJsonwebtokens className="size-20" />, color: "#D63AFF" },
  ];

  const databases = [
    { id: 1, skill: "MySQL", icon: <SiMysql className="size-20" />, color: "#00758F" },
    { id: 2, skill: "MongoDB", icon: <SiMongodb className="size-20" />, color: "#47A248" },
  ];

  const tools = [
    { id: 1, skill: "Git", icon: <FaGit className="size-20" />, color: "#F05032" },
    { id: 2, skill: "GitHub", icon: <FaGithub className="size-20" />, color: "#181717" },
    { id: 3, skill: "Vercel", icon: <SiVercel className="size-20" />, color: "#000000" },
    { id: 4, skill: "Netlify", icon: <SiNetlify className="size-20" />, color: "#00C7B7" },
    { id: 5, skill: "Render", icon: <SiRender className="size-20" />, color: "#46E3B7" },
  ];

  const SkillCard = ({ data }) => (
    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          style={{ backgroundColor: item.color }}
          className="
            w-28 h-32
            sm:w-32 sm:h-36
            md:w-36 md:h-40
            rounded-xl
            border-2 sm:border-3 border-black
            flex flex-col
            items-center
            justify-around
            text-white
            hover:scale-105
            transition-transform
            p-2
          "
        >
          <div className="[&>svg]:w-12 [&>svg]:h-12 sm:[&>svg]:w-16 sm:[&>svg]:h-16 md:[&>svg]:w-20 md:[&>svg]:h-20">
            {item.icon}
          </div>
          <h1 className="text-sm sm:text-base md:text-lg font-inter text-center">
            {item.skill}
          </h1>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="skills"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4 overflow-hidden"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-anton mb-8 text-white text-center">
        My Arsenal
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1400px] auto-rows-fr">
        {/* backend */}
        <div
          className="md:col-span-2 rounded-xl p-4 sm:p-6 min-h-[300px]"
          style={{
            backgroundImage: "url(/skill/backend.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="ibm-plex-mono-bold text-white text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            Backend
          </h1>
          <SkillCard data={backend} />
        </div>

        {/* BACKEND */}
        <div
          className="md:row-span-2 rounded-xl p-4 sm:p-6 bg-[#222222] min-h-[300px]"
          style={{
            backgroundImage: "url(/skill/frontend.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="ibm-plex-mono-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            Frontend
          </h1>
          <SkillCard data={frontend}/>
        </div>

        {/* DATABASES */}
        <div
          className="rounded-xl p-4 sm:p-6 min-h-[300px]"
          style={{
            backgroundImage: "url(/skill/database.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="ibm-plex-mono-bold text-white text-2xl sm:text-3xl mb-4 sm:mb-6">
            Databases
          </h1>
          <SkillCard data={databases} />
        </div>

        {/* TOOLS */}
        <div
          className="rounded-xl p-4 sm:p-6 min-h-[300px]"
          style={{
            backgroundImage: "url(/skill/tools.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="ibm-plex-mono-bold text-white text-2xl sm:text-3xl mb-4 sm:mb-6">
            Tools
          </h1>
          <SkillCard data={tools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
