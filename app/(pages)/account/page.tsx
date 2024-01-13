"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaUser, FaBox, FaAddressCard, FaRegHeart } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader } from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import PersonalInfo from "@/forms/account/PersonalInfo";
import BillingInfo from "@/forms/account/BillingInfo";
import ShippingInfo from "@/forms/account/Shipping";
import { getUserByEmail } from "@/lib/auth";
import { UserTypes } from "@/types/user";

const Account = () => {
  const { data: session, status: isLoading } = useSession();
  const [user, setUser] = useState<UserTypes>();

  const [editForms, setEditForms] = useState({
    personal: false,
    shipping: false,
    billing: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const getUserFromDB: any | null = await getUserByEmail(
        session?.user?.email || ""
      );
      setUser(getUserFromDB);
    };

    if (isLoading === "authenticated") {
      fetchData();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading === "loading" ? (
        <Loader />
      ) : (
        <section className="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 md:flex md:flex-row md:py-10 h-screen">
          <section className="hidden w-[300px] flex-shrink-0 px-4 md:block">
            <div className="border-b py-5">
              <div className="flex items-center">
                <FaUser width="60px" height="60px" className="rounded-full " />
                <div className="ml-5">
                  <p className="font-medium text-gray-500">Hello,</p>
                  {session?.user && session?.user.email ? (
                    <span className="font-bold"> {user?.username}</span>
                  ) : (
                    <p className="font-bold">Dear User</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex border-b py-5">
              <div className="w-full">
                <div className="flex w-full">
                  <div className="flex flex-col gap-2 justify-start items-center">
                    <div className="flex items-center gap-2 font-medium text-violet-900">
                      <FaAddressCard />
                      <span>Manage account</span>
                    </div>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        setEditForms({
                          ...editForms,
                          personal: true,
                          billing: false,
                          shipping: false,
                        });
                      }}
                      className="active:blue-900 text-gray-500 duration-100 hover:text-amber-500"
                    >
                      Profile information
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        setEditForms({
                          ...editForms,
                          personal: false,
                          shipping: true,
                          billing: false,
                        });
                      }}
                      className="text-gray-500 duration-100 hover:text-amber-500"
                    >
                      Manage Addresses
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        setEditForms({
                          ...editForms,
                          personal: false,
                          shipping: false,
                          billing: true,
                        });
                      }}
                      className="text-gray-500 duration-100 hover:text-amber-500"
                    >
                      Manage Billing
                    </button>
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
                    <MdOutlinePrivacyTip />
                    Privacy Policy
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
                  <button
                    disabled={!session}
                    onClick={() => signOut()}
                    className="flex items-center gap-2 font-medium active:text-violet-900"
                  >
                    <IoIosLogOut />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-5 flex items-center justify-between px-5 md:hidden">
            <div className="flex gap-3">
              <div className="py-5">
                <div className="flex items-center">
                  <FaUser
                    width="60px"
                    height="60px"
                    className="rounded-full "
                  />
                  <div className="ml-5">
                    <p className="font-medium text-gray-500">Hello,</p>
                    {session?.user && session?.user.email ? (
                      <span className="font-bold"> {user?.username}</span>
                    ) : (
                      <p className="font-bold">Dear User</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center">
              {!session ? (
                <Link
                  className="border bg-amber-500 py-2 px-2 rounded-md"
                  href={"/sign-in"}
                >
                  Log In
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger className="border bg-amber-500 py-2 px-2 rounded-md">
                    Profile settings
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel> Manage account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>My Order History</DropdownMenuItem>
                    <DropdownMenuItem>WishList</DropdownMenuItem>

                    <DropdownMenuItem
                      disabled={!session}
                      onClick={() => signOut()}
                    >
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <section className=" md:hidden  grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 md:grid-cols-3 ">
              <div className="border shadow-md rounded-md  max-h-[60px]">
                <div className="flex justify-between items-center px-3 ">
                  <p className="font-bold">Personal Profile</p>
                  <Button
                    className="text-sm text-violet-900"
                    type="button"
                    variant="link"
                    onClick={(event) => {
                      event.preventDefault();
                      setEditForms({
                        ...editForms,
                        personal: true,
                      });
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="border shadow-md rounded-md max-h-[60px]">
                <div className="flex justify-between items-center px-3 ">
                  <p className="font-bold">Shipping Address</p>
                  <Button
                    className="text-sm text-violet-900"
                    type="button"
                    variant="link"
                    onClick={(event) => {
                      event.preventDefault();
                      setEditForms({
                        ...editForms,
                        billing: false,
                        personal: false,
                        shipping: true,
                      });
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="border shadow-md rounded-md max-h-[60px]">
                <div className="flex justify-between items-center px-3 ">
                  <p className="font-bold">Billing Address</p>
                  <Button
                    className="text-sm text-violet-900"
                    type="button"
                    variant="link"
                    onClick={(event) => {
                      event.preventDefault();
                      setEditForms({
                        ...editForms,
                        billing: true,
                        personal: false,
                      });
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </section>
            <div className="px-5 w-full">
              {editForms.personal ? (
                <PersonalInfo userData={user} />
              ) : editForms.billing ? (
                <BillingInfo userData={user} />
              ) : editForms.shipping ? (
                <ShippingInfo userData={user} />
              ) : null}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Account;
