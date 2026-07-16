import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const cards = [
  {
    title: "Our History",
    subtitle: "Since 2000",
    image: "/images/tannery-history.png",
    alt: "Artisan hands working natural leather with traditional tools",
    href: "#history",
  },
  {
    title: "Tannery",
    subtitle: "Genuine Leather",
    image: "/images/tannery-facility.png",
    alt: "Rolls of premium finished leather hides in a modern tannery",
    href: "#tannery",
  },
  {
    title: "Contact Us",
    subtitle: "Get in Touch",
    image: "/images/tannery-profile.png",
    alt: "Modern leather manufacturing facility with skilled workers",
    href: "#contact",
  },
]

export function CollectionsSection() {
  return (
    <section id="leather" className="px-6 lg:px-12 py-24 lg:py-32 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
          Welcome
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance mb-6">
          Welcome to Vertex Leathers
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
          A vertically integrated leather house rooted in craftsmanship and nature. From our tannery
          to our finished leather, every piece reflects decades of trusted expertise and genuine care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="group">
            <div className="relative aspect-[3/4] overflow-hidden mb-4">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-foreground">{card.title}</h3>
                <p className="text-xs tracking-[0.15em] text-muted-foreground mt-0.5 font-sans">
                  {card.subtitle}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
