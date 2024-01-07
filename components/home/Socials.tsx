import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <div className="flex justify-center items-center  mt-4 bg-gray-100 rounded-md border p-4 flex-col">
      <p>Find Us on Social Media</p>
      <div className="flex flex-row items-center justify-center space-x-8">
        <Link
          href="https://www.instagram.com/"
          passHref
          className="text-pink-500 hover:text-pink-700 transition duration-300"
        >
          <FaInstagram className="text-4xl" />
        </Link>
        <Link
          href="https://www.facebook.com/"
          passHref
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          <FaFacebook className="text-4xl" />
        </Link>
        <Link
          href="https://twitter.com/"
          passHref
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          <FaTwitter className="text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaSection;
