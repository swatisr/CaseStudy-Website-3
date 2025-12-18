"use client"

import { ReactNode, useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

type ImageLayout = "single" | "stack" | "grid" | "horizontal"
type ImageFitMode = "fill" | "fit"

interface ProjectDetailsSectionProps {
  heading?: string
  body?: string | string[]
  children?: ReactNode
  highlighted?: boolean
  hideImages?: boolean
  images?: string | string[]
  imageLayout?: ImageLayout
  imageAlt?: string | string[]
  imageFitMode?: ImageFitMode
  topAligned?: boolean
  sectionId?: string
}

export default function ProjectDetailsSection({
  heading,
  body,
  children,
  highlighted = false,
  hideImages = false,
  images,
  imageLayout = "single",
  imageAlt,
  imageFitMode = "fit",
  topAligned = true,
  sectionId,
}: ProjectDetailsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    margin: "-30% 0px -30% 0px",
    once: false,
    amount: 0.3
  })
  // Handle body as string or array of strings
  const bodyTexts = Array.isArray(body) ? body : body ? [body] : []
  
  // Handle images as string or array of strings
  const imageArray = images
    ? Array.isArray(images)
      ? images
      : [images]
    : []

  // Handle alt text as string or array of strings
  const altTexts = imageAlt
    ? Array.isArray(imageAlt)
      ? imageAlt
      : [imageAlt]
    : []

  // Check if section has any content
  const hasContent = heading || bodyTexts.length > 0 || children
  if (!hasContent && hideImages) {
    return null // Don't render empty sections
  }

  // Render single image
  const renderSingleImage = (src: string, index: number, fitMode: ImageFitMode = imageFitMode) => {
    const alt = altTexts[index] || `Project image ${index + 1}`
    
    // For now, use a colored div as placeholder
    // Replace with actual Image component when real images are available
    return (
      <div
        key={index}
        role="img"
        aria-label={alt}
        className={`w-full rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-border/50 ${
          fitMode === "fill" ? "h-full" : ""
        }`}
        style={fitMode === "fill" 
          ? { minHeight: "400px", maxHeight: "800px" }
          : { aspectRatio: "9/16", minHeight: "400px", maxHeight: "800px" }
        }
      >
        {/* Placeholder - replace with <Image> when ready */}
        <div className={`w-full h-full flex items-center justify-center text-muted-foreground ${
          fitMode === "fill" ? "object-cover" : "object-contain"
        }`}>
          Image {index + 1} ({fitMode})
        </div>
      </div>
    )
  }

  // Render images based on layout
  const renderImages = () => {
    if (imageArray.length === 0) {
      // Fallback to dummy colored div if no images provided
      return (
        <div className="h-64 w-full bg-purple-500/20 rounded"></div>
      )
    }

    switch (imageLayout) {
      case "single":
        return imageArray[0] ? renderSingleImage(imageArray[0], 0, imageFitMode) : null

      case "stack":
        return (
          <div className="space-y-6">
            {imageArray.map((src, index) => (
              <div key={index} className="w-full">
                {renderSingleImage(src, index, imageFitMode)}
              </div>
            ))}
          </div>
        )

      case "grid":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {imageArray.slice(0, 4).map((src, index) => (
              <div key={index} className="w-full">
                {renderSingleImage(src, index, imageFitMode)}
              </div>
            ))}
          </div>
        )

      case "horizontal":
        return (
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2">
            {imageArray.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[300px]">
                {renderSingleImage(src, index, imageFitMode)}
              </div>
            ))}
          </div>
        )

      default:
        return imageArray[0] ? renderSingleImage(imageArray[0], 0, imageFitMode) : null
    }
  }

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`w-full py-12 sm:py-16 lg:py-20 ${
        highlighted ? "bg-muted" : "bg-background"
      }`}
    >
      {/* Container with same margins as project overview page (p-24) */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
        <div className={`grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 ${
          hasContent ? 'lg:grid-cols-[40%_60%]' : 'lg:grid-cols-1'
        }`}>
          {/* Left Column - Text with fade animation on desktop */}
          {hasContent && (
            <div className={`flex flex-col ${topAligned ? 'justify-start' : 'justify-center'} order-2 lg:order-1 ml-4 sm:ml-6 md:ml-7 lg:ml-8 xl:ml-8 2xl:ml-8 ${
              topAligned ? '' : 'lg:min-h-[80vh] lg:items-center'
            }`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-left space-y-4 sm:space-y-6 w-full"
              >
                {heading && (
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight break-words">
                    {heading}
                  </h2>
                )}
                {bodyTexts.map((text, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words"
                  >
                    {text}
                  </p>
                ))}
                {children}
              </motion.div>
            </div>
          )}

          {/* Handle case where images are shown but no text */}
          {!hasContent && !hideImages && (
            <div className="order-2 lg:order-1"></div>
          )}

          {/* Right Column - Images Block Container (or empty space when hidden) */}
          {hideImages ? (
            <div className="order-1 lg:order-2 hidden lg:block">
              {/* Empty space to maintain 60% column width */}
            </div>
          ) : (
            <div className={`flex ${topAligned ? 'items-start' : 'items-center'} justify-center ${hasContent ? 'order-1 lg:order-2' : 'order-1 lg:col-span-2'}`}>
              {/* Block container - acts like a frame where images can fill or fit */}
              <div className="w-full max-w-[500px] mx-auto">
                <div className="w-full">
                  {renderImages()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
