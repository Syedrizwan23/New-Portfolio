"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  
  {
    title: "Frontend Developer",
    company: "Xenova Soft",
    period: "Oct,2024 - Present",
    description:
      "Developed and maintained multiple React-based applications, collaborated with UX teams, and implemented modern frontend practices.",
  },
  
]

export function About() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Make sure this matches your PDF file name
    link.download = "Syed-Rizwan-Resume.pdf" // This will be the downloaded file name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-16"
      >
        {/* About Me Section */}
        <div className="space-y-8">
  <div className="text-center space-y-4">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
      Front-end developer skilled in HTML, CSS, JavaScript, React.js and Next.js. I create engaging web applications with a focus on user experience and visual appeal.
    </p>
  </div>
  <div className="mx-auto max-w-[700px] space-y-4">
    <p className="text-muted-foreground md:text-lg/relaxed">
      Expert in Tailwind CSS and Bootstrap, building responsive and accessible interfaces. I combine technical skills with attention to detail to meet client needs.
    </p>
    <p className="text-muted-foreground md:text-lg/relaxed">
      Team player focused on continuous learning, delivering innovative solutions while staying current with industry trends.
    </p>
  </div>
  <div className="flex justify-center">
    <Button onClick={handleDownload} className="gap-2">
      <FileText className="w-4 h-4" />
      Download Resume
    </Button>
  </div>
</div>

        {/* Experience Section */}
        <div className="w-full space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              My professional journey in web development
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 max-w-[900px] mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl">{experience.title}</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p className="font-medium text-primary">{experience.company}</p>
                          <p>{experience.period}</p>
                        </div>
                        <p className="text-muted-foreground">{experience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

