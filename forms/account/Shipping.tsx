'use client'
import React, {useState} from "react";
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
import { ShippingInfoForm } from "@/lib/validation"; // Import the ShippingInfoForm schema
import { ToastContainer, toast } from "react-toastify";
import { UserTypes } from "@/types/user";
import { useRouter } from "next/navigation";
import { updateShippingInfo } from "@/lib/auth";

const ShippingInfo =  (userData: UserTypes | any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof ShippingInfoForm>>({
    resolver: zodResolver(ShippingInfoForm),
    defaultValues: {
      street: userData.userData?.address?.street || "",
      city:userData.userData?.address?.city || "",
      state: userData.userData?.address?.state || "",
      zipCode: userData.userData?.address?.zipCode || "",
      fullAddress: userData.userData?.address?.fullAddress || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ShippingInfoForm>) => {
    try {
      setIsLoading(true);
      if (!userData?.userData._id) return;
      await updateShippingInfo(userData.userData?._id, values);
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
          name="street"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Cityville" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="ST" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="12345" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullAddress"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Full Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main Street,
Apt 4B,
New York, NY 10001,
United States
" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<Button type="submit" className="w-full">
          {isLoading ? "Updating..." : "Update"}
        </Button>

      </form>
      <ToastContainer />
    </Form>
  );
};

export default ShippingInfo;
