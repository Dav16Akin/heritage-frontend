import { Dot, Quote } from "lucide-react";
import React from "react";
import AnimateIn from "../shared/AnimateIn";

const Testimonial = () => {
  return (
    <section id="testimonials" className="md:m-10 lg:m-16 m-5 my-20">
      <div className="flex flex-col gap-8">
        <AnimateIn variant="fade-up" delay={0}>
          <span className="flex text-[#9b1c1c] font-medium">
            <Dot className="text-[#9b1c1c]" /> Testimonial
          </span>
        </AnimateIn>
        <div className="flex flex-col gap-8">
          <AnimateIn variant="fade-up" delay={100} duration={700}>
            <h3 className="md:text-5xl text-4xl font-semibold text-[#0a1628]">Trusted By Leaders</h3>
          </AnimateIn>
          <div className="flex flex-col md:flex-row lg:justify-between justify-evenly gap-8">
            <AnimateIn variant="fade-left" delay={200} duration={800} className="md:w-[50%] lg:w-[40%]">
              <div className="min-h-[40vh] bg-[#0a1628] rounded-xl flex items-center justify-center">
                <p className="text-[#9b1c1c]/40 text-8xl font-bold">HC</p>
              </div>
            </AnimateIn>
            <AnimateIn variant="fade-right" delay={350} duration={800} className="md:w-[50%] lg:w-[40%] flex flex-col gap-8 justify-between">
              <Quote className="text-[#9b1c1c]" size={36}/>
              <p className="md:text-2xl text-[20px] text-[#0a1628] leading-relaxed">
                &quot;Heritage Consulting completely transformed how I show up on LinkedIn. Within 3 months, I had three interview invitations from senior decision-makers in my industry — something I hadn&apos;t achieved in years of applying traditionally.&quot;
              </p>
              <div className="border-l-4 border-[#9b1c1c] pl-4">
                <p className="font-semibold text-[#0a1628]">Revion Okafor</p>
                <span className="text-gray-500 text-sm">Head of Operations, West Africa</span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
