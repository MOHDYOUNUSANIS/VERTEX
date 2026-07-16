"use client"

import { useEffect, useRef } from "react"

const phrases = [
  "100% Genuine Leather",
  "Sustainably Tanned",
  "Trusted by Nature",
  "Crafted Since 2000",
]

export function MarqueeBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5
      if (position <= -(el.scrollWidth / 2)) {
        position = 0
      }
      el.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="bg-foreground overflow-hidden py-3">
      <div ref={scrollRef} className="flex whitespace-nowrap">
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[10px] tracking-[0.3em] uppercase text-background/80 mx-8 font-sans"
          >
            <span className="mr-8">{phrase}</span>
            <span className="text-background/30" aria-hidden="true">
              {"//"}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
