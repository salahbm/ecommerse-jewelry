import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="shadow bg-neutral-800 fixed bottom-0 left-0 w-full max-w-[1440px]  right-0 mx-auto">
      <div className="w-full mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between p-1">
          <Link
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Joni & Co Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Joni & Co
            </span>
          </Link>
          <ul className="flex flex-wrap items-center md:mb-6  mb-1 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="md:my-6 my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Joni & Co™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
