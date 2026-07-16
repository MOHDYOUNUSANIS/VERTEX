import Image from "next/image"
import { HeartHandshake, Users, HandHeart } from "lucide-react"

const initiatives = [
  {
    icon: HeartHandshake,
    title: "Vertex Social Charity",
    description:
      "Supporting families and individuals in need through sustained charitable giving and relief programmes.",
  },
  {
    icon: Users,
    title: "Vertex Social Service",
    description:
      "Investing in education, healthcare, and community development for the people who make our work possible.",
  },
  {
    icon: HandHeart,
    title: "Vertex Charitable Services",
    description:
      "Partnering with local organisations to deliver lasting impact where it is needed most.",
  },
]

export function CsrSection() {
  return (
    <section id="csr" className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/tannery-csr.png"
          alt="Community members and volunteers together outdoors"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-background/70 mb-3 font-sans">
            CSR
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-[1] text-balance mb-6">
            Giving back to community
          </h2>
          <p className="text-sm md:text-base text-background/80 leading-relaxed font-sans">
            Our responsibility extends beyond leather. Through our social initiatives, Vertex invests
            in the wellbeing of the communities that surround us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="border-t border-background/20 pt-6">
              <initiative.icon className="h-6 w-6 text-background mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-background mb-3">{initiative.title}</h3>
              <p className="text-sm text-background/70 leading-relaxed font-sans">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
