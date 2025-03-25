"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpenIcon, CodeIcon } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I'm a STEM Maritime Student with a passion for technology and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-primary/10 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <CodeIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Web Development</h3>
              <p className="text-muted-foreground">
                Self-taught web developer focusing on modern frontend technologies and responsive design.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-primary/10 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpenIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Always expanding my knowledge in both maritime studies and programming.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

