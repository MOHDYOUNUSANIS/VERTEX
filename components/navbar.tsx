"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { getSlug } from "@/lib/leather-data"

const leatherCategories = [
  {
    title: "Cow Leather",
    items: [
      "Cow NDM",
      "Cow Nubuck",
      "Cow Oily",
      "Cow Tumbled",
      "Cow Crust",
      "Cow Finished",
      "Cow Semi-Aniline",
      "Cow Full Grain",
      "Cow Corrected Grain",
      "Cow Suede",
      "Cow Pull-Up"
    ]
  },
  {
    title: "Buffalo Leather",
    items: [
      "Buffalo NDM",
      "Buffalo Nubuck",
      "Buffalo Oily",
      "Buffalo Tumbled",
      "Buffalo Crust",
      "Buffalo Finished",
      "Buffalo Full Grain",
      "Buffalo Corrected Grain",
      "Buffalo Pull-Up",
      "Buffalo Crazy Horse",
      "Buffalo Suede"
    ]
  },
  {
    title: "Goat / Sheep Leather",
    items: [
      "Goat Nappa",
      "Goat Suede",
      "Goat Nubuck",
      "Goat Crust",
      "Goat Glazed",
      "Goat Aniline",
      "Sheep Nappa",
      "Sheep Suede",
      "Sheep Garment Leather",
      "Sheep Crust",
      "Sheep Finished"
    ]
  },
  {
    title: "Harness Leather",
    items: [
      "Harness Natural",
      "Harness Oily",
      "Harness Pull-Up",
      "Harness Veg-Tanned",
      "Harness Drum Dyed",
      "Harness Waxy",
      "Harness Bridle",
      "Harness Saddle Leather",
      "Harness Finished",
      "Harness Embossed",
      "Harness Antique Finish"
    ]
  }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLeatherOpen, setIsLeatherOpen] = useState(false)
  const [isMobileLeatherOpen, setIsMobileLeatherOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm" 
        : "bg-transparent"
    }`}>
      <nav className={`flex items-center justify-between px-6 max-w-7xl mx-auto w-full transition-all duration-300 ${
        isScrolled ? "py-4 lg:px-12" : "py-6 lg:px-12"
      }`}>
        {/* Logo and Brand Name */}
        <Link href="/#home" className="flex items-center gap-3.5 z-10" aria-label="Vertex Leathers">
          <Image
            src="/vertex-logo.png"
            alt="Vertex Leathers Logo"
            width={48}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
          <span className="font-sans font-bold uppercase tracking-wider text-foreground text-base sm:text-lg lg:text-xl whitespace-nowrap">
            VERTEX LEATHERS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/#home"
            className="text-sm tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors font-semibold"
          >
            Home
          </Link>
          <Link
            href="/#tannery"
            className="text-sm tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors font-semibold"
          >
            Tannery
          </Link>

          {/* Leather Dropdown Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsLeatherOpen(true)}
            onMouseLeave={() => setIsLeatherOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors font-semibold py-2"
            >
              Leather
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isLeatherOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLeatherOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[850px] bg-background/95 backdrop-blur-md border border-border shadow-xl p-8 grid grid-cols-4 gap-6 rounded-md animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {leatherCategories.map((category) => (
                  <div key={category.title} className="flex flex-col gap-3">
                    <h4 className="text-xs font-bold tracking-[0.15em] uppercase border-b border-border/60 pb-1.5 text-foreground">
                      {category.title}
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {category.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/leather/${getSlug(item)}`}
                            className="text-[11px] text-muted-foreground hover:text-foreground transition-colors block py-0.5 font-sans font-medium"
                            onClick={() => setIsLeatherOpen(false)}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#contact"
            className="text-sm tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground z-10"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-6 lg:hidden shadow-lg max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/#home"
                className="text-base tracking-[0.2em] uppercase text-foreground font-semibold py-2 border-b border-border/40"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#tannery"
                className="text-base tracking-[0.2em] uppercase text-foreground font-semibold py-2 border-b border-border/40"
                onClick={() => setIsOpen(false)}
              >
                Tannery
              </Link>

              {/* Mobile Leather Accordion */}
              <div className="border-b border-border/40 py-2">
                <button
                  onClick={() => setIsMobileLeatherOpen(!isMobileLeatherOpen)}
                  className="flex items-center justify-between w-full text-base tracking-[0.2em] uppercase text-foreground font-semibold"
                >
                  <span>Leather</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileLeatherOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileLeatherOpen && (
                  <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-border/60">
                    {leatherCategories.map((category) => (
                      <div key={category.title}>
                        <button
                          onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                          className="flex items-center justify-between w-full text-xs tracking-[0.15em] uppercase text-foreground/80 font-semibold py-1"
                        >
                          <span>{category.title}</span>
                          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${expandedCategory === category.title ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedCategory === category.title && (
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2 pl-3 py-1 bg-secondary/30 rounded">
                            {category.items.map((item) => (
                              <Link
                                key={item}
                                href={`/leather/${getSlug(item)}`}
                                className="text-[11px] text-muted-foreground hover:text-foreground py-1 font-sans font-medium"
                                onClick={() => {
                                  setIsOpen(false)
                                  setIsMobileLeatherOpen(false)
                                  setExpandedCategory(null)
                                }}
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#contact"
                className="text-base tracking-[0.2em] uppercase text-foreground font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
