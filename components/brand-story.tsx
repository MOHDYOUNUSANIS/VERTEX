import Image from "next/image"
import { Building2, Award, Layers } from "lucide-react"

const pillars = [
  {
    icon: Building2,
    title: "About Us",
    description:
      "Vertex is a family-led leather house built on integrity, sustainability, and generations of craftsmanship dedicated to genuine quality.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Our tannery holds internationally recognised certifications for quality, environmental stewardship, and ethical manufacturing.",
  },
  {
    icon: Layers,
    title: "Our Brands",
    description:
      "A portfolio of trusted products spanning finished leather, upholstery, and custom tanning solutions, each carrying the Vertex mark of authenticity.",
  },
]

export function BrandStory() {
  return (
    <section id="profile" className="px-6 lg:px-12 py-24 lg:py-32 bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/tannery-profile.png"
            alt="Modern leather manufacturing facility with skilled workers inspecting leather"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="lg:max-w-md">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Profile
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6 text-balance">
            Rooted in craft, shaped by nature
          </h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Founded on the belief that true quality lives in the details, Vertex creates genuine
              leather that honours traditional craftsmanship while embracing modern responsibility.
              Each hide is thoughtfully sourced and processed to endure.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              From raw sourcing to the finished hide, we control every stage of the
              journey, ensuring integrity from nature to finished product.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="border-t border-border pt-6">
            <pillar.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-foreground mb-3">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
