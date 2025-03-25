"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl text-primary md:text-2xl">Hello, I'm</h2>
          <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">Van Rave Baranggan</h1>
          <p className="text-xl text-muted-foreground md:text-2xl">STEM Maritime Student & A self taught Web Developer</p>
        </div>

        <p className="max-w-xl text-muted-foreground">
          I'm passionate about combining my maritime knowledge with modern web development. Currently focusing on
          improving my HTML, CSS, and JavaScript skills.  (THIS IS A TESTING ONLY :))
        </p>

        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:barangganvanrave@gmail.com" aria-label="Email">
              <MailIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Button variant="ghost" size="icon" asChild>
            <a href="#about" aria-label="Scroll down">
              <ArrowDownIcon className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

