"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo size={36} />
          <span className="font-bold text-lg text-primary hidden sm:inline">CredScope AI</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sign In
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
