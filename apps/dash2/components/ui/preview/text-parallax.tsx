"use client"
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function TextParallax() {
  const container = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollProgress)
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <div className="min-h-screen bg-white overflow-hidden dark:bg-black">
      <div className="fixed top-0 left-0 p-4 bg-white z-50 text-black">
        Scroll Progress: {scrollProgress.toFixed(2)}
      </div>
      <div className="h-screen flex items-center justify-center text-black">
        <h1 className="text-4xl font-bold">Scroll down to see the effect</h1>
      </div>
      <div ref={container} className="min-h-screen">
        <Slide src="https://images.unsplash.com/photo-1727775805114-a87c6bcaf9db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" direction="left" left="-40%" progress={scrollYProgress} />
        <Slide src="https://images.unsplash.com/photo-1727459740748-a0004bd98ed6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" direction="right" left="-25%" progress={scrollYProgress} />
        <Slide src="https://images.unsplash.com/photo-1727659346580-05ba1e71aeb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" direction="left" left="-75%" progress={scrollYProgress} />
      </div>
      <div className="h-screen flex items-center justify-center text-black">
        <h2 className="text-3xl font-semibold">End of parallax effect</h2>
      </div>
    </div>
  )
}

interface SlideProps {
  src: string
  direction: 'left' | 'right'
  left: string
  progress: any
}

const Slide = ({ src, direction, left, progress }: SlideProps) => {
  const translateX = useTransform(progress, [0, 1], [150 * (direction === 'left' ? -1 : 1), -150 * (direction === 'left' ? -1 : 1)])
  
  return (
    <motion.div 
      style={{ x: translateX, left }} 
      className="relative flex whitespace-nowrap my-6"
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  )
}

interface PhraseProps {
  src: string
}

const Phrase = ({ src }: PhraseProps) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[5.5vw] font-serif text-black dark:text-white lg:text-[3.5vw]">Front End Developer</p>
      <span className="relative h-[4.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="UI Design" width={300} height={150} />
      </span>
    </div>
  )
}