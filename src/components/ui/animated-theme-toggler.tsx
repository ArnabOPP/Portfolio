"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    if (!buttonRef.current || !mounted) return

    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark")
      return
    }

    // Capture position BEFORE transition — avoids layout-shift after theme change
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark")
      })
    })

    // .then() instead of await — non-blocking, animation fires the instant screenshots are ready
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 2500,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
          fill: "forwards",
        }
      )
    })
  }, [isDark, setTheme, mounted])

  if (!mounted) return null

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "p-2 md:p-2.5 rounded-full bg-muted/80 hover:bg-muted transition-colors text-foreground",
        className
      )}
      {...props}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
