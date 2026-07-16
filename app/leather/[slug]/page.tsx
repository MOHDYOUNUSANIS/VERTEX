"use client"

import { use, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Send, CheckCircle2, ChevronRight, Compass, ShieldCheck, Waves } from "lucide-react"
import { getLeatherBySlug, leatherDatabase, LeatherDetails } from "@/lib/leather-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LeatherDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const router = useRouter()
  const leather = getLeatherBySlug(slug)

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    quantity: "1000",
    notes: ""
  })

  if (!leather) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h1 className="font-serif text-3xl mb-4">Leather Type Not Found</h1>
        <p className="text-muted-foreground mb-6">The requested leather category or finish does not exist.</p>
        <Link href="/" className="px-6 py-3 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded hover:opacity-90 transition-opacity">
          Return Home
        </Link>
      </div>
    )
  }

  // Get other leathers in the same category
  const relatedLeathers = leatherDatabase
    .filter((item) => item.category === leather.category && item.slug !== leather.slug)
    .slice(0, 4)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          leatherName: leather.name,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.")
      }

      setFormSubmitted(true)
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background pt-28 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-12 font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to previous page
          </button>

          {/* Main Leather Info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Visual Swatch representation card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-square rounded-2xl border border-stone-800 p-8 flex flex-col justify-between shadow-2xl overflow-hidden group">
                {/* Background Image showing real leather texture */}
                <Image
                  src={leather.image}
                  alt={leather.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                
                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-stone-950/60 group-hover:bg-stone-950/50 transition-colors" />

                {/* Decorative leather grain texture look */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Large visual category tag */}
                <div className="z-10">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-stone-300 font-sans border border-stone-700/60 rounded-full px-3 py-1 bg-stone-900/80">
                    Premium Sample Specimen
                  </span>
                </div>

                <div className="z-10 my-auto text-center py-8">
                  <h3 className="font-serif text-3xl sm:text-4xl text-stone-100 mb-2">
                    {leather.name}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-stone-300 font-sans">
                    {leather.category}
                  </p>
                </div>

                {/* Swatch Footer with specifications */}
                <div className="z-10 flex items-center justify-between border-t border-stone-800/80 pt-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-stone-400 font-sans font-bold">Thickness</p>
                    <p className="text-xs font-semibold text-stone-200 font-sans">{leather.thickness}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-stone-400 font-sans font-bold">Temper</p>
                    <p className="text-xs font-semibold text-stone-200 font-sans">{leather.temper}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-stone-400 font-sans font-bold">Finish</p>
                    <p className="text-xs font-semibold text-stone-200 font-sans truncate max-w-[120px]">{leather.finish}</p>
                  </div>
                </div>
              </div>

              {/* Quality Assurances */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-secondary/40 rounded-xl border border-border/40">
                  <ShieldCheck className="h-5 w-5 text-stone-700 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground font-sans">100% Genuine</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-secondary/40 rounded-xl border border-border/40">
                  <Waves className="h-5 w-5 text-stone-700 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground font-sans">Eco Tanned</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-secondary/40 rounded-xl border border-border/40">
                  <Compass className="h-5 w-5 text-stone-700 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground font-sans">Ethical Source</span>
                </div>
              </div>
            </div>

            {/* Right Column: Leather Details */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 block font-sans">
                  {leather.category}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                  {leather.name}
                </h1>
              </div>

              <div className="prose prose-stone">
                <p className="text-base text-muted-foreground leading-relaxed font-sans">
                  {leather.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="border-y border-border py-6 my-2">
                <h3 className="font-serif text-lg text-foreground mb-4">Technical Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Grain Type</span>
                    <span className="text-xs font-semibold text-foreground font-sans">{leather.grain}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Finish Spec</span>
                    <span className="text-xs font-semibold text-foreground font-sans">{leather.finish}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Standard Temper</span>
                    <span className="text-xs font-semibold text-foreground font-sans">{leather.temper}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Thickness Range</span>
                    <span className="text-xs font-semibold text-foreground font-sans">{leather.thickness}</span>
                  </div>
                </div>
              </div>

              {/* Recommended Applications */}
              <div>
                <h3 className="font-serif text-lg text-foreground mb-3">Recommended For</h3>
                <div className="flex flex-wrap gap-2">
                  {leather.bestFor.map((app) => (
                    <span
                      key={app}
                      className="text-xs tracking-wider text-stone-750 bg-stone-100 border border-stone-200 px-3.5 py-1.5 rounded-full font-sans font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry / Call to action Form section */}
          <section className="mt-20 lg:mt-28 bg-stone-50 rounded-2xl border border-border p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Request Sample & Quote</h2>
                <p className="text-sm text-muted-foreground font-sans">
                  Interested in sourcing our premium {leather.name}? Fill in the form below and our leather specialists will contact you with specs, pricing, and shipping samples.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="h-16 w-16 text-stone-800 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl mb-2">Thank You for Your Inquiry</h3>
                  <p className="text-sm text-muted-foreground font-sans mb-6">
                    We have received your request for {leather.name}. A Vertex representative will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 border border-stone-300 hover:border-stone-850 rounded text-xs tracking-widest uppercase transition-colors font-semibold font-sans"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded focus:outline-none focus:border-stone-700 text-sm font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">Business Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded focus:outline-none focus:border-stone-700 text-sm font-sans"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded focus:outline-none focus:border-stone-700 text-sm font-sans"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="quantity" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">Estimated Quantity (Sq. Ft) *</label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded focus:outline-none focus:border-stone-700 text-sm font-sans"
                      >
                        <option value="1000">1,000 - 5,000 Sq. Ft</option>
                        <option value="5000">5,000 - 15,000 Sq. Ft</option>
                        <option value="15000">15,000 - 30,050 Sq. Ft</option>
                        <option value="30000">30,000+ Sq. Ft</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">Specifications & Requirements</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded focus:outline-none focus:border-stone-700 text-sm font-sans resize-none"
                      placeholder="Please specify color requests, custom thickness, finish requirements or other details..."
                    />
                  </div>

                  {submitError && (
                    <div className="text-red-650 bg-red-50 border border-red-200 p-4 rounded text-xs font-sans text-center">
                      {submitError}
                    </div>
                  )}

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase rounded hover:opacity-90 disabled:opacity-50 transition-all font-semibold font-sans w-full sm:w-auto"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                      <Send className="h-3 w-3" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Related / Other Leathers Section */}
          {relatedLeathers.length > 0 && (
            <section className="mt-24 lg:mt-32">
              <div className="border-b border-border pb-4 mb-8 flex justify-between items-end">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                  Explore other {leather.category} variants
                </h2>
                <span className="text-xs text-muted-foreground font-sans font-semibold">
                  {leather.category} Collection
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedLeathers.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/leather/${item.slug}`}
                    className="group border border-border/60 hover:border-border p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] tracking-widest uppercase text-muted-foreground font-sans font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-stone-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-sans mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-foreground font-semibold font-sans tracking-wider uppercase mt-4 group-hover:gap-2.5 transition-all">
                      <span>View Specs</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}
