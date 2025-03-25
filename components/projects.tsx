"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BotIcon as RobotIcon, WifiIcon, CodeIcon } from "lucide-react"

const projects = [
  {
    title: "SUMO Robot",
    description: "A small robot project I'm planning to build that can compete in SUMO robot competitions.",
    status: "Coming Soon",
    icon: <RobotIcon className="h-10 w-10 text-primary" />,
    tags: ["Robotics", "Arduino", "Electronics"],
  },
  {
    title: "Raspberry Pi WiFi Setup",
    description: "Turning my Raspberry Pi into a second WiFi router to extend network coverage.",
    status: "Coming Soon",
    icon: <WifiIcon className="h-10 w-10 text-primary" />,
    tags: ["Raspberry Pi", "Networking", "Linux"],
  },
  {
    title: "Portfolio Website",
    description: "This portfolio website built with Next.js, featuring responsive design and dark mode.",
    status: "Completed",
    icon: <CodeIcon className="h-10 w-10 text-primary" />,
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A collection of projects I've worked on or am planning to build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-primary/10 transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-md bg-primary/10">{project.icon}</div>
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.status}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled={project.status === "Coming Soon"}>
                    {project.status === "Coming Soon" ? "Coming Soon" : "View Project"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

