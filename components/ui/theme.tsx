// components/theme-toggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sun, Moon, Laptop } from 'lucide-react'

export default function ThemeToggle() {
  const { theme = 'system', setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null          // avoid hydration mismatch

  return (
    <DropdownMenu>
      {/* ── button – only shows ≥ lg ─────────────────────────────── */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          className="
            fixed bottom-4 right-4 z-50
            hidden lg:inline-flex          /* ← THIS is the fix */
            items-center justify-center
            rounded-lg
            border border-black dark:border-white
          "
        >
          {theme === 'dark' ? (
            <Moon className="size-4 text-black dark:text-white" />
          ) : theme === 'light' ? (
            <Sun className="size-4 text-black dark:text-white" />
          ) : (
            <Laptop className="size-4 text-black dark:text-white" />
          )}
        </Button>
      </DropdownMenuTrigger>

      {/* ── dropdown ─────────────────────────────────────────────── */}
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuLabel className="opacity-70">Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 size-4" /> Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 size-4" /> Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 size-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
