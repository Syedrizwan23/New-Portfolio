"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Eduford",
    description:
      "A modern university landing page with multiple sections, fully responsive for mobile devices.",
    image: "/Eduford.png",
    tags: ["HTML", "CSS", "JavaScript"],

    githubUrl: "https://github.com/Syedrizwan23/University.git",
  },
  {
    title: "Citisum",
    description:
      "A real estate landing page with a clean and professional design.",
    image: "/citisum.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Syedrizwan23/Real-Estate.git",
  },
  {
    title: "Gemini Clone",
    description:
      "An AI-powered content management system inspired by Gemini, built with React.",
    image: "/Gemini.png",
    tags: ["React.js", "CSS"],

    githubUrl: "https://github.com/Syedrizwan23/Gemini.git",
  },
  {
    title: "Home Master",
    description:
      "A home cleaning service website designed with Tailwind CSS for a sleek and responsive layout.",
    image: "/homemaster.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],

    githubUrl: "https://github.com/Syedrizwan23/Home-Cleaning-Master.git",
  },
  {
    title: "Edusity",
    description:
      "A university front-end website built with React.js, fully responsive across all screen sizes.",
    image: "/Edusity.png",
    tags: ["React.js", "CSS"],

    githubUrl: "https://github.com/Syedrizwan23/Edusity.git",
  },
  {
    title: "Music School",
    description:
      "A music school website with multiple sections and pages, built using Next.js and Tailwind CSS.",
    image: "/Music.png",
    tags: ["Next.js", "Tailwind CSS", "Aceternity UI"],

    githubUrl: "https://github.com/Syedrizwan23/Music-next-js.git",
  },
  {
    title: "Sushiman",
    description:
      "A sushi café website featuring multiple pages and sections, built with HTML,CSS and JavaScript.",
    image: "/sushiman.png",
    tags: ["HTML", "CSS", "JavaScript"],

    githubUrl: "https://github.com/Syedrizwan23/ShushiMan.git",
  },
  {
    title: "Prime Energy",
    description:
      "A stylish and engaging website for Prime Energy drinks, featuring multiple pages and sections. Built with HTML, CSS, and JavaScript for a smooth and interactive user experience.",
    image: "/Prime.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Syedrizwan23/Prime-Energy.git",
  },
  {
    title: "Tuyyoo",
    description:
      "A real estate landing page built with React.js and custom CSS, designed to be user-friendly and fully responsive across all screen sizes. The page also includes download buttons for the App Store and Google Play Store.",
    image: "/tuyyoo.png",
    tags: ["React.js", "CSS"],

    githubUrl: "https://github.com/Syedrizwan23/Tuyyoo.git",
  },
];

export function Portfolio() {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="portfolio" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
        <div className="w-full relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-4 py-8"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="group overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <Button size="icon" variant="secondary" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="font-bold text-xl">{project.title}</h3>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            ref={navigationPrevRef}
            size="icon"
            variant="outline"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            ref={navigationNextRef}
            size="icon"
            variant="outline"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
