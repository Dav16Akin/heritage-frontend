import Link from "next/link";
import React from "react";
import CustomButton from "./customButton/CustomButton";

const Topbar = () => {
  return (
    <div className="flex text-white justify-between items-center py-4 px-16">
      <div className="flex gap-20">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-2xl">Consulting</span>
        </Link>

        <div className="flex gap-8 items-center justify-center">
          <p>Home</p>
          <p>About</p>
          <p>Programs</p>
          <p>Resourses</p>
          <p>Testimonials</p>
        </div>
      </div>

      <CustomButton text={"Let's Connect"} variant={"blue"}/>
    </div>
  );
};

export default Topbar;
