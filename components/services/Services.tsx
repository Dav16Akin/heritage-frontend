import { Dot } from "lucide-react";

const Services = () => {
  return (
    <section className="md:m-10 lg:m-16 m-5 mt-20 flex lg:flex-row flex-col justify-between gap-8">
      <div className="flex flex-col gap-14 lg:w-[50%]">
        <div className="space-y-4">
          <span className="flex">
            <Dot /> Services
          </span>
          <h3 className="md:text-6xl text-4xl font-semibold">
            Services Built Around Your Growth
          </h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            quis? Quibusdam labore nobis perferendis ipsam mollitia, quas omnis
            repellat iste.
          </span>
        </div>
        <div className="space-y-4">
          <p>1/4</p>
          <h3 className="text-3xl">One-To-One Coaching</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            obcaecati officiis exercitationem animi alias perferendis. Nemo
            dignissimos dolores iste a nostrum suscipit ipsa quod.
          </span>
        </div>
      </div>
      <div className="lg:w-[40%] h-[50vh] bg-black"></div>
    </section>
  );
};

export default Services;
