"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

export default function DesignSystemButton() {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname === "/design-system") {
      router.back()
    } else {
      router.push("/design-system")
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg"
      aria-label="Toggle design system"
    >
      <Palette className="h-5 w-5" />
    </Button>
  )
}
