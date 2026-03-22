import CustomButton from "../shared/customButton/CustomButton"

const Footer = () => {
  return (
    <section className='min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0a1628] to-[#111d35] flex flex-col text-white'>
      <div className="md:p-32 py-28 px-5 text-center flex flex-col justify-center items-center mx-auto gap-8 md:w-[90%] border-b border-white/10">
        <div className="w-12 h-1 bg-[#9b1c1c] rounded-full mx-auto"/>
        <h1 className="md:text-6xl text-4xl lg:w-[60%] font-semibold leading-tight">Ready To Improve The Way You Lead?</h1>
        <p className="text-white/60 max-w-[500px]">Start your next chapter as a more confident, well-positioned, and connected leader.</p>
        <a href="#hero">
          <CustomButton text="Book a Free Call" variant="white"/>
        </a>
      </div>
      <div className="flex flex-col gap-6 p-8 md:px-16">
        <div className="flex flex-wrap gap-8 justify-evenly py-4">
          <a href="#hero"         className="hover:text-[#9b1c1c] transition-colors cursor-pointer text-sm text-white/70">Home</a>
          <a href="#about"        className="hover:text-[#9b1c1c] transition-colors cursor-pointer text-sm text-white/70">About</a>
          <a href="#services"     className="hover:text-[#9b1c1c] transition-colors cursor-pointer text-sm text-white/70">Services</a>
          <a href="#howitworks"   className="hover:text-[#9b1c1c] transition-colors cursor-pointer text-sm text-white/70">How It Works</a>
          <a href="#testimonials" className="hover:text-[#9b1c1c] transition-colors cursor-pointer text-sm text-white/70">Testimonials</a>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#hero" className="text-xl font-bold">Heritage <span className="text-[#9b1c1c]">Consulting</span></a>
          <p className="text-white/40 text-xs">© 2025 Heritage Consulting. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer