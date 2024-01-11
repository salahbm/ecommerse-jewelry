"use client";
import Features from "@/components/home/Features";
import Link from "next/link";
import React from "react";
import {
  FaUser,
  FaBox,
  FaAddressCard,
  FaRegCreditCard,
  FaRegHeart,
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Contact from "../contact/page";
import ContactUsSection from "@/components/home/contact";
import AboutSection from "@/components/home/About";

const Account = () => {
  return (
    <>
      <section className="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 md:flex md:flex-row md:py-10 ">
        <section className="hidden w-[300px] flex-shrink-0 px-4 md:block">
          <div className="border-b py-5">
            <div className="flex items-center">
              <FaUser width="60px" height="60px" className="rounded-full " />
              <div className="ml-5">
                <p className="font-medium text-gray-500">Hello,</p>
                <p className="font-bold">Sarah Johnson</p>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="w-full">
              <div className="flex w-full">
                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="flex items-center gap-2 font-medium text-violet-900"
                  >
                    <FaAddressCard />
                    Manage account
                  </Link>
                  <Link
                    href="profile-information.html"
                    className="active:blue-900 text-gray-500 duration-100 hover:text-yellow-400"
                  >
                    Profile information
                  </Link>
                  <Link
                    href="manage-address.html"
                    className="text-gray-500 duration-100 hover:text-yellow-400"
                  >
                    Manage Addresses
                  </Link>
                  <Link
                    href="change-password.html"
                    className="text-gray-500 duration-100 hover:text-yellow-400"
                  >
                    Change password
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  href="my-order-history.html"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <FaBox />
                  My Order History
                </Link>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  href="payment-methods.html"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <FaRegCreditCard />
                  Payment Methods
                </Link>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  href="wishlist.html"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <FaRegHeart />
                  My Wishlist
                </Link>
              </div>
            </div>
          </div>

          <div className="flex py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <IoIosLogOut />
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-5 flex items-center justify-between px-5 md:hidden">
          <div className="flex gap-3">
            <div className="py-5">
              <div className="flex items-center">
                <FaUser width="60px" height="60px" className="rounded-full " />
                <div className="ml-5">
                  <p className="font-medium text-gray-500">Hello,</p>
                  <p className="font-bold">Sarah Johnson</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <button className="border bg-amber-500 py-2 px-2 rounded-md">
              Profile settings
            </button>
          </div>
        </div>

        <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 md:grid-cols-3 ">
          <div className="border shadow-md rounded-md  max-h-[60px]">
            <div className="flex justify-between items-center p-4 ">
              <p className="font-bold">Personal Profile</p>
              <Link
                className="text-sm text-violet-900"
                href="profile-information.html"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="border shadow-md rounded-md max-h-[60px]">
            <div className="flex justify-between items-center p-4 ">
              <p className="font-bold">Shipping Address</p>
              <Link
                className="text-sm text-violet-900"
                href="profile-information.html"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="border shadow-md rounded-md max-h-[60px]">
            <div className="flex justify-between items-center p-4 ">
              <p className="font-bold">Billing Address</p>
              <Link
                className="text-sm text-violet-900"
                href="profile-information.html"
              >
                Edit
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Features />
    </>
  );
};

export default Account;

{
  /* 
<body x-data="{ desktopMenuOpen: false, mobileMenuOpen: false}">
        <main className="h-screen flex justify-between flex-col">
          <div>
         
        
         
    
         
            <section
              x-show="mobileMenuOpen"
              @click.outside="mobileMenuOpen = false"
              className="absolute left-0 right-0 z-50 h-screen w-full bg-white"
              style="display: none"
            &gt;
              <div className="mx-auto">
                <div className="mx-auto flex w-full justify-center gap-3 py-4">
                  <Link
                    href="wishlist.html"
                    className="flex cursor-pointer flex-col items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
    
                    <p className="text-xs">Wishlist</p>
                  </Link>
    
                  <Link
                    href="cart.html"
                    className="flex cursor-pointer flex-col items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
    
                    <p className="text-xs">Cart</p>
                  </Link>
    
                  <Link
                    href="account-page.html"
                    className="relative flex cursor-pointer flex-col items-center justify-center"
                  >
                    <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                      ></span>
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full bg-red-500"
                      ></span>
                    </span>
    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
    
                    <p className="text-xs">Account</p>
                  </Link>
                </div>
    
                <form className="my-4 mx-5 flex h-9 items-center border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mx-3 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
    
                  <input
                    className="hidden w-11/12 outline-none md:block"
                    type="search"
                    placeholder="Search"
                  />
    
                  <button
                    type="submit"
                    className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300"
                  >
                    Search
                  </button>
                </form>
                <ul className="text-center font-medium">
                  <li className="py-2"><Link href="index.html">Home</Link></li>
                  <li className="py-2"><Link href="catalog.html">Catalog</Link></li>
                  <li className="py-2"><Link href="about-us.html">About Us</Link></li>
                  <li className="py-2"><Link href="contact-us.html">Contact Us</Link></li>
                </ul>
              </div>
            </section>
         
    
         
         
    
            <nav className="relative bg-violet-900">
              <div
                className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex"
              >
                <button
                  @click="desktopMenuOpen = ! desktopMenuOpen"
                  className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400"
                &gt;
                  <div className="flex justify-around" ref="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="mx-1 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
    
                    All categories
                  </div>
                </button>
    
                <div className="mx-7 flex gap-8">
                  <Link
                    className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="index.html"
                    >Home</Link
                  >
                  <Link
                    className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="catalog.html"
                    >Catalog</Link
                  >
                  <Link
                    className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="about-us.html"
                    >About Us</Link
                  >
                  <Link
                    className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="contact-us.html"
                    >Contact Us</Link
                  >
                </div>
    
                <div className="ml-auto flex gap-4 px-5">
                  <Link
                    className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="login.html"
                    >Login</Link
                  >
    
                  <span className="text-white">&#124;</span>
    
                  <Link
                    className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="sign-up.html"
                    >Sign Up</Link
                  >
                </div>
              </div>
            </nav>
         
    
         
            <section
              x-show="desktopMenuOpen"
              @click.outside="desktopMenuOpen = false"
              className="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white"
              style="display: none"
            &gt;
              <div className="mx-auto flex max-w-[1200px] py-10">
                <div className="w-[300px] border-r">
                  <ul className="px-5">
                    <li
                      className="active:blue-900 flex items-center gap-2 bg-amber-400 py-2 px-3 active:bg-amber-400"
                    >
                      <img
                        width="15px"
                        height="15px"
                        src="./assets/images/bed.svg"
                        alt="Bedroom icon"
                      />
                      Bedroom
                      <span className="ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </li>
    
                    <li
                      className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                    >
                      <img
                        width="15px"
                        height="15px"
                        src="./assets/images/sleep.svg"
                        alt="bedroom icon"
                      />
                      Matrass
                      <span className="ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </li>
    
                    <li
                      className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                    >
                      <img
                        width="15px"
                        height="15px"
                        src="./assets/images/outdoor.svg"
                        alt="bedroom icon"
                      />
                      Outdoor
                      <span className="ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </li>
    
                    <li
                      className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                    >
                      <img
                        width="15px"
                        height="15px"
                        src="./assets/images/sofa.svg"
                        alt="bedroom icon"
                      />
                      Sofa
                      <span className="ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </li>
    
                    <li
                      className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                    >
                      <img
                        width="15px"
                        height="15px"
                        src="./assets/images/kitchen.svg"
                        alt="bedroom icon"
                      />
                      Kitchen
                      <span className="ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </li>
    
                    <li
                      className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                    >
                      <img
                        width="15px"
                        height="15px"
                        src="./assets/images/food.svg"
                        alt="Food icon"
                      />
                      Living room
                      <span className="ml-auto"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </div>
    
                <div className="flex w-full justify-between">
                  <div className="flex gap-6">
                    <div className="mx-5">
                      <p className="font-medium text-gray-500">BEDS</p>
                      <ul className="text-sm leading-8">
                        <li><Link href="product-overview.html">Italian bed</Link></li>
                        <li><Link href="product-overview.html">Queen-size bed</Link></li>
                        <li>
                          <Link href="product-overview.html">Wooden craft bed</Link>
                        </li>
                        <li><Link href="product-overview.html">King-size bed</Link></li>
                      </ul>
                    </div>
    
                    <div className="mx-5">
                      <p className="font-medium text-gray-500">LAMPS</p>
                      <ul className="text-sm leading-8">
                        <li>
                          <Link href="product-overview.html">Italian Purple Lamp</Link>
                        </li>
                        <li><Link href="product-overview.html">APEX Lamp</Link></li>
                        <li><Link href="product-overview.html">PIXAR lamp</Link></li>
                        <li>
                          <Link href="product-overview.html">Ambient Nightlamp</Link>
                        </li>
                      </ul>
                    </div>
    
                    <div className="mx-5">
                      <p className="font-medium text-gray-500">BEDSIDE TABLES</p>
                      <ul className="text-sm leading-8">
                        <li><Link href="product-overview.html">Purple Table</Link></li>
                        <li><Link href="product-overview.html">Easy Bedside</Link></li>
                        <li><Link href="product-overview.html">Soft Table</Link></li>
                        <li><Link href="product-overview.html">Craft Table</Link></li>
                      </ul>
                    </div>
    
                    <div className="mx-5">
                      <p className="font-medium text-gray-500">SPECIAL</p>
                      <ul className="text-sm leading-8">
                        <li><Link href="product-overview.html">Humidifier</Link></li>
                        <li><Link href="product-overview.html">Bed Cleaner</Link></li>
                        <li><Link href="product-overview.html">Vacuum Cleaner</Link></li>
                        <li><Link href="product-overview.html">Pillow</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
         
    
         
    
            <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
              <ul className="flex items-center">
                <li className="cursor-pointer">
                  <Link href="index.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                      />
                      <path
                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-gray-500">&gt;</span>
                </li>
    
                <li className="text-gray-500">Account</li>
              </ul>
            </nav>
         
          </div> */
}
