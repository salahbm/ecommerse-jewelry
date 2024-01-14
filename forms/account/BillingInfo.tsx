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
import { BillingInfoForm } from "@/lib/validation";
import { UserTypes } from "@/types/user";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { updateBillingInfo } from "@/lib/auth";

const BillingInfo = (userData: UserTypes | any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof BillingInfoForm>>({
    resolver: zodResolver(BillingInfoForm),
    defaultValues: {
      cardNumber: userData.userData?.billingInfo.cardNumber || "",
      cardHolderName: userData.userData?.billingInfo.cardHolderName || "",
      expirationDate: userData.userData?.billingInfo.expirationDate || "",
      cvv: userData.userData?.billingInfo.cvv || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof BillingInfoForm>) => {
    try {
      setIsLoading(true);
      if (!userData?.userData._id) return;
      await updateBillingInfo(userData.userData?._id, values);
      toast.success("Billing Information is Updated!", {
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
          name="cardNumber"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardHolderName"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Card Holder Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Expiration Date</FormLabel>
              <FormControl>
                <Input placeholder="MM/YY" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvv"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input placeholder="XXX" type="text" {...field} />
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

export default BillingInfo;
