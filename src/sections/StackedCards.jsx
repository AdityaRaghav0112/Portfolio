import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const cards = [
  {
    title: "Skivvy - A skill sharing platform",
    desc: [
      "Developed a peer-to-peer skill sharing platform enabeling users to match based on skill preferences",
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
      "Built a browser based 3D game inspired by a popular game ‘Dispatch’ using Next.js and Three.js.",
      "Developed interactive hero dispatch mechanics with real-time 3D rendering and animations.",
    ],
    img: "/Projects/Deploy.png",
    bg: "bg-yellow-500",
  },
];

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
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
        i - 0.5
      );
    });
  }, []);

  return (
    <div
      id="projects"
      ref={containerRef}
      className="relative min-h-screen bg-white flex justify-center overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center mt-6 md:mt-10 px-2">
        <h1 className="absolute top-2 md:top-4 font-anton text-black 
                       text-3xl sm:text-4xl md:text-5xl z-10">
          Featured Work
        </h1>

        <div className="relative w-[95%] sm:w-[92%] md:w-[90%] lg:w-[85%] max-w-[1400px] 
                        h-[85%] md:h-[80%] rounded-2xl md:rounded-3xl overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`panel absolute inset-0 rounded-4xl ${card.bg} 
                          flex items-center justify-center`}
              style={{ zIndex: i }}
            >
              <div
                className="min-h-full w-full rounded-4xl flex text-white overflow-hidden
                           flex-col md:flex-row"
              >
                {/* TEXT */}
                <div
                  className="border-black w-full md:w-[55%] 
                             p-4 sm:p-6 md:p-8 flex flex-col justify-between
                             md:border-r-4 border-b-4 md:border-b-0
                             order-2 md:order-1"
                >
                  <div>
                    <h1
                      className="font-anton 
                                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                 leading-tight"
                    >
                      {card.title}
                    </h1>

                    <ul
                      className="list-disc pl-4 sm:pl-5 mt-3 sm:mt-4 
                                 text-gray-300 
                                 text-sm sm:text-base md:text-lg
                                 space-y-1 sm:space-y-2"
                    >
                      {card.desc.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p
                    className="font-anton mt-4 md:mt-0
                               text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  >
                    Tech Stack
                  </p>
                </div>

                {/* IMAGE */}
                <div
                  className="w-full md:w-[45%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[60vh] 
                             relative overflow-hidden
                             order-1 md:order-2"
                >
                  <img
                    src={card.img}
                    alt="Project preview"
                    className="absolute inset-0 w-full h-full 
                               object-cover object-center md:object-right select-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
