import React from 'react';
import contactImg from "../assets/about.jpg";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-45 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4 text-white flex items-center">
                <h3 className="text-3xl font-bold text-white">Kalindu Sudaraka</h3>
                <p className="text-lg font-normal text-gray-200">
                    Full Stack Developer / Tec Blogger
                </p>
                <p className="text-base text-gray-200 flex items-center gap-2">
                    Mobile No: <span className="text-lightText">+94 70 401 2820</span>
                </p>
            </div>
        </div>
    );
}

export default ContactLeft