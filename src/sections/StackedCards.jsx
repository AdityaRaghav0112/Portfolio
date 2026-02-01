import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { ExternalLink, Github } from "lucide-react";

const cards = [
  {
    title: "Skivvy - A skill sharing platform",
    desc: [
      "Developed a peer-to-peer skill sharing platform enabling users to match based on skill preferences",
      "Implemented a recommendation algorithm improving match accuracy by 30%",
      "Built a responsive UI using Tailwind and shadcn, achieving a load time under 1.2 seconds",
    ],
    img: "/Projects/Skivvy.png",
    bg: "bg-[#222222]",
    tech: [
      { Icon: FaReact, name: "React", bg: "#61DBFB" },
      { Icon: FaNodeJs, name: "Node.js", bg: "#339933" },
      { Icon: SiMongodb, name: "MongoDB", bg: "#47A248" },
      { Icon: SiTypescript, name: "TypeScript", bg: "#3178C6" },
    ],
    link: "https://skivvy.vercel.app/",
    git: "https://github.com/Abhaynegi1/Skivvy",
  },
  {
    title: "Schedulify - CPU Scheduling algorithm's visualizer",
    desc: [
      "Developed an interactive visualization tool explaining CPU scheduling algorithms.",
      "Implemented a dynamic UI using React.js, Tailwind, Framer Motion and modular component architecture.",
      "Implemented algorithm animations and optimized rendering for smooth performance.",
    ],
    img: "/Projects/Schedulify.png",
    bg: "bg-[#0E2744]",
    tech: [
      { Icon: FaReact, name: "React", bg: "#61DBFB" },
      { Icon: SiTailwindcss, name: "Tailwind", bg: "#38BDF8" },
      { Icon: SiExpress, name: "ExpressJS", bg: "#000000" },
      { Icon: SiTypescript, name: "TypeScript", bg: "#3178C6" },
    ],
    link: "https://schedulify-three.vercel.app/",
    git: "https://github.com/AdityaRaghav0112/Schedulify",
  },
  {
    title: "Deploy - browser based 3D game",
    desc: [
      "Built a browser based 3D game inspired by ‘Dispatch’ using Next.js and Three.js.",
      "Developed interactive hero dispatch mechanics with real-time 3D rendering and animations.",
    ],
    img: "/Projects/Deploy.png",
    bg: "bg-yellow-500",
    tech: [
      { Icon: RiNextjsFill, name: "Next.js", bg: "#000000" },
      { Icon: TbBrandThreejs, name: "Three.js", bg: "#111111" },
      { Icon: FaReact, name: "React", bg: "#61DBFB" },
      { Icon: SiTypescript, name: "TypeScript", bg: "#3178C6" },
    ],
    git: "https://github.com/AdityaRaghav0112/Deploy",
  },
];

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
  const containerRef = useRef(null);

  // ================= DESKTOP GSAP =================
  useGSAP(() => {
    if (window.innerWidth < 768) return;

    const panels = gsap.utils.toArray(".panel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10",
        end: `+=${panels.length * 60}%`,
        scrub: 0.5,
        pin: true,
      },
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;

      tl.fromTo(
        panel,
        { yPercent: 100 },
        { yPercent: 0, ease: "none" },
        i - 0.5,
      );
    });
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* SECTION TITLE */}
      <h1
        className="text-center font-anton text-black 
                   text-3xl sm:text-4xl md:text-5xl
                   pt-6 md:pt-10"
      >
        Featured Work
      </h1>

      {/* ================= MOBILE HORIZONTAL SCROLL ================= */}
      <div className="md:hidden relative h-screen">
        {/* Title */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          {/* <h1 className="font-anton text-black text-2xl">Featured Work</h1> */}
        </div>

        {/* Cards */}
        <div
          className="flex gap-4 overflow-x-auto px-4 pt-16
                  h-full snap-x snap-mandatory"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`snap-center shrink-0
                    w-[88vw] h-[70vh]
                    rounded-2xl ${card.bg}
                    text-white overflow-hidden`}
            >
              <div className="h-[40%] relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="h-[60%] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
                    <h2 className="font-anton text-xl leading-tight">
                      {card.title}
                    </h2>
                    <div className="flex gap-2 sm:mt-1.5">
                      {card.link && (
                        <button
                          onClick={() => window.open(card.link)}
                          className="p-2 sm:p-2.5 rounded-full bg-white/10 active:scale-95  hover:scale-110 transition-transform duration-150 flex items-center  px-3 gap-1"
                          aria-label="Live Demo"
                        >
                          <ExternalLink
                            className="text-white hover:text-gray-300 transition-colors  duration-200 w-4 h-4 sm:w-5 sm:h-5 "/>
                          <p className="font-semibold text-sm">Live Demo</p>
                        </button>
                      )}

                      {card.git && (
                        <button
                          onClick={() => window.open(card.git)}
                          className="p-2 sm:p-2.5 rounded-full bg-white/10 active:scale-95  hover:scale-110 transition-transform duration-150 flex items-center gap-1 px-3"
                          aria-label="GitHub Repository"
                        >
                          <Github
                            className="text-white hover:text-gray-300 transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5"/>
                          <p className="font-semibold text-sm">GitHub</p>
                        </button>
                      )}
                    </div>
                  </div>

                  <ul className="list-disc pl-4 mt-3 text-sm text-gray-300 space-y-1">
                    {card.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-anton text-lg">Tech Stack</p>

                  <div className="flex items-center gap-3 mt-2">
                    {card.tech.slice(0, 4).map((techItem, idx) => {
                      const Icon = techItem.Icon;
                      if (!Icon) return null;
                      return (
                        <span
                          key={idx}
                          title={techItem.name}
                          role="img"
                          aria-label={techItem.name}
                          className="inline-flex items-center justify-center rounded-full p-2 transition-transform duration-200 ease-out hover:scale-110 ring-1 ring-white/10"
                          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                        >
                          <Icon
                            style={{ color: techItem.bg }}
                            className="text-[18px]"
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint */}
        <p
          className="absolute bottom-5 left-1/2 -translate-x-1/2
                text-xs text-gray-500"
        >
          Swipe →
        </p>
      </div>

      {/* ================= DESKTOP STACKED CARDS ================= */}
      <div className="hidden md:flex h-screen items-center justify-center px-2">
        <div
          className="relative w-[95%] sm:w-[92%] md:w-[90%] lg:w-[85%] max-w-350 h-[80%]
                     rounded-3xl overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`panel absolute inset-0 ${card.bg}
                          rounded-3xl flex items-center justify-center`}
              style={{ zIndex: i }}
            >
              <div className="h-full w-full flex text-white overflow-hidden">
                {/* TEXT */}
                <div
                  className="w-[55%] p-8 flex flex-col justify-between border-r-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <h2 className="font-anton text-4xl leading-tight">
                        {card.title}
                      </h2>
                      <div className="flex gap-2 mt-1.5">
                        {card.link ? (
                          <button className="p-2 rounded-full bg-white/10 hover:scale-110 duration-150">
                            <ExternalLink
                              onClick={() => window.open(card.link)}
                              className="text-white hover:text-gray-300 transition-colors duration-200 ease-out cursor-pointer"
                            />
                          </button>
                        ) : null}
                        <button
                          onClick={() => window.open(card.git)}
                          className="p-2 rounded-full bg-white/10 hover:scale-110 duration-150"
                        >
                          <Github className="text-white hover:text-gray-300 transition-colors duration-200 ease-out cursor-pointer" />
                        </button>
                      </div>
                    </div>

                    <ul className="list-disc pl-5 mt-4 text-lg text-gray-300 space-y-2">
                      {card.desc.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-anton text-3xl">Tech Stack - </p>

                    <div className="flex items-center gap-3">
                      {card.tech.slice(0, 4).map((techItem, idx) => {
                        const Icon = techItem.Icon;
                        if (!Icon) return null;
                        return (
                          <span
                            key={idx}
                            title={techItem.name}
                            role="img"
                            aria-label={techItem.name}
                            className="inline-flex items-center justify-center rounded-full p-3 transition-transform duration-200 ease-out hover:scale-105 ring-1 ring-white/10"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.06)",
                            }}
                          >
                            <Icon
                              style={{ color: techItem.bg }}
                              className="text-[22px]"
                            />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="w-[45%] relative overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackedCards;
