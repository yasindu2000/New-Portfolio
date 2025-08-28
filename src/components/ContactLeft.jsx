import React from 'react';
import contactImg from "../assets/yasindu.png";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="object-cover w-full mb-2 rounded-lg h-45"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col items-center gap-4 text-white">
                <h3 className="text-3xl font-bold text-center text-white">Yasindu Dahanayaka</h3>
                <p className="text-lg font-normal text-gray-200">
                    Full Stack Developer
                </p>
                <p className="flex items-center gap-2 text-base text-gray-200">
                    Mobile No: <span className="text-lightText">+94 77 559 5827</span>
                </p>
            </div>
        </div>
    );
}

export default ContactLeft