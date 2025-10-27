"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Home, Upload, BarChart3, Settings, LogOut, ArrowLeft } from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Upload Data", icon: Upload, href: "/dashboard/upload" },
  { label: "Credit Report", icon: BarChart3, href: "/dashboard/report" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    try {
      const saved = localStorage.getItem("credscope_sidebar_collapsed")
      if (saved !== null) setCollapsed(JSON.parse(saved))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("credscope_sidebar_collapsed", JSON.stringify(collapsed))
    } catch (e) {}
  }, [collapsed])

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white border-r border-border flex-shrink-0 flex flex-col h-screen sticky top-0"
    >
      <div className="p-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-primary/10 rounded-md">
            <Logo size={32} />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                key="label"
                initial={{ x: -6, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -6, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="font-semibold text-sm text-primary"
              >
                CredScope
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-muted rounded-md transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {/* Back to Landing Page */}
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative group text-muted-foreground hover:bg-muted hover:text-foreground border border-border mb-4"
        >
          <ArrowLeft size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                key="label"
                initial={{ x: -6, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -6, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="text-sm"
              >
                Back to Home
              </motion.span>
            )}
          </AnimatePresence>
          {collapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Back to Home
            </div>
          )}
        </Link>

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative group ${
                isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    key="label"
                    initial={{ x: -6, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -6, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="text-sm"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted transition-colors text-sm">
          <LogOut size={20} className="flex-shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                key="label"
                initial={{ x: -6, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -6, opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                Sign Out
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  )
}
