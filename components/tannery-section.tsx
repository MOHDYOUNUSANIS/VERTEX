"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Layers, Flame, Droplet, Sparkles, ShieldAlert, Cpu } from "lucide-react"

const stats = [
  { label: "Daily Production Capacity", value: "25,000+ Sq. Ft" },
  { label: "Number of Tanning Drums", value: "30+ Heavy Drums" },
  { label: "Years of Experience", value: "26+ Years of Trust" },
  { label: "Export Countries Served", value: "40+ Global Markets" }
]

const timelineSteps = [
  {
    step: "01",
    title: "Raw Hide Selection",
    image: "/images/tannery-profile.png",
    description: "The process begins with the careful selection of high-quality cow, buffalo, goat, and sheep hides sourced from approved suppliers."
  },
  {
    step: "02",
    title: "Soaking & Cleaning",
    image: "/images/tannery-hero.png",
    description: "Raw hides are soaked to remove dirt, salt, blood, and other impurities while restoring natural moisture."
  },
  {
    step: "03",
    title: "Liming & Fleshing",
    image: "/images/tannery-facility.png",
    description: "The hides undergo liming and fleshing to remove hair, fats, and unwanted tissues, preparing them for tanning."
  },
  {
    step: "04",
    title: "Drum Tanning Process",
    image: "/images/tannery-drums-showcase.png",
    description: "Massive wooden and stainless-steel drums rotate the hides with tanning agents, allowing deep penetration and uniform treatment."
  },
  {
    step: "05",
    title: "Dyeing & Fatliquoring",
    image: "/images/tannery-csr.png",
    description: "Leather is dyed and treated with oils to achieve the required color, softness, flexibility, and performance characteristics."
  },
  {
    step: "06",
    title: "Drying & Staking",
    image: "/images/collection-1.jpg",
    description: "Controlled drying and staking processes enhance softness, texture, and dimensional stability."
  },
  {
    step: "07",
    title: "Finishing & Surface Treatment",
    image: "/images/collection-2.jpg",
    description: "Protective coatings, embossing, polishing, and finishing treatments create the desired appearance and performance."
  },
  {
    step: "08",
    title: "Quality Inspection",
    image: "/images/collection-3.jpg",
    description: "Every leather batch is thoroughly inspected for thickness, color consistency, strength, and finish quality."
  },
  {
    step: "09",
    title: "Finished Leather",
    image: "/images/brand-story.jpg",
    description: "The final leather is sorted, graded, packed, and prepared for export to footwear, leather goods, furniture, and automotive industries worldwide."
  }
]

const showcaseCards = [
  {
    title: "Tannery Drums",
    image: "/images/tannery-drums-showcase.png",
    description: "Featuring both traditional wooden drums and modern stainless-steel tanning vessels. These massive drums regulate chemical penetration, temperature, and mechanical action to guarantee uniform wash, tanning, and dyeing operations."
  },
  {
    title: "Raw Material Excellence",
    image: "/images/tannery-history.png",
    description: "We source premium raw hides and wet-blue splits directly from certified suppliers. Our rigorous inspection standards check for density, thickness, and grain purity before processing even begins."
  },
  {
    title: "Sustainable Manufacturing",
    image: "/images/tannery-facility.png",
    description: "Equipped with advanced wastewater treatment systems and energy recovery units, our tannery prioritizes carbon footprint reduction, zero hazardous discharge, and environmental compliance."
  }
]

export function TannerySection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="tannery" className="bg-[#faf7f2] text-stone-900 px-6 lg:px-12 py-24 lg:py-32 scroll-mt-20 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-[#b8901c] font-semibold mb-3 block font-sans">
              Industrial Heritage
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight">
              Crafted in Our Tannery
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-sm md:text-base text-stone-600 leading-relaxed font-sans max-w-xl">
              &ldquo;Our tannery combines traditional craftsmanship with modern technology to transform carefully selected raw hides into premium-quality leather. Every stage of production is monitored to ensure consistency, durability, and superior finish for global footwear, leather goods, and upholstery industries.&rdquo;
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-24 lg:mb-32">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-stone-200/80 rounded-xl p-6 lg:p-8 flex flex-col justify-between hover:border-[#b8901c]/60 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-xs tracking-wider text-stone-500 font-sans mb-4 block uppercase font-medium">
                {stat.label}
              </span>
              <span className="font-serif text-2xl lg:text-3xl text-[#b8901c] font-bold tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Visual Process Timeline */}
        <div className="mb-24 lg:mb-32">
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-stone-200 pb-6 gap-4">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#b8901c] font-semibold mb-2 block font-sans">
                Workflow
              </span>
              <h3 className="font-serif text-3xl text-stone-900">Visual Process Timeline</h3>
            </div>
            <p className="text-xs text-stone-500 font-sans tracking-wide">
              Click any step below to explore the leather-making journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Step Selection List (Left Side on Desktop) */}
            <div className="lg:col-span-5 space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {timelineSteps.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-lg flex items-center gap-4 transition-all duration-300 border ${
                    activeStep === idx
                      ? "bg-white border-[#b8901c]/80 shadow-md translate-x-2"
                      : "bg-white/40 border-stone-200/60 hover:bg-white hover:border-stone-300 hover:translate-x-1"
                  }`}
                >
                  <span className={`font-serif text-lg font-bold ${activeStep === idx ? "text-[#b8901c]" : "text-stone-400"}`}>
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <p className={`text-xs font-semibold uppercase tracking-wider font-sans ${activeStep === idx ? "text-stone-900" : "text-stone-600"}`}>
                      {step.title}
                    </p>
                  </div>
                  <ChevronRight className={`h-4 w-4 text-stone-400 transition-transform ${activeStep === idx ? "rotate-90 text-[#b8901c]" : ""}`} />
                </button>
              ))}
            </div>

            {/* Step Display Card (Right Side on Desktop) */}
            <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center shadow-lg relative min-h-[380px] animate-in fade-in duration-500">
              <div className="relative w-full md:w-1/2 aspect-square rounded-xl overflow-hidden shadow-sm border border-stone-100">
                <Image
                  src={timelineSteps[activeStep].image}
                  alt={timelineSteps[activeStep].title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
                <div>
                  <span className="font-serif text-4xl lg:text-5xl text-[#b8901c]/20 block font-bold mb-2">
                    {timelineSteps[activeStep].step}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 mb-3">
                    {timelineSteps[activeStep].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-medium">
                    {timelineSteps[activeStep].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
                  <span className="text-[10px] tracking-widest uppercase text-stone-500 font-sans font-bold">
                    Vertex Quality Standard
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Showcase Cards */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#b8901c] font-semibold mb-3 block font-sans">
              Core Competencies
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-900">Tannery Showcase</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {showcaseCards.map((card) => (
              <div
                key={card.title}
                className="group relative bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-[#b8901c]/60 hover:shadow-lg transition-all duration-500 flex flex-col shadow-sm"
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b border-stone-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-60" />
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3 justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 mb-2 group-hover:text-[#b8901c] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans font-medium">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[#b8901c] font-bold font-sans">
                    <span>Vertex Excellence</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
