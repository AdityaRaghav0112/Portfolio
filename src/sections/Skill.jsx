import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  {
    name: "Figma",
    desc: "Design Tool",
    icon: <FaFigma className="w-6 h-6 text-pink-400" />,
    color: "#2A1F2D",
  },
  {
    name: "TypeScript",
    desc: "JavaScript but better",
    icon: <SiTypescript className="w-6 h-6 text-blue-400" />,
    color: "#1E2A38",
  },
  {
    name: "React",
    desc: "JavaScript Library",
    icon: <FaReact className="w-6 h-6 text-cyan-400" />,
    color: "#1E2C30",
  },
  {
    name: "NextJS",
    desc: "React framework",
    icon: <SiNextdotjs className="w-6 h-6 text-white" />,
    color: "#1A1A1A",
  },
  {
    name: "Tailwind",
    desc: "CSS framework",
    icon: <SiTailwindcss className="w-6 h-6 text-sky-400" />,
    color: "#1E293B",
  },
  {
    name: "Git",
    desc: "Version control",
    icon: <FaGitAlt className="w-6 h-6 text-orange-400" />,
    color: "#2D1E1A",
  },
  {
    name: "GitHub",
    desc: "Code hosting",
    icon: <FaGithub className="w-6 h-6 text-white" />,
    color: "#1F1F1F",
  },
  {
    name: "NodeJS",
    desc: "Backend runtime",
    icon: <FaNodeJs className="w-6 h-6 text-green-400" />,
    color: "#1E2A22",
  },
];

/* Animations */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skill = () => {
  return (
    <section className="w-full min-h-[80vh] bg-black flex items-center justify-center py-16">
      <div className="w-full max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold"
        >
          Current technologies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg mt-3 max-w-2xl"
        >
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions. These are some of my main
          technologies.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-3 sm:gap-5 
            mt-8 sm:mt-12
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                group
                relative
                bg-[#1c1c1c]
                border border-white/5
                rounded-xl
                px-3 py-4 sm:px-4 sm:py-5
                flex items-center gap-3 sm:gap-4
                cursor-pointer
                transition-all
                hover:scale-[1.03]
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute inset-0 rounded-xl opacity-0 
                  group-hover:opacity-100 
                  transition duration-300
                "
                style={{
                  boxShadow: "0 0 25px rgba(255,255,255,0.08)",
                }}
              />

              {/* Icon */}
              <div
                className="
                  relative z-10
                  w-10 h-10 sm:w-12 sm:h-12 
                  rounded-lg 
                  flex items-center justify-center
                "
                style={{ backgroundColor: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-white text-sm sm:text-base font-medium leading-tight">
                  {skill.name}
                </h3>
                <p className="text-[11px] sm:text-sm text-gray-400">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
