import React, { useState, useEffect } from "react";

const SwitchButton = () => {
  const [isSticky, setSticky] = useState(false);
  const [active, setActive] = useState("Essentials");

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8 transition-all sm:${
        isSticky ? "p-1 rounded-full" : ""
      } hidden sm:block`}
      style={{
        backgroundColor: isSticky ? "rgba(255,255,255,.05)" : "transparent",
      }}
    >
      <div className="inline-flex rounded-full bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-[5px] p-1">
        <button
          className={`px-4 py-2 rounded-full ${
            active === "Essentials"
              ? "bg-[#383938] text-white"
              : "bg-transparent text-white opacity-50"
          } font-semibold focus:outline-none`}
          onClick={() => setActive("Essentials")}
        >
          Essentials
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            active === "Alpha Hub"
              ? "bg-[#383938] text-white"
              : "bg-transparent text-white opacity-50"
          } font-semibold focus:outline-none`}
          onClick={() => setActive("Alpha Hub")}
        >
          Alpha Hub
        </button>
      </div>
    </div>
  );
};

export default SwitchButton;
