import { ArrowUpRight, Dot } from "lucide-react";

const About = () => {
  return (
    <section className="md:m-10 lg:m-16 mt-20 flex flex-col md:gap-12">
      <p className="flex p-5 md:p-0">
        <Dot /> About us
      </p>
      <div className="flex gap-8 flex-col p-5 md:p-0 lg:flex-row justify-between">
        <div className="lg:w-[40%]">
          <h2 className="md:text-5xl text-4xl font-semibold">Guiding Leaders, Transforming Teams.</h2>
        </div>
        <div className="lg:w-[40%]">
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
      <div className="h-[70vh] bg-black relative md:rounded-xl">
        <div className="absolute bottom-0 flex flex-col lg:flex-row gap-8 text-white p-8">
          <div>
            <h3 className="md:text-5xl text-3xl font-bold">500+</h3>
            <p className="font-semibold">Leaders Coached</p>
            <span className="text-sm line-clamp-2 md:line-clamp-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis deleniti libero consectetur. Rerum alias officia
              sunt, hic iste facere quam!
            </span>
          </div>
          <div>
            <h3 className="md:text-5xl text-3xl font-bold">10+</h3>
            <p className="font-semibold">Profeessionl experience</p>
            <span className="text-sm line-clamp-2 md:line-clamp-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis deleniti libero consectetur. Rerum alias officia
              sunt, hic iste facere quam!
            </span>
          </div>
          <div>
            <h3 className="md:text-5xl text-3xl font-bold">95%</h3>
            <p className="font-semibold">Clients who return</p>
            <span className="text-sm line-clamp-2 md:line-clamp-none">
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
