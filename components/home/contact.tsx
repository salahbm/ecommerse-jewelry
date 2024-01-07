import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <div className="relative bg-gray-100 p-8 md:p-16 rounded-md my-4">
      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-row md:space-x-8 relative">
        {/* Video */}
        <div className="md:w-1/2 relative max-h-full">
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
        <div className="md:w-1/2 relative mb-8 text-center flex justify-between flex-col items-center py-8 max-h-full">
          <Image
            src="/logo-white.svg" // Replace with your logo URL
            alt="Logo"
            width={200}
            height={110}
            className=" object-contain"
          />
          <div className="md:w-1/2 flex flex-row items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg shadow-md m-1 md:block hidden"
            >
              <source src="/assets/videos/ring/ring-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg shadow-md m-1 md:block hidden"
            >
              <source src="/assets/videos/ring/ring-4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-gray-600 text-center my-2">
            We'd love to hear from you! Reach out to us with any questions,
            inquiries, or just to say hello. Here's how you can contact us:
          </p>
          <div className="flex flex-col items-center max-h-[65%]">
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
            <button className=" text-neutral-500 py-2 px-4 rounded-md max-w-[120px] hover:text-blue-400 transition duration-300 underline">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-[34px] font-extralight text-amber-700  mb-3 absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          <h2 className="text-2xl font-light mb-2 text-amber-700">
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
          <button className=" text-neutral-500 py-2 px-4 rounded-md max-w-[120px] hover:text-blue-400 transition duration-300 underline">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
