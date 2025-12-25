import { Dot } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <section className="m-28">
      <div className="flex flex-col gap-8">
        <span className="flex">
          <Dot /> Testimonial
        </span>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-5xl font-semibold">Trusted By Leaders</h3>
          </div>
          <div className="flex justify-between h-[40vh] gap-8">
            <div className="w-[40%] h-full bg-black"></div>
            <div className="w-[40%] flex flex-col justify-between">
              <p className="text-2xl">
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
