import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  },
  {
    title: "Deploy - browser based 3D game",
    desc: [
      "Built a browser based 3D game inspired by ‘Dispatch’ using Next.js and Three.js.",
      "Developed interactive hero dispatch mechanics with real-time 3D rendering and animations.",
    ],
    img: "/Projects/Deploy.png",
    bg: "bg-yellow-500",
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
        start: "top 50",
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
                  <h2 className="font-anton text-xl leading-tight">
                    {card.title}
                  </h2>

                  <ul className="list-disc pl-4 mt-3 text-sm text-gray-300 space-y-1">
                    {card.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="font-anton text-lg">Tech Stack</p>
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
          className="relative w-[95%] sm:w-[92%] md:w-[90%] lg:w-[85%]
                     max-w-[1400px]
                     h-[80%]
                     rounded-3xl overflow-hidden"
        >
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
                  className="w-[55%] p-8 flex flex-col justify-between
                             border-r-4"
                >
                  <div>
                    <h2 className="font-anton text-4xl leading-tight">
                      {card.title}
                    </h2>

                    <ul className="list-disc pl-5 mt-4 text-lg text-gray-300 space-y-2">
                      {card.desc.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-anton text-3xl">Tech Stack</p>
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
