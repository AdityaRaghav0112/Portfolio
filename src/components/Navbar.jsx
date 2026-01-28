import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Projects", "Skills", "About", "Contact"];

const Navbar = () => {
  const[openResume, setOpenResume] = useState(false);

  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  /* Hide / Show navbar on scroll */
  useEffect(() => {
    if (!navContainerRef.current) return;

    if (lastScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  /* Navbar animation */
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  /* Mobile menu bounce animation */
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      y: isMenuOpen ? 0 : -20,
      opacity: isMenuOpen ? 1 : 0,
      scale: isMenuOpen ? 1 : 0.95,
      duration: 0.4,
      ease: "elastic.out(1, 0.6)",
      pointerEvents: isMenuOpen ? "auto" : "none",
    });
  }, [isMenuOpen]);

  return (
    <>
    <div
      ref={navContainerRef}
      className="fixed inset-x-4 top-4 z-50 h-16 transition-all rounded-lg"
    >
      <nav className="flex h-full items-center justify-between rounded-lg bg-black px-4">
        {/* LEFT */}
        <button onClick={() => setOpenResume(true)} className="relative px-6 py-2 bg-white text-black font-semibold rounded-full overflow-hidden group border-2 border-white">
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-200">
            Resume
          </span>
        </button>

        

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-hover-btn"
            >
              {item}
            </a>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center gap-1"
        >
          <span className={`hamburger ${isMenuOpen && "open"}`} />
          <span className={`hamburger ${isMenuOpen && "open"}`} />
          <span className={`hamburger ${isMenuOpen && "open"}`} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="absolute top-20 left-0 right-0 mx-2 rounded-xl bg-black py-6 opacity-0"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
            className="block px-6 py-3 text-center text-white text-lg"
          >
            {item}
          </a>
        ))}
      </div>
    </div>

    {openResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 "
          onClick={() => setOpenResume(false)} // 👈 click outside closes
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // 👈 prevent close on image click
          >
            <button
              onClick={() => setOpenResume(false)}
              className="absolute -top-10 right-0 text-sm uppercase tracking-wider text-white group"
            >
              <span className="block duration-200 group-hover:hidden">
                Click anywhere to close ✖
              </span>
              <span className="hidden duration-200 group-hover:block opacity-80">
                You still decided to click here 😑
              </span>
            </button>

            <iframe
              src="/Aditya_Fullstack.pdf"
              title="Resume PDF"
              className="w-full h-[80vh] rounded-xl bg-black"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
