"use client";

import React from "react";
import {
  BookOpen,
  MapPin,
  Target,
  Clipboard,
  Sun,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

interface BentoBoxProps {
  icon: JSX.Element;
  title: string;
  description?: string;
  image?: string;
  large?: boolean;
}

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 10,
    }}
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const BentoBox: React.FC<BentoBoxProps> = ({
  icon,
  title,
  description,
  image,
  large = false,
}) => (
  <motion.div
    className={`bg-gray-100 dark:bg-gray-900 dark:shadow-xl dark:border dark:border-black p-6 rounded-xl dark:text-gray-200 ${
      large ? "md:col-span-2 md:row-span-2" : ""
    } transition-all duration-300 ease-in-out hover:shadow-lg`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <IconWrapper>{icon}</IconWrapper>
    <h3
      className={`text-xl font-semibold mb-2 text-black dark:text-white ${
        title !== "Company Wiki" && title !== "OKRs" ? "py-2" : ""
      }`}
    >
      {title}
    </h3>
    {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
    {image && (
      <motion.img
        src="https://easy-notes-one.vercel.app/easy-notes-ss.png"
        alt={title}
        className="mt-4 rounded-md"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
    )}
  </motion.div>
);

const Features: React.FC = () => (
  <section className=" border border-gray-200 dark:border-gray-800 rounded-lg p-0 pb-5">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Endless ways to use it</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Customize NoteFlow to work the way you do.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BentoBox
          icon={<BookOpen className="text-red-500 w-6 h-6" />}
          title="Company Wiki"
          description="Give everyone at your company one source of truth for important information, policies, announcements and more."
          image="easy-notes-ss.png"
          large
        />
        <BentoBox
          icon={<MapPin className="text-blue-500 w-6 h-6" />}
          title="Project Roadmap"
        />
        <BentoBox
          icon={<Target className="text-orange-500 w-6 h-6" />}
          title="OKRs"
        />
        <BentoBox
          icon={<Clipboard className="text-yellow-500 w-6 h-6" />}
          title="Meeting Notes"
        />
        <BentoBox
          icon={<Sun className="text-purple-500 w-6 h-6" />}
          title="Vacation Planner"
        />
        <BentoBox
          icon={<Calendar className="text-teal-500 w-6 h-6" />}
          title="Editorial Calendar"
        />
      </div>
    </div>
  </section>
);

export default Features;