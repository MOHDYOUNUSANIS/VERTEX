import Image from "next/image"

const facts = [
  {
    label: "Founded",
    value: "2000",
  },
  {
    label: "Founder",
    value: "Shamim Ahmed",
  },
  {
    label: "Headquarters",
    value: "Jajmau, Kanpur",
  },
  {
    label: "Specialty",
    value: "Cow, Buffalo & Sheep Leather",
  },
]

export function EditorialSection() {
  return (
    <section id="history" className="px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
            Our History
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance mb-8">
            A Legacy Rooted in Kanpur
          </h2>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/tannery-history.png"
              alt="Artisan hands working natural leather with traditional tools"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="lg:pt-16">
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug text-balance mb-8">
            Founded in 2000 by Shamim Ahmed in Jajmau, Kanpur.
          </p>
          <div className="space-y-6 text-muted-foreground leading-relaxed font-sans">
            <p>
              Vertex Leathers is a leading manufacturer specializing in the complete
              end-to-end tanning and processing of high-quality cow, buffalo, and sheep
              leather.
            </p>
            <p>
              Utilizing the latest machinery, we transform raw materials into premium
              finished leathers while adhering to strict quality standards across all
              tanning stages.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 mt-12 pt-12 border-t border-border">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 font-sans">
                  {fact.label}
                </dt>
                <dd className="font-serif text-xl text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
