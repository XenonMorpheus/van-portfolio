import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, HeartIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            >
              Van Rave
            </Link>
            <p className="text-sm text-muted-foreground mt-1">STEM Maritime Student & A self taught web developer</p>
          </div>

          <div className="flex gap-4">
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
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} Van Rave Baranggan | Made with <HeartIcon className="h-4 w-4 text-red-500" /> and
            Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

