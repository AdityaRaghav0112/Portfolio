import React, { useRef, useState } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const BentoTilt = ({ children, className }) => {
  const itemRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * 6;
    const tiltY = (x - 0.5) * 6;

    setTransform(
      `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
    );
  };

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
};

const Projects = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

  return (
    <section className="bg-black">
      <HeroParallax products={products} />

      <div className="w-full h-full">
        <div className="container mx-auto px-3 md:px-10">
        <p className="font-semibold text-4xl font-anton text-white">Some of my recent work</p>

        <BentoTilt className="border relative mb-7 h-96 w-full bg-[#FA8112] overflow-hidden rounded-md md:h-[65vh] mt-10">
          <h1 className="text-5xl font-anton p-2">Skivvy</h1>
          <img
            src="/Projects/Skivvy.png"
            alt="skivvy"
            className="absolute right-0 top-30 rounded-lg shadow-2xl border-2 border-orange-400"
          />
        </BentoTilt>

        {/* IF ADDING THE ADDITIONAL TWO CARDS 
        
        1. h-[135vh]
        2. grid-rows-3 
        3. overflow-hidden can be removed*/}

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 overflow-hidden">
          <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2 bg-[#0C2C55] border">
            <h1 className="font-anton p-2 text-5xl">Schedulify</h1>
            <img src="/Projects/Schedulify2.png" alt="parallax" className="absolute md:left-20 md:top-50 top-30 shadow-2xl rounded-lg"/>
          </BentoTilt>

          <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out border-hsla row-span-1 ms-32 md:col-span-1 md:ms-0 bg-[#005461] border">
            <h1 className="font-anton text-5xl p-2">Parallax</h1>
            <img src="/Projects/Parallax.png" alt="schedulify" className="absolute md:top-25 md:right-12 rounded-lg shadow-2xl bottom-0"/>
          </BentoTilt>

          <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0 border-hsla bg-green-300 border">
            <h1 className="font-anton text-5xl p-2">Deploy</h1>
            <img src="/Projects/Deploy.png" alt="deploy" className="absolute rounded-lg shadow-2xl top-40"/>
          </BentoTilt>
        </div>
      </div>

      </div>
    </section>
  );
};

export default Projects;
