import { ArrowUpRight, Dot } from "lucide-react";

const About = () => {
  return (
    <section className="m-16 flex flex-col gap-12">
      <p className="flex">
        <Dot /> About us
      </p>
      <div className="flex justify-between">
        <div className="w-[40%]">
          <h2 className="text-5xl font-semibold">Guiding Leaders, Transforming Teams.</h2>
        </div>
        <div className="w-[40%]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            accusamus repudiandae nesciunt vel deserunt deleniti ut quis
            mollitia voluptas distinctio, sunt consectetur expedita itaque?
          </p>
          <p className="underline flex">
            About us <ArrowUpRight />
          </p>
        </div>
      </div>
      <div className="h-[70vh] bg-black relative rounded-xl">
        <div className="absolute bottom-0 flex gap-8 text-white p-8">
          <div>
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="font-semibold">Leaders Coached</p>
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis deleniti libero consectetur. Rerum alias officia
              sunt, hic iste facere quam!
            </span>
          </div>
          <div>
            <h3 className="text-5xl font-bold">10+</h3>
            <p className="font-semibold">Profeessionl experience</p>
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis deleniti libero consectetur. Rerum alias officia
              sunt, hic iste facere quam!
            </span>
          </div>
          <div>
            <h3 className="text-5xl font-bold">95%</h3>
            <p className="font-semibold">Clients who return</p>
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis deleniti libero consectetur. Rerum alias officia
              sunt, hic iste facere quam!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
