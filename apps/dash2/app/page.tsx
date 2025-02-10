"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Announcement } from "@/components/announcement";
import AvatarCircles from "@/components/magicui/avatar-circles";
import Showcase from "@/components/showcase";
import ReviewsSection from "@/components/testimonial";
import ShimmerButton from "@/components/magicui/shimmer-button";
import AnimatedBackground from "@/components/animated-bg";

export default function IndexPage() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];
  return (
    <section id="hero" className="py-0 lg:py-20">
      <div className="flex flex-col items-start gap-6 mt-20 lg:mt-10 px-7 text-center md:items-center">
        <Announcement />
        <motion.div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
          <motion.h1
            className="relative mx-0 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[63.5rem] text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40"
            // initial={{ filter: "blur(10px)", opacity: 0 }}
            // animate={{ filter: "blur(0px)", opacity: 1 }}
            // transition={{ duration: 2, delay: 0.5 }}
          >
            {[
              "Beautifully",
              "designed",
              "website",
              "templates",
              "and",
              "sections",
            ].map((word, index) => (
              <motion.span
                // key={word}
                // initial={{ opacity: 0, x: -10 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ delay: index * 0.5 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.p
          className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[57.6rem] text-lg sm:text-lg md:text-xl tracking-tight text-black dark:text-white"
          // initial={{ filter: "blur(10px)", opacity: 0 }}
          //   animate={{ filter: "blur(0px)", opacity: 1 }}
          //   transition={{ duration: 2, delay: 0.5 }}
        >
          50+ beautiful templates built with
          <span className="font-bold text-black dark:text-white"> Next.js</span>
          ,<span className="font-bold text-black dark:text-white"> React</span>,
          <span className="font-bold text-black dark:text-white">
            {" "}
            Typescript
          </span>
          ,
          <span className="font-bold text-black dark:text-white">
            {" "}
            Tailwind CSS
          </span>
          ,
          <span className="text-black dark:text-white">
            {" "}
            <strong>Shadcn/ui</strong> and more
          </span>
          .{" "}
          <span className="text-black dark:text-white">
            Save thousands of hours, create a beautiful landing page, and
            convert your visitors into customers.
          </span>
        </motion.p>
        <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/docs"
              // eslint-disable-next-line tailwindcss/no-contradicting-classname
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "gap-2 whitespace-pre md:flex h-10 lg:h-10",
                "group relative w-full gap-1 rounded-lg text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
              )}
            >
              Browse Templates
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/pricing-section"
              // eslint-disable-next-line tailwindcss/no-contradicting-classname
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "gap-2 whitespace-pre md:flex h-10 lg:h-11",
                "group relative w-full gap-1 rounded-lg text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out  hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
              )}
            >
              Get Easy UI Premium
              {/* <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" /> */}
            </Link>
          </div>
        </div>

        <div className="flex max-w-xl mx-auto flex-row items-center justify-between text-balance p-5 text-left text-base tracking-tight text-black md:text-center md:text-base dark:font-medium dark:text-white">
          <span className="mr-2 font-300 text-gray-600 dark:text-gray-400 text-md">
            Trusted by
          </span>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
        <motion.div
          className="flex flex-col justify-center items-center mx-auto mt-5 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg font-semibold animate-pulse">
            Featured on
          </span>
          <a href="https://sourceforge.net/p/easy-ui/" className="dark:hidden">
            <motion.img
              alt="Download Easy UI"
              src="https://sourceforge.net/sflogo.php?type=17&amp;group_id=3785509"
              width="200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </a>
          <a
            href="https://sourceforge.net/p/easy-ui/"
            className="hidden dark:block"
          >
            <motion.img
              alt="Download Easy UI"
              src="https://sourceforge.net/sflogo.php?type=18&amp;group_id=3785509"
              width="200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </a>
        </motion.div>

        <Showcase />
        <ReviewsSection />
      </div>
    </section>
  );
}
