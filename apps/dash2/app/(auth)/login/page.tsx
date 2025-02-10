"use client";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { JSX, SVGProps, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Updated import path based on provided context

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { Spinner } from "@radix-ui/themes"; // Import the Spinner component from Radix UI

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [clicked, setClicked] = useState(false);

  const supabase = createClient();

  const onSubmit = async (data: any) => {
    const { email } = data;

    // Adjusted to enable user sign-ups with Magic Link
    const { data: signInData, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true, // Changed to true to allow user sign-ups
        emailRedirectTo: "https://easyui.pro/templates", // Redirect URL after email verificationtes
      },
    });

    if (error) {
      console.error("Error during sign in:", error.message);
    } else {
      console.log(
        "Sign in successful, check your email for the login link:",
        signInData
      );
    }
  };
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "https://easyui.pro/templates",
        },
      });

      if (error) {
        console.error("Error during Google sign in:", error.message);
      } else {
        console.log("Google sign in initiated:", data);
      }
    } catch (error) {
      console.error("Unexpected error during Google sign in:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-20">
      <div className="flex items-center justify-center pb-20">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Image
              src="/logo.png"
              width="40"
              height="40"
              alt={"Easy UI Logo"}
              className="mx-auto"
            />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-balance text-muted-foreground text-sm">
              Login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="naruto@easyui.pro" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                onClick={() => form.getValues("email") && setClicked(true)}
                className={`w-full rounded-lg h-9 text-sm inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                  clicked && form.getValues("email")
                    ? "scale-95 bg-green-500 text-white flex items-center gap-2"
                    : "hover:scale-105"
                }`}
              >
                {clicked && form.getValues("email") ? (
                  <>
                    <CheckIcon className="h-5 w-5" />
                    Magic Link Sent, please check email
                  </>
                ) : (
                  "Sign In with Email"
                )}
              </Button>
            </form>
          </Form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full mt-2 rounded-lg"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
              <Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            )}
            Sign in with Google
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            <Link href="/register" className="underline">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
