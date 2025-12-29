"use client"
import Link from "next/link";
import CustomButton from "./customButton/CustomButton";
import { Menu } from "lucide-react";
import { useState } from "react";


const Topbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="flex text-white justify-between items-center py-4 lg:px-16 md:px-10 px-5">
      <div className="flex gap-20">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-2xl">Consulting</span>
        </Link>

        <div className="hidden lg:flex gap-8 items-center justify-center">
          <p>Home</p>
          <p>About</p>
          <p>Programs</p>
          <p>Resourses</p>
          <p>Testimonials</p>
        </div>
      </div>

      <CustomButton className="hidden lg:flex" text={"Let's Connect"} variant={"blue"}/>
      <Menu onClick={openMenu} className="lg:hidden"/>
    </div>
  );
};

export default Topbar;
