import ProjectSection from "@/components/ProjectSection"

export default function PortfolioPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* 4 Project Sections */}
      {[1, 2, 3, 4].map((index) => (
        <ProjectSection key={index} index={index} />
      ))}
      
      {/* 5th Section - Skills (placeholder) */}
      <section className="flex h-[532px] snap-start items-center justify-center p-12">
        <div className="h-full w-full rounded-lg border border-border bg-card">
          {/* Skills section - to be designed later */}
        </div>
      </section>
    </div>
  )
}
