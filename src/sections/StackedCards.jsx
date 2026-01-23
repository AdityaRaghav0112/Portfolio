import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// data.js
const cards = [
  {
    title: "Skivvy - A skill sharing platform",
    desc: ["Developed a peer-to-peer skill sharing platform enabeling users to match based on skill preferences", "Implemented a recommendation algorithm improving match accuracy by 30%", "Built a responsive UI using Tailwind and shadcn, achieving a load time under 1.2 seconds"],
    img: "/Projects/Skivvy.png",
    bg: "bg-[#222222]",
  },
  {
    title: "Schedulify - CPU Scheduling algorithm's visualizer",
    desc: ["Developed an interactive visualization tool explaining CPU scheduling algorithms.", "Implemented a dynamic UI using React.js, Tailwind, Framer Motion and modular component architecture.", "Implemented algorithm animations and optimized rendering for smooth performance. "],
    img: "/Projects/Schedulify.png",
    bg: "bg-[#0E2744]",
  },
  {
    title: "Deploy - browser based 3D game",
    desc: ["Built a browser based 3D game inspired by a popular game ‘Dispatch’ using Next.js and Three.js.", "Developed interactive hero dispatch mechanics with real-time 3D rendering and animations."],
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
        scrub: 0.2,
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
    <div
      ref={containerRef}
      className="relative min-h-[100vh] bg-black flex justify-center overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center mt-10">
        <h1 className="absolute text-white top-0 font-anton text-5xl">Featured Work</h1>
        <div className="relative w-[90%] h-[80%] rounded-3xl overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`panel absolute inset-0 rounded-4xl ${card.bg} flex items-center justify-center`}
              style={{ zIndex: i }}
            >
              <div className="min-h-full w-full rounded-4xl flex text-white overflow-hidden max-lg:w-[90%] max-md:flex-col-reverse">
                {/* TEXT */}
                <div className=" border-r-5 border-black w-[55%] p-8 flex flex-col justify-between max-md:w-full max-md:border-r-0 max-md:border-b-4 ">
                  <div>
                    <h1 className="font-anton text-5xl max-sm:text-4xl">
                      {card.title}
                    </h1>

                    <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg max-sm:text-base">
                      {card.desc.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-4xl font-anton max-sm:text-3xl">
                    Tech Stack
                  </p>
                </div>

                {/* IMAGE */}
                <div className="w-[45%] min-h-[60vh] relative overflow-hidden max-md:w-full max-md:min-h-[40vh]">
                  <img
                    src={card.img}
                    alt="Project preview"
                    className="absolute inset-0 w-full h-full object-cover object-right select-none "/>
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
