
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{ rotate: isDark ? 90 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <Switch
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
      />
      <Moon 
        className="h-[1.2rem] w-[1.2rem]" 
        fill={isDark ? "currentColor" : "none"}
      />
    </div>
  )
}
