import React, { useRef, useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

/* ================= DATA ================= */

const frontend = [
  { id: 1, skill: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
  { id: 2, skill: "NextJS", icon: <RiNextjsFill />, color: "#ffffff" },
  {
    id: 3,
    skill: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "#38BDF8",
  },
  { id: 4, skill: "JavaScript", icon: <RiJavascriptFill />, color: "#F7DF1E" },
  { id: 5, skill: "TypeScript", icon: <BiLogoTypescript />, color: "#3178C6" },
  { id: 6, skill: "ThreeJS", icon: <TbBrandThreejs />, color: "#ffffff" },
  { id: 7, skill: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { id: 8, skill: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
];

const backend = [
  { id: 1, skill: "NodeJS", icon: <FaNodeJs />, color: "#3C873A" },
  { id: 2, skill: "ExpressJS", icon: <SiExpress />, color: "#ffffff" },
  { id: 3, skill: "REST API", icon: <SiExpress />, color: "#888888" },
  { id: 4, skill: "JWT Auth", icon: <SiJsonwebtokens />, color: "#D63AFF" },
];

const databases = [
  { id: 1, skill: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { id: 2, skill: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
];

const tools = [
  { id: 1, skill: "Git", icon: <FaGit />, color: "#F05032" },
  { id: 2, skill: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  { id: 3, skill: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  { id: 4, skill: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
  { id: 5, skill: "Render", icon: <SiRender />, color: "#46E3B7" },
];

/* ================= UI ================= */

const SkillGroup = ({ title, items }) => {
  return (
    <BentoTilt className="bg-[#1a1a1a] rounded-2xl p-5 space-y-5">
      <h2 className="text-white font-inter uppercase tracking-wide text-xs">
        {title}
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-1.5
                       p-3 sm:p-3.5
                       rounded-lg
                       bg-black/40 hover:bg-black/70
                       transition group"
          >
            <div
              className="text-3xl sm:text-4xl
                         transition-transform
                         group-hover:scale-105"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>

            <span className="text-[11px] sm:text-xs text-gray-300 font-inter text-center">
              {item.skill}
            </span>
          </div>
        ))}
      </div>
    </BentoTilt>
  );
};

const BentoTilt = ({children, className}) => {
  const itemRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * 6;
    const tiltY = (x - 0.5) * 6;

    setTransform(`perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);
  }

  const handleMouseLeave = () => {
    setTransform(`perspective(800px) rotateX(0deg) rotateY(0deg)`);
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

const Skill = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center ">
      <div className="w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* LEFT SECTION – SKILLS */}
          <div className="space-y-8 w-full md:w-[65%] lg:w-[70%] xl:w-[75%] overflow-hidden">
            <SkillGroup title="Frontend" items={frontend} />
            <SkillGroup title="Backend" items={backend} />
            <SkillGroup title="Databases" items={databases} />
            <SkillGroup title="Tools & Platforms" items={tools} />
          </div>

          {/* DIVIDER */}
          <div className="hidden md:flex">
            <div className="w-[2px] bg-white rounded-full" />
          </div>

          {/* RIGHT SECTION – TITLE */}
          <div className="flex-1 flex items-start">
            <h1 className="text-white uppercase font-semibold font-inter text-xl mt-4">
              My Arsenal
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
