import { Dot } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <section className="md:m-10 lg:m-16 m-5 my-20">
      <div className="flex flex-col gap-8">
        <span className="flex">
          <Dot /> Testimonial
        </span>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="md:text-5xl text-4xl font-semibold">Trusted By Leaders</h3>
          </div>
          <div className="flex flex-col md:flex-row lg:justify-between justify-evenly h-[40vh] gap-8">
            <div className="md:w-[50%] lg:w-[40%] h-full bg-black"></div>
            <div className="md:w-[50%] lg:w-[40%] flex flex-col gap-8 justify-between">
              <p className="md:text-2xl text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quam delectus perferendis accusamus, sed facilis fuga rem,
                dolore laboriosam voluptatem at? Quas, nobis dolores.
              </p>

              <div>
                <p>Revion</p>
                <span>Head Of Operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
