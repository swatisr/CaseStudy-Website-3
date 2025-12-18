interface ProjectSectionProps {
  index: number
}

export default function ProjectSection({ index }: ProjectSectionProps) {
  return (
    <section className="flex h-[532px] snap-start items-center justify-center p-12">
      <div className="h-full w-full rounded-lg border border-border bg-card">
        {/* Empty rectangle - ready for images, text, and gradients later */}
      </div>
    </section>
  )
}
