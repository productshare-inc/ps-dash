"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeVariant = {
    dark: { backgroundColor: "#282c34", color: "#ffffff" },
    light: { backgroundColor: "#ffffff", color: "#282c34" },
  };

  const images = [
    { src: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg", title: "Bold New Contemporary Art Showcase", description: "See new media evolve" },
    { src: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg", title: "Exploring the Depths of Nature", description: "A journey through untouched landscapes" },
    { src: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg", title: "Urban Exploration", description: "Discovering the city's hidden gems" },
    { src: "https://images.pexels.com/photos/34950/pexels-photo.jpg", title: "Heart of the Forest", description: "Unveil the secrets veiled by the dense woods" },
    { src: "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg", title: "Majestic Mountain Landscapes", description: "Elevate your senses with breathtaking mountain views" },
    { src: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg", title: "Bold New Contemporary Art Showcase", description: "See new media evolve" },
  ];

  const containerVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const backgroundVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="min-h-screen flex flex-col items-center justify-center min-w-full max-w-full border rounded-lg "
        // style={isDarkMode ? themeVariant.dark : themeVariant.light}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4 items-center">
          <div className="space-y-4 flex-col mx-auto flex justify-center items-center lg:justify-start lg:items-start md:items-start lg:flex-none lg:flex-col">
            <h1 className="text-2xl font-bold ">Inspiring Art Collections</h1>
            <p className="text-lg text-center sm:text-left lg:text-left">
              Dive deep into our special collection that varies from classical nature landscapes to the sparkling stars in the cosmos. Explore now and get inspired.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                whileTap="tap"
                variants={containerVariants}
                onClick={() => setSelectedImage(index)}
                className={`relative h-36 overflow-hidden rounded-xl cursor-pointer shadow-lg dark:shadow-gray-800/50 ${(index < 5) ? "w-[calc(40%-1rem)] sm:w-[calc(50%-1rem)]" : "w-full sm:w-[calc(50%-1rem)]"}`}
                style={{ backgroundImage: `url(${image.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-30 "
                  variants={containerVariants}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 p-4 bg-black bg-opacity-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative w-[90vw] h-[80vh] max-w-[90%] sm:max-w-2xl lg:max-w-4xl max-h-[600px] overflow-hidden rounded-xl cursor-default shadow-xl"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundImage: `url(${images[selectedImage].src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-0 right-0 p-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <X className="text-white" size={22} />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-lg font-medium text-white">{images[selectedImage].title}</h2>
                  <p className="text-sm text-gray-300">{images[selectedImage].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}
