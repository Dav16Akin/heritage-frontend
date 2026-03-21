"use client";
import { useEffect, useState } from "react";
import { Dot, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateIn from "../shared/AnimateIn";

const SERVICES = [
  {
    number: "1/4",
    title: "LinkedIn Profile Optimisation",
    description:
      "We make your LinkedIn profile impossible to ignore. From action words in your corporate title to strategic keywords in your biography and homepage description — every element is crafted to attract the right eyes. We also link back to your blogs, articles, and latest posts to showcase the depth of your expertise.",
    tags: ["Keywords", "Biography", "Corporate Title", "Visibility"],
  },
  {
    number: "2/4",
    title: "Career Opportunity Exploration",
    description:
      "Think of us as your career exploration chauffeur. We harness the power of LinkedIn to identify and connect with relevant professionals, particularly decision-makers in your field. We engage with appropriate groups and share a compelling synopsis of your profile to attract valuable connections and opportunities.",
    tags: ["Decision-Makers", "Outreach", "Groups", "Opportunities"],
  },
  {
    number: "3/4",
    title: "Network & Connection Building",
    description:
      "Networking is crucial on LinkedIn. We help you expand your professional network with meaningful connections and guide you in requesting recommendations and skills endorsements. A strong network dramatically enhances your credibility and opens doors that applications alone never will.",
    tags: ["Connections", "Endorsements", "Recommendations", "Credibility"],
  },
  {
    number: "4/4",
    title: "Media & Personal Branding",
    description:
      "Visual content is increasingly important in the digital professional world. We elevate your LinkedIn profile by adding documents, photos, videos, blogs, and presentations — all of which can be provided by you or created by our team — turning your profile into a compelling portfolio.",
    tags: ["Videos", "Blogs", "Documents", "Portfolio"],
  },
];

const AUTO_INTERVAL = 5000; // 5 seconds

export default function Services() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const goTo = (index: number, direction: "next" | "prev" = "next") => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 350);
  };

  const next = () => goTo((active + 1) % SERVICES.length, "next");
  const prev = () => goTo((active - 1 + SERVICES.length) % SERVICES.length, "prev");

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const service = SERVICES[active];

  const slideStyle = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? dir === "next"
        ? "translateX(30px)"
        : "translateX(-30px)"
      : "translateX(0)",
    transition: "opacity 350ms ease, transform 350ms ease",
  };

  return (
    <section id="services" className="md:m-10 lg:m-16 m-5 mt-20 flex lg:flex-row flex-col justify-between gap-8">
      {/* Left: heading */}
      <div className="flex flex-col gap-14 lg:w-[50%]">
        <div className="space-y-4">
          <AnimateIn variant="fade-up" delay={0}>
            <span className="flex text-[#9b1c1c] font-medium">
              <Dot className="text-[#9b1c1c]" /> Services
            </span>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={100} duration={700}>
            <h3 className="md:text-6xl text-4xl font-semibold text-[#0a1628]">
              Services Built Around Your Growth
            </h3>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={200} duration={700}>
            <span className="text-gray-600 leading-relaxed block">
              We tailor every engagement to your career stage and goals, offering focused services that create measurable, lasting impact on your professional brand.
            </span>
          </AnimateIn>
        </div>

        {/* Carousel content */}
        <div className="space-y-6">
          <div style={slideStyle}>
            <div className="border-l-4 border-[#9b1c1c] pl-6 space-y-4">
              <p className="text-[#9b1c1c] font-bold text-sm uppercase tracking-widest">
                {service.number}
              </p>
              <h3 className="text-3xl font-semibold text-[#0a1628]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-[#9b1c1c]/40 text-[#9b1c1c] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#9b1c1c] hover:text-[#9b1c1c] flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? "next" : "prev")}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-[#9b1c1c]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#9b1c1c] hover:text-[#9b1c1c] flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Right: visual panel */}
      <AnimateIn variant="scale-up" delay={200} duration={800} className="lg:w-[40%]">
        <div
          className="h-[50vh] bg-[#0a1628] rounded-xl flex flex-col items-center justify-center gap-4 overflow-hidden relative"
          style={slideStyle}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 70%, #9b1c1c 0%, transparent 60%)",
            }}
          />
          <p className="text-8xl font-bold text-[#9b1c1c]/30 relative z-10">
            {active + 1}
          </p>
          <p className="text-white/50 text-sm uppercase tracking-widest relative z-10 text-center px-8">
            {service.title}
          </p>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <div
              className="h-full bg-[#9b1c1c] transition-none"
              style={{
                animation: `progress-bar ${AUTO_INTERVAL}ms linear infinite`,
              }}
            />
          </div>
        </div>
      </AnimateIn>

      <style jsx>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
