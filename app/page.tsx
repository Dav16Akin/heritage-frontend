import About from "@/components/about/About";
import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Outcome from "@/components/outcome/Outcome";
import Quote from "@/components/quote/Quote";
import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <About/>
      <Services/>
      <Events/>
      <Outcome/>
      <Quote/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
