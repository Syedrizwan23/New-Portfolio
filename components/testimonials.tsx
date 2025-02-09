"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"

const testimonials = [
  {
    quote: "John is an exceptional developer who delivers high-quality work consistently.",
    author: "Sarah Johnson",
    title: "CEO, TechCorp",
  },
  {
    quote: "Working with John was a great experience. He's professional, skilled, and communicates well.",
    author: "Mike Williams",
    title: "CTO, StartupX",
  },
  {
    quote: "John's attention to detail and problem-solving skills are outstanding.",
    author: "Emily Brown",
    title: "Product Manager, InnovateCo",
  },
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Here&apos;s what people are saying about working with me.
          </p>
        </div>
        <div className="relative w-full max-w-[800px]">
          <div className="overflow-hidden px-4 sm:px-8">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-8 sm:p-10">
                  <Quote className="w-10 h-10 mb-4 text-muted-foreground" />
                  <blockquote className="text-xl sm:text-2xl mb-8 italic">{testimonials[current].quote}</blockquote>
                  <div>
                    <cite className="not-italic font-semibold">{testimonials[current].author}</cite>
                    <p className="text-muted-foreground">{testimonials[current].title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="icon" variant="outline" onClick={prev}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={next}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

