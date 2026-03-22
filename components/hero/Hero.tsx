import CustomButton from "../shared/customButton/CustomButton";
import Topbar from "../shared/Topbar";
import AnimateIn from "../shared/AnimateIn";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col justify-between lg:h-[98vh] h-[85vh] bg-gradient-to-b from-[#0a1628] via-[#0a1628] to-[#111d35]">
      <Topbar />

      <div className="flex justify-between items-end gap-8 lg:mx-16 md:mx-10 mx-5 my-8">
        <div className="flex flex-col justify-start gap-8 lg:w-[60%] text-white">
          <AnimateIn variant="fade-up" delay={0} duration={600}>
            <div className="w-16 h-1 bg-[#9b1c1c] rounded-full" />
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} duration={700}>
            <h1 className="md:text-7xl text-5xl font-semibold leading-tight">
              Position Yourself. Own Your Career.
            </h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300} duration={700}>
            <p className="text-sm md:text-base text-white/80 md:whitespace-normal line-clamp-4 md:line-clamp-none">
              Your LinkedIn profile is your digital introduction to the professional world — and a well-crafted presence can open doors to exciting career opportunities. At Heritage Consulting, we position you as a Subject Matter Expert and connect you with the decision-makers who matter most.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={450} duration={700}>
            <CustomButton text={"Free Discovery Call"} variant="white" />
          </AnimateIn>
        </div>
        <AnimateIn variant="scale-up" delay={600} duration={800} className="w-[40%]">
          <div className="h-[400px] hidden lg:flex bg-[#9b1c1c]/10 border border-[#9b1c1c]/30 rounded-xl items-center justify-center">
            <div className="text-center text-white/40 space-y-2 p-8">
              <p className="text-5xl font-bold text-[#9b1c1c]">HC</p>
              <p className="text-sm uppercase tracking-widest">Heritage Consulting</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero;
