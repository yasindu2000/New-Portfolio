import React from "react";
import Logo from "../Logo";
import { FaLinkedin, FaGithub, FaMediumM } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className="mb-8 lg:mb-20 flex items-center justify-between py-6 px-8 ">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="ml-auto flex items-center gap-8 text-white text-3xl">
        <a
          href="https://www.linkedin.com/in/kalindu-sudaraka-3b24482a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <FaLinkedin className="text-4xl text-blue-500 hover:cursor-pointer" />
        </a>
        <a
          href="https://github.com/Kalindusu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <FaGithub  />
        </a>
        <a
          href="https://medium.com/@sudarakakalindu20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <FaMediumM  className="text-4xl text-green-600 hover:cursor-pointer"/>
        </a>
        <a
          href="mailto:your-sudarakakalindu20@gmail.com"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <SiGmail className="text-4xl text-red-600 hover:cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
