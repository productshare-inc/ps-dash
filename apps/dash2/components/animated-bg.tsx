"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";

const AnimatedBackground = () => {
  const controls = useAnimation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      controls.start({
        background: `radial-gradient(125% 125% at 50% 10%, ${
          theme === 'dark' ? '#000 40%, #63e 100%' : '#fff 40%, #63e 100%'
        })`,
        filter: `hue-rotate(${scrollProgress * 360}deg)`,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, theme]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 h-full w-full"
      initial={{
        background: `radial-gradient(125% 125% at 50% 10%, ${
          theme === 'dark' ? '#000 40%, #63e 100%' : '#fff 40%, #63e 100%'
        })`,
      }}
      animate={controls}
      transition={{ type: 'tween', ease: 'linear' }}
    />
  );
};

export default AnimatedBackground;