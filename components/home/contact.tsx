import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="relative bg-gray-100 p-8 md:p-16">
      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-row md:space-x-8 relative">
        {/* Video */}
        <div className="md:w-1/2 relative">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg shadow-md"
          >
            <source src="/assets/videos/ring/ring.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 relative">
          <div className="absolute bottom-0 left-0 right-0 mb-8 mx-auto text-center">
            <Image
              src="/assets/images/stone/stone.png" // Replace with your logo URL
              alt="Logo"
              width={64}
              height={64}
              className="w-16 h-16 mx-auto mb-4"
            />

            <p className="text-gray-600 mb-4">
              <FaMapMarkerAlt className="inline-block mr-2" />
              123 Street, City
            </p>
            <p className="text-gray-600 mb-4">
              <FaPhone className="inline-block mr-2" />
              (123) 456-7890
            </p>
            <p className="text-gray-600 mb-4">
              <FaEnvelope className="inline-block mr-2" />
              info@example.com
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-[34px] font-serif text-amber-700 font-bold mb-2 absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Contact Us
      </h2>
      {/* Mobile layout */}
      <div className="md:hidden flex flex-col items-center">
        <div className="w-full mb-8">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg shadow-md"
          >
            <source src="/assets/videos/ring/ring.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-center">
          <img
            src="/assets/images/stone/stone-1.png" // Replace with your logo URL
            alt="Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-amber-700">
            Our Details
          </h2>
          <p className="text-gray-600 mb-4">
            <FaMapMarkerAlt className="inline-block mr-2" />
            123 Street, City
          </p>
          <p className="text-gray-600 mb-4">
            <FaPhone className="inline-block mr-2" />
            (123) 456-7890
          </p>
          <p className="text-gray-600 mb-4">
            <FaEnvelope className="inline-block mr-2" />
            info@example.com
          </p>
          <button className="bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
