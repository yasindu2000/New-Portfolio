import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactLeft from "./ContactLeft";
import toast from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_SECRET_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult();
    }
  };

  return (
    <section id="contact" className="w-full py-8 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center"></div>
      <div className="flex flex-col items-center pb-20 border-b border-neutral-900">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 text-4xl font-bold text-center"
        >
          Contact <span className="text-neutral-500">Me</span>
        </motion.h2>
      </div>

      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full mt-5 py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              
              className="flex flex-col w-full gap-4 py-2 lgl:gap-6 lgl:py-5"
              onSubmit={onSubmit}
            >
              <div className="flex flex-col w-full gap-10 lgl:flex-row">
                <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Your name
                  </p>
                  <input
                    className=
                      
                      "rounded-md outline-none bg-gray-950 focus-visible:ring-1"

                    type="text"
                    name="name"
                  required/>
                </div>
                <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Phone Number
                  </p>
                  <input
                    className=
                      "rounded-md outline-none bg-gray-950 focus-visible:ring-1 "
                    
                    type="text"
                    name="mobile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">
                  Email
                </p>
                <input
                  className=
                    "rounded-md outline-none bg-gray-950 focus-visible:ring-1 "
                 
                  type="email"
                  name="email"
              required />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">
                  Message
                </p>
                <textarea
                  className=
                   "rounded-md outline-none bg-gray-950 focus-visible:ring-1 "
                  
                  cols="30"
                  rows="8"
                  name="message"
                ></textarea>
              </div>

              <div className="w-full">
                <button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-sky-600 border-transparent">
                  {result ? result : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
