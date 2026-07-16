import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-16 lg:pb-24">
      <div className="absolute inset-0">
        <Image
          src="/images/tannery-hero.png"
          alt="Open natural grassland at golden hour with cattle grazing in the distance"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-background/80 mb-4 font-sans">
            Vertex &mdash; 100% Genuine Leather
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.95] mb-6 text-balance">
            It&apos;s About
            <br />
            Trusting Nature
          </h1>
          <p className="text-sm md:text-base text-background/80 max-w-md mb-8 leading-relaxed font-sans">
            For generations, Vertex has crafted genuine leather with respect for nature and an
            uncompromising commitment to quality, sustainability, and heritage.
          </p>
          <Link
            href="#profile"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-background border-b border-background/40 pb-1 hover:border-background transition-colors group"
          >
            Discover Our Story
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
