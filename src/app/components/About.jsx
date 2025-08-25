// "use client";

import Image from "next/image";
import user_image from "../../../assets/user-image.png";
import { infoList } from "../../../assets/assets";

// this is about page
const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={user_image} alt="user" className="w-full rounded-3xl" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Hi, I’m Nobab Sarkar, a passionate MERN Stack Developer with 2+
            years of experience in building scalable, high-performance web
            applications. I specialize in Next.js, TypeScript, Redux, and
            Mongoose, creating efficient and dynamic web solutions that enhance
            user experience.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 hover:-translate-y-1 duration-500 border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer "
              >
                <Image src={icon} alt="title" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
