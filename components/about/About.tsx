"use client";
import { ArrowUpRight, Dot } from "lucide-react";
import AnimateIn from "../shared/AnimateIn";
import { useInView } from "@/lib/hooks/useInView";
import { useCounter } from "@/lib/hooks/useCounter";

function StatBlock({
  value,
  suffix,
  label,
  description,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const count = useCounter(value, 1800, inView);

  return (
    <AnimateIn variant="fade-up" delay={delay} duration={700}>
      <div ref={ref} className="lg:border-r border-white/20 lg:pr-8 last:border-0 last:pr-0">
        <h3 className="md:text-5xl text-3xl font-bold text-white">
          {count}{suffix}
        </h3>
        <p className="font-semibold text-[#9b1c1c] mt-1">{label}</p>
        <span className="text-sm text-white/70 mt-2 block md:max-w-[220px]">
          {description}
        </span>
      </div>
    </AnimateIn>
  );
}

const About = () => {
  return (
    <section id="about" className="md:m-10 lg:m-16 mt-20 flex flex-col md:gap-12">
      <AnimateIn variant="fade-up" delay={0}>
        <p className="flex p-5 md:p-0 text-[#9b1c1c] font-medium">
          <Dot className="text-[#9b1c1c]" /> About us
        </p>
      </AnimateIn>

      <div className="flex gap-8 flex-col p-5 md:p-0 lg:flex-row justify-between">
        <AnimateIn variant="fade-left" delay={100} duration={700} className="lg:w-[40%]">
          <h2 className="md:text-5xl text-4xl font-semibold text-[#0a1628]">
            Guiding Leaders, Transforming Teams.
          </h2>
        </AnimateIn>
        <AnimateIn variant="fade-right" delay={250} duration={700} className="lg:w-[40%]">
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a career-growth team specialising in LinkedIn Reputation Management. Our approach combines profile optimisation, strategic networking and curated media to turn your online presence into a powerful career asset — trusted by C-suite executives and corporate leaders worldwide.
          </p>
          <p className="underline flex items-center gap-1 text-[#9b1c1c] font-medium cursor-pointer hover:gap-2 transition-all">
            About us <ArrowUpRight size={18} />
          </p>
        </AnimateIn>
      </div>

      <AnimateIn variant="scale-up" delay={100} duration={800}>
        <div className="h-[70vh] bg-[#0a1628] relative md:rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #9b1c1c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #9b1c1c 0%, transparent 50%)",
            }}
          />
          <div className="absolute bottom-0 flex flex-col lg:flex-row gap-8 text-white p-8">
            <StatBlock
              value={500}
              suffix="+"
              label="Leaders Coached"
              description="From emerging managers to seasoned C-suite executives, we've guided hundreds of professionals to stronger careers."
              delay={0}
            />
            <StatBlock
              value={10}
              suffix="+"
              label="Years of Experience"
              description="Over a decade of brand-building and reputation management for individuals and corporate houses."
              delay={150}
            />
            <StatBlock
              value={95}
              suffix="%"
              label="Clients Who Return"
              description="The majority of our clients return for ongoing support — because results speak louder than promises."
              delay={300}
            />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
};

export default About;
