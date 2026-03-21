import { Dot } from "lucide-react";
import { Search, Star, Users, Video } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Exploring Suitable Opportunities",
    description:
      "Think of us as your career exploration chauffeur. We harness the power of LinkedIn to identify and connect with relevant professionals, particularly decision-makers in your field. We also engage with appropriate groups and share a compelling synopsis of your profile to attract valuable connections and opportunities.",
  },
  {
    number: "02",
    icon: Star,
    title: "Optimising Your LinkedIn Profile",
    description:
      "We make your LinkedIn profile stand out by incorporating action words in your corporate title, providing a comprehensive description of yourself, strategically using keywords in your biography and homepage description, and linking back to your blogs, articles, and latest posts.",
  },
  {
    number: "03",
    icon: Users,
    title: "Building Meaningful Connections",
    description:
      "Networking is crucial on LinkedIn. We help you expand your network with meaningful connections and guide you in requesting recommendations and skills endorsements to enhance your credibility and professional standing.",
  },
  {
    number: "04",
    icon: Video,
    title: "Showcasing Your Media",
    description:
      "Visual content is increasingly important. We elevate your LinkedIn profile by adding documents, photos, videos, blogs, and presentations — all of which can be provided by you or created by our team to strengthen your personal brand.",
  },
];

const Events = () => {
  return (
    <section id="howitworks" className="bg-[#0a1628] py-20 px-5 md:px-10 lg:px-16 mt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="flex text-[#9b1c1c] font-medium">
            <Dot className="text-[#9b1c1c]" /> How It Works
          </span>
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <h2 className="text-white md:text-5xl text-4xl font-semibold lg:w-[50%]">
              Your LinkedIn Reputation, Managed for You
            </h2>
            <p className="text-white/60 lg:w-[40%] leading-relaxed self-end">
              Our experience in branding for C-suite executives and corporate houses involves managing their online presence for a minimum of three months to establish a strong and recognisable presence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#0a1628] p-8 flex flex-col gap-6 hover:bg-[#111d35] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#9b1c1c] text-4xl font-bold opacity-60">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-full bg-[#9b1c1c]/10 group-hover:bg-[#9b1c1c]/20 transition-colors">
                    <Icon className="text-[#9b1c1c]" size={22} />
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
