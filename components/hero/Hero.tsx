import CustomButton from "../shared/customButton/CustomButton";
import Topbar from "../shared/Topbar";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between h-[98vh] bg-linear-to-b from-black via-black to-blue-700">
      <Topbar />

      <div className="flex gap-4 mx-16 my-8">
        <div className="flex flex-col justify-start gap-8 w-[60%] text-white">
          <h1 className="text-7xl font-semibold">Gain Clarity. Build Stronger Leadership.</h1>
          <p className="text-sm">
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
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
