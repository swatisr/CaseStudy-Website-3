"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()

  const handleEnter = () => {
    router.push("/portfolio")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-foreground">Welcome</h1>
        <Button
          onClick={handleEnter}
          size="lg"
          className="px-8 py-6 text-lg"
        >
          Enter Portfolio
        </Button>
      </div>
    </div>
  )
}
