import CustomButton from "../shared/customButton/CustomButton";
import Topbar from "../shared/Topbar";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between h-[98vh] bg-linear-to-b from-black via-black to-blue-700">
      <Topbar />

      <div className="flex justify-between items-end gap-8 lg:mx-16 md:mx-10 mx-5 my-8">
        <div className="flex flex-col justify-start gap-8 lg:w-[60%] text-white">
          <h1 className="md:text-7xl text-5xl font-semibold">
            Gain Clarity. Build Stronger Leadership.
          </h1>
          <p className="text-sm  line-clamp-4 md:whitespace-normal md:line-clamp-none">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dolorem et facilis, perspiciatis sequi expedita reiciendis amet
            fugit vitae tenetur id esse ullam nemo beatae debitis voluptates est
            repellat, quae aut sapiente aliquid labore dolore iste! Odio,
            voluptatem recusandae nisi pariatur aliquam voluptates inventore eum
            dolorum? Sint dicta unde consequatur esse et doloribus ex. Totam,
            illum corrupti amet accusantium deleniti quisquam iusto hic alias!
          </p>
          <CustomButton text={"Free Discovery Call"} variant="white" />
        </div>
        <div className="w-[40%] h-[400px] hidden lg:block bg-black"></div>
      </div>
    </section>
  );
};

export default Hero;
