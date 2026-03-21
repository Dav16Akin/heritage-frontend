import { Dot } from "lucide-react";
import CustomButton from "../shared/customButton/CustomButton";
import { Badge } from "../ui/badge";
import AnimateIn from "../shared/AnimateIn";

const Outcome = () => {
  return (
    <section className="md:m-10 lg:m-16 m-5 my-20">
      <div className="border-b border-gray-200 space-y-8 pb-8">
        <AnimateIn variant="fade-up" delay={0}>
          <span className="flex text-[#9b1c1c] font-medium">
            <Dot className="text-[#9b1c1c]" />
            Outcome
          </span>
        </AnimateIn>
        <div className="flex flex-col lg:flex-row justify-between">
          <AnimateIn variant="fade-left" delay={100} duration={700} className="lg:w-[43%]">
            <h3 className="md:text-5xl text-4xl font-semibold text-[#0a1628]">
              What You Can Expect After Working Together
            </h3>
          </AnimateIn>
          <AnimateIn variant="fade-right" delay={250} duration={700} className="lg:w-[40%] space-y-4 lg:p-6 py-6">
            <p className="text-gray-600 leading-relaxed">
              Our clients consistently report sharper decision-making, stronger teams, and a clearer path forward — results that go beyond their LinkedIn profile.
            </p>
            <CustomButton text="See the Approach" variant="blue" />
          </AnimateIn>
        </div>
      </div>
      <AnimateIn variant="fade-up" delay={100} duration={700}>
        <div className="border-b border-gray-200 flex flex-col md:flex-row lg:gap-8 lg:p-8 p-4 justify-between">
          <div className="flex flex-col lg:gap-20 gap-4 py-8 md:w-[45%] justify-between">
            <h4 className="text-3xl font-semibold text-[#0a1628]">01 Clearer Decisions</h4>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 leading-relaxed">
                Gain the clarity and frameworks to make confident decisions, even in complex and high-stakes situations — without second-guessing yourself.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Calm</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Confidence</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Speed</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Clarity</Badge>
              </div>
            </div>
          </div>
          <div className="bg-[#0a1628] w-[40%] rounded-xl hidden md:flex items-center justify-center">
            <span className="text-[#9b1c1c]/40 text-8xl font-bold">01</span>
          </div>
        </div>
      </AnimateIn>
      <AnimateIn variant="fade-up" delay={150} duration={700}>
        <div className="border-b border-gray-200 flex flex-col md:flex-row lg:gap-8 lg:p-8 p-4 justify-between">
          <div className="bg-[#0a1628] w-[40%] rounded-xl hidden md:flex items-center justify-center">
            <span className="text-[#9b1c1c]/40 text-8xl font-bold">02</span>
          </div>
          <div className="flex flex-col lg:gap-20 gap-4 py-8 md:w-[45%] justify-between">
            <h4 className="text-3xl font-semibold text-[#0a1628]">02 Stronger Team Connection</h4>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 leading-relaxed">
                Build deeper trust and alignment within your team, creating an environment where people thrive and perform — because great leaders create more leaders.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Trust</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Alignment</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Communication</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Engagement</Badge>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
      <AnimateIn variant="fade-up" delay={200} duration={700}>
        <div className="border-b border-gray-200 flex flex-col md:flex-row lg:gap-8 lg:p-8 p-4 justify-between">
          <div className="flex flex-col lg:gap-20 gap-4 py-8 md:w-[45%] justify-between">
            <h4 className="text-3xl font-semibold text-[#0a1628]">03 Better Focus &amp; Planning</h4>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 leading-relaxed">
                Establish priorities that matter, plan with intention, and reclaim balance without sacrificing ambition — so you can lead sustainably over the long term.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Priority</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Structure</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Progress</Badge>
                <Badge className="py-2 px-4 border-[#9b1c1c] text-[#9b1c1c]" variant={"outline"}>Balance</Badge>
              </div>
            </div>
          </div>
          <div className="bg-[#0a1628] w-[40%] rounded-xl hidden md:flex items-center justify-center">
            <span className="text-[#9b1c1c]/40 text-8xl font-bold">03</span>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
};

export default Outcome;
