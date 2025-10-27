"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle size={64} className="mx-auto mb-6 text-primary opacity-50" />
        <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
        <p className="text-lg text-muted-foreground mb-8">Oops! Page not found.</p>
        <div className="flex flex-col gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
