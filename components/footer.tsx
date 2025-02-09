import { Github, Linkedin, Mail, } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground sm:text-left">
          Built by Syed Rizwan. The source code is available on{" "}
          <Link href="https://github.com/Syedrizwan23" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
            GitHub
          </Link>
          .
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="https://github.com/Syedrizwan23" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/syed-rizwan-ghani/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=syedrizwanghani@gmail.com" 
            target="_blank" 
            rel="noreferrer"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

