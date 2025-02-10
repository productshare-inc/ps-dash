"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const images1: string[] = [
  "https://images.pexels.com/photos/2156/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const images2: string[] = [
  "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const images3: string[] = [
  "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1237110/pexels-photo-1237110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const images4: string[] = [
  "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

interface ColumnProps {
  images: string[];
  y: any;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div 
      className="flex flex-col gap-[3vw] w-1/4 min-w-[300px]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-[450px]">
          <Image 
            src={src}
            alt={`Gallery image ${i + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </motion.div>
  );
};

const ParallaxSection: React.FC = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full">
      <div className="h-[200px]">
      <h1 className='text-xl font-semibold tracking-tight leading-7 mx-auto flex justify-center items-center align-center pt-[10%] dark:text-white text-black transition-shadow duration-300 ease-in-out'>Please scroll to see Parallax 👇🏻</h1>
      </div>
      <div ref={gallery} className="h-[200vh] bg-black relative overflow-hidden">
      
        <div className="relative h-full w-full bg-black">
       
          <div className="absolute h-full w-full bg-[radial-gradient(#1a202c_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="absolute top-[-40%] flex gap-[3vw] p-[3vw] left-1/2 transform -translate-x-1/2">
          <Column images={images1} y={y} />
          <Column images={images2} y={y2} />
          <Column images={images3} y={y3} />
          <Column images={images4} y={y4} />
        </div>
      
      </div>
      <h1 className='text-xl font-semibold tracking-tight leading-7 mx-auto flex justify-center items-center align-center pt-[20%] dark:text-white text-black transition-shadow duration-300 ease-in-out'>Thank You for Scrolling :) </h1>
      {/* <div className="h-[150px]">
     
      </div> */}
    </main>
  );
};

export default ParallaxSection;