"use client";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PersonalInfoForm } from "@/lib/validation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PersonalInfo = () => {
  const router = useRouter();
  const session = useSession();
  const form = useForm<z.infer<typeof PersonalInfoForm>>({
    resolver: zodResolver(PersonalInfoForm),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PersonalInfoForm>) => {
    const res = await signIn("credentials", {
      redirect: false,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
    });
    if (res?.error) {
      alert("Invalid email or password");
    }
    if (res?.url) router.replace("/");
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full mt-4"
      >
        <h2 className="font-bold pt-5 sm:pt-8 text-amber-500 text-lg font-serif">
          Log In Account
        </h2>
        <p className="text-light-3 small-medium md:base-regular text-neutral-600 text-lg font-serif font-semibold">
          Please Sign in to continue your journey
        </p>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }: any) => {
            return (
              <FormItem>
                <FormLabel>Fist Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }: any) => {
            return (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Black" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }: any) => {
            return (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+1 344 3245 5343"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PersonalInfo;
