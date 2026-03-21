"use client";
import Link from "next/link";
import CustomButton from "./customButton/CustomButton";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Programs",     href: "#services" },
  { label: "How It Works", href: "#howitworks" },
  { label: "Testimonials", href: "#testimonials" },
];

const Topbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => setToggleMenu((prev) => !prev);
  const closeMenu = () => setToggleMenu(false);

  return (
    <div
      className={`
        w-full z-50 transition-all duration-500
        ${scrolled
          ? "fixed top-0 left-0 bg-white shadow-md"
          : "relative bg-transparent"
        }
      `}
    >
      <div
        className={`
          flex justify-between items-center py-4 lg:px-16 md:px-10 px-5
          transition-colors duration-500
          ${scrolled ? "text-[#0a1628]" : "text-white"}
        `}
      >
        {/* Brand + Nav links */}
        <div className="flex gap-12 items-center">
          <a href="#hero" className="flex items-center justify-center">
            <span className="text-xl font-bold tracking-wide">
              Heritage{" "}
              <span className="text-[#9b1c1c]">Coaching</span>
            </span>
          </a>

          <div className="hidden lg:flex gap-8 items-center text-sm">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`hover:text-[#9b1c1c] transition-colors cursor-pointer ${
                  scrolled ? "text-[#0a1628]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA + hamburger */}
        <a href="#testimonials" className="hidden lg:flex">
          <CustomButton text={"Let's Connect"} variant={"blue"} />
        </a>
        {toggleMenu ? (
          <X onClick={openMenu} className="lg:hidden cursor-pointer" />
        ) : (
          <Menu onClick={openMenu} className="lg:hidden cursor-pointer" />
        )}
      </div>

      {/* Mobile menu */}
      {toggleMenu && (
        <div
          className={`
            lg:hidden absolute top-full left-0 w-full flex flex-col gap-4 px-6 py-6 z-50 border-t
            transition-colors duration-500
            ${scrolled
              ? "bg-white text-[#0a1628] border-gray-200"
              : "bg-[#0a1628] text-white border-white/10"
            }
          `}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="hover:text-[#9b1c1c] transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a href="#hero" onClick={closeMenu}>
            <CustomButton text={"Let's Connect"} variant={"blue"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Topbar;

