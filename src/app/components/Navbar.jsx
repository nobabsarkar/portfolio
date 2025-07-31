import logo from "../../../assets/logo.png";
import arrow_icon from "../../../assets/arrow-icon.png";
import header_bg_color from "../../../assets/header-bg-color.png";
import moon_icon from "../../../assets/moon_icon.png";
import menu_black from "../../../assets/menu-black.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]">
        <Image src={header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="*top">
          <Image
            src={logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo image"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 bg-white bg-opacity-50 shadow-sm">
          <li>
            <a className="font-Ovo" href="*top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="*about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="*services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="*work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="*contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact <Image src={arrow_icon} className="w-3" alt="arrow image" />
          </a>

          <button className="block md:hidden ml-3">
            <Image src={menu_black} alt="" className="w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
