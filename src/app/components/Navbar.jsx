import logo from "../../../assets/logo.png";
import arrow_icon from "../../../assets/arrow-icon.png";
import header_bg_color from "../../../assets/header-bg-color.png";
import moon_icon from "../../../assets/moon_icon.png";
import menu_black from "../../../assets/menu-black.png";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <>
      {/* <div className="py-50">
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
              Contact{" "}
              <Image src={arrow_icon} className="w-3" alt="arrow image" />
            </a>

            <button className="block md:hidden ml-3">
              <Image src={menu_black} alt="" className="w-6" />
            </button>
          </div>
        </nav>
      </div> */}

      <div className="navbar bg-base-100 shadow-sm w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#work">My Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <LanguageSwitcher />
            </ul>
          </div>
          <a href="*top" className="btn btn-ghost text-xl">
            Nobab
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <LanguageSwitcher />
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-neutral btn-outline rounded-full">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
