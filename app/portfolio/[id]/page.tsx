"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import ProjectDetailsSection from "@/components/ProjectDetailsSection"

export default function ProjectDetailsPage() {
  const params = useParams()
  const projectId = params.id as string

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "easeInOut",
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="fixed inset-0 z-50 h-full w-full bg-background overflow-y-auto scroll-smooth"
    >
      {/* Section 1: Single image with heading and body text - FIT mode (center-aligned) */}
      <ProjectDetailsSection
        heading="Installation documentation happened too late, slowing payments and quality checks"
        body={[
          "This is the first section demonstrating a single image layout with a large heading and body text. The text is left-aligned in the left column, and the image fits within the block container in the right column.",
        ]}
        images={["image1"]}
        imageLayout="single"
        imageFitMode="fit"
        topAligned={false}
      />

      {/* Section 2: Stack layout with multiple images - FILL mode */}
      <ProjectDetailsSection
        heading="Because no installer app existed, we first had to define what work belonged in the field versus the back office"
        body={[
          "This section demonstrates a stack layout with multiple images using FILL mode. The images fill their containers in the right column block, similar to the Airbnb example.",
          "The text content can span multiple paragraphs, and all text remains left-aligned for consistency.",
        ]}
        images={["image1", "image2", "image3"]}
        imageLayout="stack"
        imageFitMode="fill"
      />

      {/* Section 3: Grid layout (2x2) */}
      <ProjectDetailsSection
        heading="We scoped the initial release to solve the core bottlenecks"
        body={[
          "This section shows a 2x2 grid layout for images. The grid is responsive and will stack on smaller screens.",
          "The images are arranged in a grid pattern, making it easy to showcase multiple related visuals at once.",
        ]}
        images={["image1", "image2", "image3", "image4"]}
        imageLayout="grid"
      />

      {/* Section 4: Horizontal layout */}
      <ProjectDetailsSection
        heading="The solution improved workflow efficiency significantly"
        body={[
          "This section demonstrates a horizontal image layout, useful for showing a sequence or related images side by side.",
        ]}
        images={["image1", "image2"]}
        imageLayout="horizontal"
      />

      {/* Section 5: Highlighted section with lighter grey background */}
      <ProjectDetailsSection
        heading="Results and Impact"
        highlighted
        body={[
          "18% Reduction in documentation time",
          "1000+ projects completed through the app",
          "This highlighted section uses a lighter grey background to stand out from the rest of the page. It maintains the same two-column layout and all functionality.",
          "Documentation is now completed on the same day, with proactive notifications keeping everyone informed.",
        ]}
        images={["image1"]}
        imageLayout="single"
      />

      {/* Section 6: Text-only section (images hidden) */}
      <ProjectDetailsSection
        heading="Additional Information"
        body={[
          "This section demonstrates the ability to hide images completely. When hideImages is true, only the text column is shown, and it can expand to utilize the full width effectively.",
          "This is useful for sections that are purely text-based or when you want to emphasize the content without visual distractions.",
        ]}
        hideImages
      />

      {/* Section 7: Another single image section */}
      <ProjectDetailsSection
        heading="Final Thoughts"
        body={[
          "The template is flexible and reusable across different projects. Each section can be customized with different content, image layouts, and styling options.",
        ]}
        images={["image1"]}
        imageLayout="single"
      />
    </motion.div>
  )
}
