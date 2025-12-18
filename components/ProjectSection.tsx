"use client"

import { useRouter } from "next/navigation"

interface ProjectSectionProps {
  index: number
  setIsExiting?: (value: boolean) => void
}

export default function ProjectSection({ index, setIsExiting }: ProjectSectionProps) {
  const router = useRouter()

  const handleClick = () => {
    if (setIsExiting) {
      setIsExiting(true)
    }
    // Small delay to allow exit animation to start
    setTimeout(() => {
      router.push(`/portfolio/${index}`)
    }, 100)
  }

  // Airbnb-style layout for first section
  if (index === 1) {
    return (
      <section className="flex h-screen snap-start flex-col p-24">
        {/* Header */}
        <header className="flex w-full items-center justify-between mb-auto">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xl font-bold">
            A
          </div>
          <button className="rounded-full border border-border bg-card px-6 py-2 text-sm font-medium transition-colors hover:bg-accent">
            Get started
          </button>
        </header>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-1 items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="mb-4 text-5xl font-bold leading-tight">
              Get paid to do what you love
            </h1>
            <p className="text-xl text-muted-foreground">
              Create a unique Airbnb Experience for millions of guests.
            </p>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex flex-1 items-center justify-center">
            <div 
              onClick={handleClick}
              className="h-[600px] w-[300px] rounded-[3rem] border-8 border-border bg-card p-4 shadow-2xl cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Phone mockup placeholder */}
              <div className="h-full w-full rounded-[2rem] bg-background">
                {/* Phone content placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default layout for other sections
  return (
    <section className="flex h-screen snap-start items-end justify-end p-24">
      <div className="flex h-full w-full flex-col justify-end mt-[300px] mb-12">
        <div 
          onClick={handleClick}
          className="h-[calc(48vh+150px)] w-full rounded-lg border border-border bg-card cursor-pointer transition-transform hover:scale-[1.02] mt-[150px]"
        >
          {/* Project rectangle */}
        </div>
      </div>
    </section>
  )
}
