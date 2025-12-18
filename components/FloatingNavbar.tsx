"use client"

import Link from "next/link"

export default function FloatingNavbar() {
  return (
    <nav className="fixed bottom-[22px] left-0 right-0 z-50 flex w-full items-center justify-between px-24 py-6">
      <div className="text-xs font-medium uppercase tracking-[20%] text-foreground">
        PRODUCT DESIGNER
      </div>
      <div className="flex items-center gap-12">
        <Link
          href="/portfolio"
          className="text-xs font-medium uppercase tracking-[20%] text-foreground transition-colors hover:text-foreground/80"
        >
          WORK
        </Link>
        <Link
          href="/about"
          className="text-xs font-medium uppercase tracking-[20%] text-foreground transition-colors hover:text-foreground/80"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="text-xs font-medium uppercase tracking-[20%] text-foreground transition-colors hover:text-foreground/80"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  )
}
