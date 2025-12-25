import { Dot } from "lucide-react";
import CustomButton from "../shared/customButton/CustomButton";
import { Badge } from "../ui/badge";

const Outcome = () => {
  return (
    <section className="m-16">
      <div className="border-b space-y-8">
        <span className="flex">
          <Dot />
          Outcome
        </span>
        <div className="flex justify-between">
          <h3 className="text-5xl font-semibold w-[43%]">
            What You Can Expect After Working Together
          </h3>
          <div className="w-[40%] space-y-4 p-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              esse, nesciunt in provident dolores cupiditate.
            </p>
            <CustomButton text="See the Approach" variant="blue" />
          </div>
        </div>
      </div>
      <div className="border-b flex gap-8 p-8 justify-between">
        <div className="flex flex-col gap-20 py-8 w-[45%] justify-between">
          <h4 className="text-3xl">01 Clearer Decisions</h4>

          <div className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              velit doloremque perferendis tenetur, itaque laudantium?
            </p>
            <div className="flex gap-2">
              <Badge className="py-2 px-4" variant={"outline"}>
                Calm
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Confidence
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Speed
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Clarity
              </Badge>
            </div>
          </div>
        </div>
        <div className="bg-black w-[40%]"></div>
      </div>
      <div className="border-b flex p-8 justify-between">
        <div className="bg-black w-[40%]"></div>
        <div className="flex flex-col gap-20 py-8 w-[45%] justify-between">
          <h4 className="text-3xl">02 Stronger Team Connection</h4>

          <div className="flex flex-col gap-4">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              velit doloremque perferendis tenetur, itaque laudantium?
            </p>
            <div className="flex gap-2">
              <Badge className="py-2 px-4" variant={"outline"}>
                Trust
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Alignment
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Communication
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Engagement
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-8 gap-8">
        <div className="flex flex-col gap-20 py-8 w-[45%] justify-between">
          <h4 className="text-3xl">03 Better Focus & Planning</h4>

          <div className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              velit doloremque perferendis tenetur, itaque laudantium?
            </p>
            <div className="flex gap-2">
              <Badge className="py-2 px-4" variant={"outline"}>
                Priority
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Structure
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Progress
              </Badge>
              <Badge className="py-2 px-4" variant={"outline"}>
                Balance
              </Badge>
            </div>
          </div>
        </div>
        <div className="bg-black w-[40%]"></div>
      </div>
    </section>
  );
};

export default Outcome;
