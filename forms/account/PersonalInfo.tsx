"use client";
import React, { useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import { UserTypes } from "@/types/user";
import { updatePersonalInfo } from "@/lib/auth";
import { useRouter } from "next/navigation";

const PersonalInfo = (userData: UserTypes | any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof PersonalInfoForm>>({
    resolver: zodResolver(PersonalInfoForm),
    defaultValues: {
      firstName: userData.userData?.personalInfo?.firstName || "",
      lastName: userData.userData?.personalInfo?.lastName || "",
      phoneNumber: userData.userData?.personalInfo?.phoneNumber || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PersonalInfoForm>) => {
    try {
      setIsLoading(true);
      if (!userData?.userData._id) return;
      await updatePersonalInfo(userData.userData?._id, values);
      toast.success("Information is Updated!", {
        position: toast.POSITION.TOP_CENTER,
      });
      router.refresh();
    } catch (error: any) {
      console.log(`There is error updating the User data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full mt-4"
      >
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
                  <Input placeholder="Wick" type="text" {...field} />
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
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
};

export default PersonalInfo;
