"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Stripe from "stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const supabase = createClient();

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
  stripePriceId: string;
  userId?: string;
};

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
  stripePriceId,
  userId,
}: PricingCardProps) => {
  const handleCheckout = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const userId = session?.user?.id;
    if (!userId) {
      window.location.href = "/login";
      return;
    }
    const stripe = await stripePromise;
    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: stripePriceId, quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/api/webhook?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/pricing-section`,
    });

    if (error) {
      console.error("Stripe Checkout Error:", error);
    }
  };

  return (
    <Card
      id="pricing"
      className={cn(
        `w-72 flex flex-col justify-between py-1 ${
          popular ? "border-rose-400" : "border-zinc-700"
        } mx-auto sm:mx-0`,
        {
          "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
            exclusive || popular,
        }
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
                {title}
              </CardTitle>
              <div
                className={cn(
                  "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                  {
                    "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ":
                      popular,
                  }
                )}
              >
                Save ${monthlyPrice * 12 - yearlyPrice}
              </div>
            </div>
          ) : (
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
              {title}
            </CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {yearlyPrice && isYearly
                ? "$" + yearlyPrice
                : monthlyPrice
                ? "$" + monthlyPrice
                : "$1887"}
            </h3>
            <span className="flex flex-col justify-end text-sm mb-1">
              {yearlyPrice && isYearly
                ? "/year"
                : monthlyPrice
                // ? "/month"
                ? "One-time"
                : null}
            </span>
          </div>
          <CardDescription className="pt-1.5 h-12">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-2">
          <Button
            onClick={handleCheckout}
            className="relative inline-flex w-full !mt-0 items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
            {actionLabel}
          </Button>
        </CardFooter>
        <CardContent className="flex flex-col gap-2 font-semibold">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
    </Card>
  );
};

export default function PricingPage() {
  const [user, setUser] = useState<User | null>(null);
  const [hasPaid, setHasPaid] = useState<boolean>(false);
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();

  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }
      if (user) {
        console.log("Current user ID:", user.id);
        setUser(user);
        // Fetch the user's profile to check their payment status
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("has_paid")
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError);
        } else {
          setHasPaid(profileData.has_paid);
        }
      } else {
        console.log("No user logged in");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const handleRouteChange = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get("session_id");
      if (sessionId) {
        console.log("Payment successful! Session ID: " + sessionId);

        // Verify the session with Stripe
        const stripeInstance = await stripePromise;
        if (!stripeInstance) {
          console.error("Stripe failed to load");
          return;
        }

        const { paymentIntent } = await stripeInstance.retrievePaymentIntent(
          sessionId
        );

        if (paymentIntent && paymentIntent.status === "succeeded") {
          // Update the user's profile in Supabase
          if (user) {
            const { data, error } = await supabase
              .from("profiles")
              .update({ has_paid: true })
              .eq("id", user.id);

            if (error) {
              console.error("Error updating profile:", error);
            } else {
              console.log("Profile updated successfully");
              setHasPaid(true);
            }
          }

          // Redirect to success page
          router.push("/docs");
        }
      }
    };

    handleRouteChange();
  }, [router, user]);

  const plans = [
    {
      title: "PRO Personal",
      monthlyPrice: 29,
      yearlyPrice: 129,
      description:
        "Beautifully crafted React + Tailwind CSS + Framer Motion templates for your next web project.",
      features: [
        "10+ templates (50 expected)",
        "1 developer license",
        "Commercial Use",
        "Perpetual license",
        "Lifetime access",
        "Lifetime updates",
      ],
      actionLabel: "Get Lifetime Access",
      exclusive: true,
      stripePriceId: "price_1PwRILAPpzV89AesQeCXdfr9", // Replace with actual Stripe Price ID
    },
    {
      title: "PRO Teams",
      monthlyPrice: 249,
      yearlyPrice: 499,
      description:
        "Beautifully crafted React + Tailwind CSS + Framer Motion templates for your next web project.",
      features: [
        "Everything in Personal, plus:",
        "10 developer licenses",
        "Commercial Use",
        "Perpetual license",
        "Lifetime Access",
        "Lifetime Updates",
      ],
      actionLabel: "Get Lifetime Access",
      popular: true,
      stripePriceId: "price_1PwRILAPpzV89AesP5LDHQ7A", // Replace with actual Stripe Price ID
    },
  ];

  return (
    <div
      className="py-14 pb-2 sm:pb-2 lg:pb-20 mb-4 lg:mb-2 px-4"
      id="pricing-plan"
    >
      <div className="text-center">
        <p className="text-xl font-bold tracking-tight text-foreground">
          Easy UI Premium
        </p>
        <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Lifetime Access
        </h2>
        <p className="mt-5 text-xl leading-8 text-foreground/80 w-full px-4 lg:w-[50%] mx-auto">
          Get <b>lifetime access </b> to all components and templates available
          today, plus any new ones we add in the future for a simple one-time
          price.
        </p>
      </div>
      <div className="flex justify-center my-8">
        <span
          className="flex items-center px-6 rounded-md transition duration-300 font-bold bg-transparent cursor-pointer"
          onClick={() => togglePricingPeriod(isYearly ? "0" : "1")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 animate-bounce mr-2 text-current"
          >
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect width="20" height="5" x="2" y="7"></rect>
            <line x1="12" x2="12" y1="22" y2="7"></line>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
          </svg>
          <span className="text-current">
            $30 off for the next{" "}
            <span className="font-normal ml-1">20 customers</span>
          </span>
        </span>
      </div>
      <span className="hidden lg:block md:block text-white mx-auto flex text-center justify-center bg-green-500 py-3 px-1 rounded-lg w-full sm:w-[95%] md:w-full lg:w-1/2 xl:w-1/3">
        Prices will go back to
        <span className="font-bold">&nbsp; $59 &nbsp;</span>after 20 customers
        ✨
      </span>

      <span className="lg:hidden md:hidden text-white mx-auto flex justify-center bg-green-500 py-3 px-1 rounded-lg w-full sm:w-[100%] md:w-full lg:w-1/2 xl:w-1/3">
        Price will change {" "}
        <strong>&nbsp;to $59&nbsp;</strong> after 20 customers        
      </span>
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
            isYearly={isYearly}
            userId={user?.id}
          />
        ))}
      </section>
    </div>
  );
}
