import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { NAV_LINKS, SITE_NAME } from "../../lib/constants"
import { cn } from "../../lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-16">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Real Homes - Home">
          <svg
            viewBox="0 0 48 48"
            className="h-9 w-9 text-primary transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roofGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="windowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>
            </defs>

            <g className="logo-house animate-logo-float">
              <path
                d="M6 28 L24 12 L42 28"
                stroke="url(#roofGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="logo-roof"
              />
              <path
                d="M8 28 L8 40 L40 40 L40 28"
                fill="url(#bodyGradient)"
                stroke="url(#bodyGradient)"
                strokeWidth="1.5"
                className="logo-body"
              />
              <rect
                x="14"
                y="32"
                width="7"
                height="7"
                rx="1.5"
                fill="url(#windowGradient)"
                className="logo-window logo-window-left"
              />
              <rect
                x="27"
                y="32"
                width="7"
                height="7"
                rx="1.5"
                fill="url(#windowGradient)"
                className="logo-window logo-window-right"
              />
              <rect
                x="21"
                y="32"
                width="3.5"
                height="14"
                rx="1"
                fill="#1E3A8A"
                className="logo-door"
              />
            </g>

            <g className="logo-sparkles" aria-hidden="true">
              <circle cx="4" cy="8" r="1.5" fill="#FBBF24" opacity="0.9" className="sparkle-1 animate-sparkle" />
              <circle cx="44" cy="6" r="1" fill="#FBBF24" opacity="0.7" className="sparkle-2 animate-sparkle animation-delay-200" />
              <circle cx="46" cy="42" r="1.2" fill="#FBBF24" opacity="0.8" className="sparkle-3 animate-sparkle animation-delay-400" />
              <circle cx="2" cy="44" r="1" fill="#FBBF24" opacity="0.6" className="sparkle-4 animate-sparkle animation-delay-600" />
            </g>
          </svg>
          <span className="text-xl font-bold text-heading tracking-tight">{SITE_NAME}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-body hover:text-heading hover:bg-muted-surface"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-body hover:text-heading hover:bg-muted-surface transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button className="hidden md:inline-flex" size="sm">
            Get in Touch
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg text-body hover:text-heading hover:bg-muted-surface transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-b border-border bg-background"
          >
            <nav className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-body hover:text-heading hover:bg-muted-surface"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button className="mt-2" size="sm">
                Get in Touch
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
