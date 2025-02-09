"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="container flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left pt-8 md:pt-0"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I&apos;m Syed Rizwan
          <br />
          Front-End Developer
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <div className="flex gap-4">
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button size="lg">Contact Me</Button>
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mb-8 md:mb-0"
      >
        <Image
          src="/rizwan.png"
          alt="rizwan"
          fill
          className="object-cover rounded-full border-4 border-primary"
          priority
        />
      </motion.div>
    </section>
  )
}

