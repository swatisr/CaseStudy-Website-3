"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ProjectSection from "@/components/ProjectSection"
import FloatingNavbar from "@/components/FloatingNavbar"

export default function PortfolioPage() {
  const pathname = usePathname()
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Reset exit state when returning to this page
    if (pathname === "/portfolio") {
      setIsExiting(false)
    }
  }, [pathname])

  return (
    <>
      <motion.div
        initial={false}
        animate={isExiting ? { scale: 0.95, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        {/* Project Sections - each snaps to viewport */}
        <ProjectSection index={1} setIsExiting={setIsExiting} />
        <ProjectSection index={2} setIsExiting={setIsExiting} />
      </motion.div>
      {/* Floating navbar - fixed position, always visible */}
      <FloatingNavbar />
    </>
  )
}
