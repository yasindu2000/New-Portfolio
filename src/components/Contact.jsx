import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import ContactLeft from './ContactLeft';

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const form = useRef();

    // Email validation
    const emailValidation = () => {
        return String(email)
            .toLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    // Form submit handler
    const handleSend = (e) => {
        e.preventDefault();
        setErrMsg(""); // Clear previous errors

        // Validate form fields
        if (!username) {
            setErrMsg("Username is required!");
            return;
        } else if (!phoneNumber) {
            setErrMsg("Phone number is required!");
            return;
        } else if (!email) {
            setErrMsg("Please give your Email!");
            return;
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
            return;
        } else if (!subject) {
            setErrMsg("Please give your Subject!");
            return;
        } else if (!message) {
            setErrMsg("Message is required!");
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_PUBLIC_KEY
        )
        .then(
            (result) => {
                console.log("Message Sent: ", result.text);
                setSuccessMsg(`Thank you, ${username}! Your message has been sent successfully.`);
                setErrMsg("");

                // Clear form fields after successful submission
                setUsername("");
                setPhoneNumber("");
                setEmail("");
                setSubject("");
                setMessage("");
            },
            (error) => {
                console.log("Send Error: ", error.text);
                setErrMsg("Failed to send the message. Please try again.");
            }
        );
    };

    return (
        <section id="contact" className="w-full py-8 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center"></div>
            <div className="border-b border-neutral-900 pb-20 flex flex-col items-center">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5 }}
                    className="my-4 text-center text-4xl font-bold"
                >
                    Contact <span className="text-neutral-500">Me</span>
                </motion.h2>
            </div>

            <div className="w-full max-w-[1240px] mx-auto">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <ContactLeft />
                    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                        <form
                            ref={form}
                            className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                            onSubmit={handleSend}
                        >
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce successMsg">
                                    {successMsg}
                                </p>
                            )}
                            <div className="w-full flex flex-col lgl:flex-row gap-10">
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        className={`${
                                            errMsg === "Username is required!" && "outline-designColor"
                                        } contactInput`}
                                        type="text"
                                        name="from_name"
                                    />
                                </div>
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        className={`${
                                            errMsg === "Phone number is required!" && "outline-designColor"
                                        } contactInput`}
                                        type="text"
                                        name="user_mobile"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`${
                                        errMsg === "Please give your Email!" && "outline-designColor"
                                    } contactInput`}
                                    type="email"
                                    name="user_email"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                                <input
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    className={`${
                                        errMsg === "Please give your Subject!" && "outline-designColor"
                                    } contactInput`}
                                    type="text"
                                    name="user_subject"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    className={`${
                                        errMsg === "Message is required!" && "outline-designColor"
                                    } contactTextArea`}
                                    cols="30"
                                    rows="8"
                                    name="message"
                                ></textarea>
                            </div>

                            <div className="w-full">
                                <button
                                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                >
                                    Send Message
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
