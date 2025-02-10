
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { SiteHeader } from "@/components/site-header"

interface EasyHeroProps {
  title: string;
  subtext: string;
}

const EasyHero: React.FC<EasyHeroProps> = ({ title, subtext }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setIsFlipping(false)
      setTheme(theme === "dark" ? "light" : "dark")
    }, 1000) // Wait for flip animation to finish before toggling theme
  }

  const flipVariant = {
    flipped: {
      rotateY: 90,
      scale: [0.4, 0.4, 0.4, 0.4],
      boxShadow: [
        "none",
        "1.8px 50.7px 51.4px -3.2px hsl(0 0% 0% / 0.32)",
        "1.8px 50.7px 51.4px -3.2px hsl(0 0% 0% / 0.32)",
        "none",
      ],
      transition: { duration: 0.8 },
    },
    notFlipped: {
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <motion.div
        className="absolute inset-0 w-full h-full "
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)" // gray-900 for dark mode
              : "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", // light gray for light mode
          backgroundSize: "24px 24px",
        }}
        animate={
          isFlipping ? { opacity: 1, scale: 1.5 } : { opacity: 0.5, scale: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="min-h-[screen] flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white relative before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1px,_transparent_1px)] dark:before:bg-[radial-gradient(#1a202c_1px,_transparent_1px)] before:bg-[length:16px_16px] before:mask-[image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#000_60%,_transparent_100%)] px-2 pt-20 pb-20"
        variants={flipVariant}
        animate={isFlipping ? "flipped" : "notFlipped"}
      >
        <motion.a
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
          className="text-current hover:opacity-80 transition-opacity"
          variants={flipVariant}
          animate={isFlipping ? "flipped" : "notFlipped"}
          transition={{ duration: 1 }}
        >
          <svg
            className="w-12 h-12"
            viewBox="0 0 969 955"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="161.191"
              cy="320.191"
              r="133.191"
              stroke="currentColor"
              strokeWidth="20"
            ></circle>
            <circle
              cx="806.809"
              cy="320.191"
              r="133.191"
              stroke="currentColor"
              strokeWidth="20"
            ></circle>
            <circle
              cx="695.019"
              cy="587.733"
              r="31.4016"
              fill="currentColor"
            ></circle>
            <circle
              cx="272.981"
              cy="587.733"
              r="31.4016"
              fill="currentColor"
            ></circle>
            <path
              d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
              fill="currentColor"
            ></path>
            <rect
              x="310.42"
              y="448.31"
              width="343.468"
              height="51.4986"
              fill="#FF1E1E"
            ></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.a>
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${
              theme === "dark" ? "dark-theme-bg.jpg" : "light-theme-bg.jpg"
            })`,
          }}
        ></div>
        <main className="max-w-2xl justify-center mx-auto text-center mt-0 relative z-10 flex flex-col items-center px-7">
          <header className="mb-0 text-center">
            <h1 className="relative mx-0 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[63.5rem] text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40">
            {title}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-16 h-16 absolute -left-3 lg:-left-0 -top-5 transform rotate-39 fill-current ml-10 lg:ml-0 md:ml-12 hidden lg:block "
            >
              <g>
                <path
                  d="M17.418.016c.036.004.071.005.107.011.979.13 1.738.959 1.738 1.973v9.704a2 2 0 0 1-4 0V6.385c-4.224 4.317-6.945 9.85-7.78 15.943-1.029 7.506.929 14.955 5.508 20.987A28.2 28.2 0 0 0 27.42 53.316c1.111-8.229 5.362-16.031 12.483-21.437 10.258-7.788 18.323-6.538 22.112-3.101 3.889 3.527 4.116 9.518.581 15.262-1.712 2.782-4.223 5.44-7.464 7.9-6.883 5.225-15.387 7.457-23.949 6.285l-.055-.007a28.202 28.202 0 0 0 5.754 16.57c4.579 6.031 11.232 9.919 18.734 10.946 7.503 1.027 14.956-.929 20.987-5.507l.001-.001c2.845-2.159 5.024-4.451 6.476-6.811a2 2 0 0 1 3.406 2.096c-1.712 2.783-4.223 5.441-7.464 7.901l-.004.003c-6.882 5.223-15.385 7.453-23.944 6.281-8.561-1.172-16.153-5.608-21.377-12.49-4.491-5.915-6.659-12.896-6.57-19.798-6.889-1.848-12.939-5.9-17.321-11.673-4.316-5.685-6.59-12.477-6.59-19.492 0-1.478.101-2.967.305-4.456C4.447 15.02 7.419 8.865 12.019 4h-4.46a2 2 0 0 1 0-4h9.704c.053 0 .103.012.155.016zm35.295 48.738c2.845-2.16 5.024-4.451 6.476-6.81 1.283-2.085 1.925-4.122 1.925-5.911 0-1.721-.595-3.212-1.787-4.293-2.864-2.598-9.233-2.577-17.008 3.324-6.339 4.812-10.082 11.791-10.983 19.128 7.31 1.103 15.039-.627 21.377-5.438z"
                  transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                />
              </g>
            </svg>
         
          <p className="mb-4 mx-auto leading-7 tracking-tight max-w-full sm:max-w-xl md:max-w-[27.5rem] lg:max-w-[31.5rem] text-gray-700 dark:text-gray-500">
          {subtext}
          </p>
          </header>
       
        <button
          onClick={toggleTheme}
          className="absolute -top-20 -mt-10 right-2 lg:right-12 mr-0 lg:-mr-20 p-2 rounded-md bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors "
        >
          <div>
            {theme === "dark" ? (
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span className="sr-only">Toggle Theme</span>         
        </button>
        </main>
      </motion.div>
    </>
  )
}
export default EasyHero
