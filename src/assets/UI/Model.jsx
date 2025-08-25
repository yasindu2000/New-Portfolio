import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { SquareChevronDown } from "lucide-react";

function Model() {
  return (
    <div className="container md:w-3/5 mx-auto font-nav  ">
      <TabGroup className="lg:flex space-y-5 lg:space-y-0 text-[#fff] gap-20">
        <TabList className="flex flex-col gap-10">
          <Tab className=" data-[selected]:bg-[#83dbff40]  data-[selected]:outline-none  p-3  border rounded-md border-customBlue">
          Experiences
          </Tab>
          <Tab className=" data-[selected]:bg-[#83dbff40] data-[selected]:outline-none   p-3 border rounded-md border-customBlue">
          Education 
          </Tab>
          <Tab className=" data-[selected]:bg-[#83dbff40]  data-[selected]:outline-none p-3 border rounded-md border-customBlue">
          Certification
          </Tab>
          <Tab className=" data-[selected]:bg-[#83dbff40]  data-[selected]:outline-none p-3 border rounded-md border-customBlue">
            Soft Skills
          </Tab>
        </TabList>
        <TabPanels className="">
        <TabPanel>
            {" "}
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Experiences</h3>
              <div className="border-l px-2  ">
                <p className="bg-custom-gradient">Dec 2022 - Jul-2023</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  People's Bank Walasmulla
                </p>
                <div className="px-8">
                  <p className="">Trainee Bank Assistant</p>
                  <p className="py-2 text-[#9ca3af] font-bold">
                  As a bank trainer at People's Bank, Walasmulla, I honed my soft skills while delivering effective training sessions and enhancing employee performance. This experience allowed me to develop strong communication, leadership, and problem-solving abilities, which have been invaluable in my professional growth.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Education</h3>
              <div className="border-l px-2  ">
                <p className="bg-custom-gradient">2021 - Present</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  BSc (Hons) in Information Systems Faculty of Computing
                </p>
                <div className="px-8">
                  <p className="">Sabaragamuwa University of Sri Lanka</p>
                  <p className="py-2  text-[#9ca3af] font-bold">
                  I am currently a 3rd-year undergraduate at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. With a strong foundation in computer science, I am dedicated to expanding my knowledge and skills in the field, preparing for the rapidly evolving technological landscape.
                  </p>
                </div>
              </div>
              <div className="border-l px-2  ">
                <p className="bg-custom-gradient">2011 - 2020</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  GCE Advance Level Physical Science Stream
                </p>
                <div className="px-8">
                  <p className="">Rajapaksha Central college Weerakatiya</p>
                  <p className="py-2  text-[#9ca3af] font-bold">
                  I pursued my Advanced Level studies in the Physical Science stream, driven by a deep interest in mathematics and problem-solving. I successfully completed the exams with 3B passes and a C for General English, which further motivated me to explore technology and its growing impact on various industries.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Certification</h3>
              <div className="border-l px-2  ">
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className=" hover:text-customBlue duration-300"
                    href="https://www.coursera.org/account/accomplishments/verify/M6B3QP2677DK"
                  >
                    React Basics By Meta
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className=" hover:text-customBlue duration-300"
                    href="https://www.coursera.org/account/accomplishments/verify/2BZNHYKZ8AMJ"
                  >
                    Advanced React By Meta
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="  hover:text-customBlue duration-300"
                    href="https://www.coursera.org/account/accomplishments/verify/HKLFZJXUX7MH"
                  >
                   HTML, CSS, and Javascript for Web Developers By Johns Hopkins University

                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className=" hover:text-customBlue duration-300"
                    href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                  >
                    Web Design for Beginners By University of Moratuwa
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className=" hover:text-customBlue duration-300"
                    href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                  >
                    Front-End Web Development By University of Moratuwa

                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className=" hover:text-customBlue duration-300"
                    href="https://badgr.com/public/assertions/3FBUNBOcT--ua5-foB-Esw?identity__email=sudarakakalindu20@gmail.com"
                  >
                    Postman API fundamentals Student Expert By Postmana

                  </a>
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-4">Soft Skills</h3>
              <div className="border-l px-2  ">
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Communication
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Leadership
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Project Management
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Team Collaboration
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Critical Thinking 
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Self Learning
                </p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Model;
