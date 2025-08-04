"use client";

import Image from "next/image";
import profile_img from "../../../assets/profile-img.png";
import hand_icon from "../../../assets/hand-icon.png";
import right_arrow_white from "../../../assets/right-arrow-white.png";
import download_icon from "../../../assets/download-icon.png";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={profile_img}
          alt="profile img"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi ! I'm Nobab Sarkar{" "}
        <Image src={hand_icon} alt="icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[60px]">
        Mern stack developer based in Bangladesh.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am mern stack developer, with 1year+ of learning experience
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          href="#contact"
        >
          Contact me{" "}
          <Image src={right_arrow_white} alt="icon" className="w-4" />
        </a>

        <a
          href="../../../assets/public/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={download_icon} alt="icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
