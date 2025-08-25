import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { SquareChevronDown } from "lucide-react";

function Model() {
  return (
    <div className="container mx-auto md:w-3/5 font-nav ">
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
              <h3 className="pb-4 text-2xl">Experiences</h3>
              <div className="px-2 border-l ">
                <p className="bg-custom-gradient">Present - Jul-2025</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  Ceylon Edge PVT(LTD)
                </p>
                <div className="px-8">
                  <p className="">FrontEnd Developer</p>
                  <p className="py-2 text-[#9ca3af] font-bold">
                  Front-End Developer specializing in React, creating interactive and user-friendly web applications at Ceylon Edge Pvt Ltd. Passionate about building seamless digital experiences and modern interfaces.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="pb-4 text-2xl">Education</h3>
              <div className="px-2 border-l ">
                <p className="bg-custom-gradient">2021 - Present</p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  BSc (Hons) in Software Engineering Faculty of Computing
                </p>
                <div className="px-8">
                  <p className="">NSBM Green University</p>
                  <p className="py-2  text-[#9ca3af] font-bold">
                  I am currently a 3rd-year undergraduate at the Faculty of Computing, NSBM Green University.I am dedicated to expanding my knowledge and skills in the field, preparing for the rapidly evolving technological landscape.
                  </p>
                </div>
              </div>
              
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="pb-4 text-2xl">Certification</h3>
              <div className="px-2 border-l ">
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="duration-300 hover:text-customBlue"
                    href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-497d7cd9-5a7e-4a60-8aac-c8dd0ce60822.pdf"
                  >
                    UI/UX Design With Figma
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="duration-300 hover:text-customBlue"
                    href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-00cbe6ef-16fa-4ae1-a12b-5d6e8957f8b6.pdf"
                  >
                    OOP With Java
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="duration-300 hover:text-customBlue"
                    href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f634ec89-6a06-4cbe-b11d-baae382e697e.pdf"
                  >
                   React TainwindCSS Firebase

                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="duration-300 hover:text-customBlue"
                    href="https://simpli-web.app.link/e/j0ASJxLSzRb"
                  >
                    Getting Started With NodeJS
                  </a>
                </p>
                <p className="flex gap-2 py-2">
                  <SquareChevronDown className="text-red-600" />
                  <a
                    target="_blank"
                    className="duration-300 hover:text-customBlue"
                    href="https://www.dpitcampus.lk/lms/mod/customcert/view.php?id=1754&downloadown=1"
                  >
                    React JS

                  </a>
                </p>
                
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="pb-4 text-2xl">Soft Skills</h3>
              <div className="px-2 border-l ">
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
