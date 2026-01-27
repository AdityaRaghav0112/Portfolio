import React, { useState } from "react";

const Contact = () => {
  const [openResume, setOpenResume] = useState(false);

  return (
    <>
      {/* MAIN SECTION */}
      <div
        id="contact"
        className="w-full min-h-[70vh] flex justify-center items-center p-4 bg-black text-white"
      >
        <div className="w-full max-w-[90%] min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#222222] p-5 rounded-2xl">
          {/* COLUMN 1 */}
          <div className="border-b md:border-b-0 md:border-r border-black pr-4">
            <h1 className="font-inter uppercase text-sm text-gray-400">
              Scroll back to a section
            </h1>
            <ul className="list-disc px-5 mt-5 space-y-2">
              {["Projects", "Skills", "About"].map((item) => (
                <li key={item}>
                  <button className="hover:underline transition">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="border-b md:border-b-0 lg:border-r border-black pr-4 flex flex-col gap-10">
            <div>
              <h1 className="font-inter uppercase text-sm text-gray-400">
                Contact
              </h1>
              <ul className="list-disc px-5 mt-5 space-y-2">
                {["Email", "LinkedIn", "GitHub"].map((item) => (
                  <li key={item}>
                    <button className="hover:underline transition">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="font-inter uppercase text-sm text-gray-400">
                Socials
              </h1>
              <ul className="list-disc px-5 mt-5 space-y-2">
                {["Email", "LinkedIn", "GitHub"].map((item) => (
                  <li key={item}>
                    <button className="hover:underline transition">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 3 — RESUME */}
          <div className="border-b lg:border-b-0 lg:border-r border-black pr-4">
            <h1 className="font-inter uppercase text-sm text-gray-400 mb-3">
              Resume
            </h1>

            <button
              onClick={() => setOpenResume(true)}
              className="relative group w-full max-w-[220px]"
            >
              <img
                src="/Resume.png"
                alt="Resume"
                className="rounded-lg w-full object-cover"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                <span className="uppercase tracking-widest text-sm">View</span>
              </div>
            </button>
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col justify-between">
            <img
              src="/Projects/Parallax.png"
              alt=""
              className="rounded-lg object-cover"
            />

            <h1 className="font-bold text-3xl md:text-4xl pt-10">
              Glad you scrolled this far 🫠
            </h1>
          </div>
        </div>
      </div>

      {/* FULLSCREEN RESUME MODAL */}
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

export default Contact;
