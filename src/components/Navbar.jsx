
import Logo from "../Logo";
import { FaLinkedin, FaGithub, FaMediumM } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-8 md:px-8 lg:mb-20 ">
      <div className="flex-shrink-0 ">
        <Logo />
      </div>
      <div className="flex items-center gap-6 ml-10 text-3xl text-white md:gap-8">
        <a
          href="https://www.linkedin.com/in/yasindu-dahanayaka-6342ba261"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:cursor-pointer hover:text-gray-200"
        >
          <FaLinkedin className="text-3xl text-blue-500 md:text-4xl hover:cursor-pointer" />
        </a>
        <a
          href="https://github.com/yasindu2000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <FaGithub className="text-2.1xl md:text-4xl" />
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
