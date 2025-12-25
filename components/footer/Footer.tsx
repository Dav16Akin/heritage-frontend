import CustomButton from "../shared/customButton/CustomButton"

const Footer = () => {
  return (
    <section className='h-screen bg-linear-to-b from-black via-black to-blue-700 flex flex-col text-white'>
      <div className="p-32 text-center flex flex-col justify-center items-center mx-auto gap-8 w-[90%] border-b">
        <h1 className="text-6xl w-[60%]">Ready To Improve The Way You Lead ?</h1>
        <p>Start your next chapter as a more confident leader</p>
        <CustomButton text="Book a Free Call" variant="white"/>
      </div>
      <div>
        <div className="flex gap-8 justify-evenly p-8">
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Event</p>
          <p>Testimonial</p>
        </div>
      </div>
    </section>
  )
}

export default Footer