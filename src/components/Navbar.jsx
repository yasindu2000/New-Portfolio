
import Logo from "../Logo";
import { FaLinkedin, FaGithub, FaMediumM } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 mb-8 lg:mb-20 ">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="flex items-center gap-8 ml-auto text-3xl text-white">
        <a
          href="https://www.linkedin.com/in/yasindu-dahanayaka-6342ba261"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <FaLinkedin className="text-4xl text-blue-500 hover:cursor-pointer" />
        </a>
        <a
          href="https://github.com/yasindu2000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:text-gray-200"
        >
          <FaGithub  />
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
