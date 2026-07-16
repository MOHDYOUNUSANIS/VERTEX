"use client"

import { Award, Leaf, Shield, CheckSquare } from "lucide-react"

const certificates = [
  {
    icon: Award,
    title: "Leather Working Group (LWG)",
    subtitle: "Gold Rated / Certified Partner",
    description: "Evaluates the environmental performance of leather manufacturers. Our certification highlights our compliance, chemical management, water stewardship, and energy efficiency."
  },
  {
    icon: Shield,
    title: "ISO 9001:2015",
    subtitle: "Quality Management Standard",
    description: "Demonstrates our ability to consistently provide finished leather that meets customer demands and rigorous international regulatory requirements."
  },
  {
    icon: Leaf,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management Systems",
    description: "Validates our structured framework to manage and minimize our environmental footprint, waste management protocols, and sustainable sourcing."
  },
  {
    icon: CheckSquare,
    title: "OEKO-TEX & REACH Compliance",
    subtitle: "Safe & Non-Toxic Verification",
    description: "Guarantees that all hides, finishes, and auxiliary agents used in our tanning processes are completely free from harmful substances and heavy metals."
  }
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="bg-[#fcfaf7] text-stone-900 px-6 lg:px-12 py-24 lg:py-32 scroll-mt-20 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-[#b8901c] font-semibold mb-3 block font-sans">
            Compliance & Excellence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-6">
            Our Certifications
          </h2>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed font-sans font-medium">
            Vertex Leathers operates under strict international standards to ensure ethical practices, quality consistency, and eco-friendly manufacturing at every stage of production.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-white border border-stone-200/80 hover:border-[#b8901c]/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
            >
              {/* Icon Container */}
              <div className="bg-[#faf6f0] border border-stone-100 rounded-xl p-4 flex items-center justify-center shrink-0 group-hover:bg-[#f7ece1] group-hover:border-[#d4af37]/40 transition-colors">
                <cert.icon className="h-8 w-8 text-[#b8901c] strokeWidth={1.5}" />
              </div>

              {/* Text Info */}
              <div className="flex-1 flex flex-col gap-2">
                <span className="text-[10px] tracking-widest uppercase text-stone-400 font-sans font-bold">
                  {cert.subtitle}
                </span>
                <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#b8901c] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-medium mt-1">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
