"use client";
import React from "react";
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

  const BillingInfo = () => {
    const form = useForm<z.infer<typeof BillingInfoForm>>({
      resolver: zodResolver(BillingInfoForm),
      defaultValues: {
        cardNumber: "",
        cardHolderName: "",
        expirationDate: "",
        cvv: "",
      },
    });
  
    const onSubmit = async (values: z.infer<typeof BillingInfoForm>) => {
      // Handle submission logic
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
                  <Input placeholder="XXXX-XXXX-XXXX-XXXX" type="text" {...field} />
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
            Submit
          </Button>
        </form>
      </Form>
    );
  };
  
  export default BillingInfo;
  