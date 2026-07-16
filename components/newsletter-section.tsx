"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"

const details = [
  { icon: MapPin, label: "Address", value: "Industrial Estate, Leather District" },
  { icon: Mail, label: "Email", value: "vertexleather786@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8576010070" },
]

export function NewsletterSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.")
      }

      setSubmitted(true)
      setForm({ name: "", email: "", message: "" })
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-6 lg:px-12 py-24 lg:py-32 bg-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-4 font-sans">
            Contact Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background leading-[1.1] mb-6 text-balance">
            Let&apos;s work together
          </h2>
          <p className="text-sm text-background/60 max-w-md mb-10 leading-relaxed font-sans">
            Whether you are a partner, supplier, or simply curious about our leather, we would love
            to hear from you.
          </p>

          <ul className="flex flex-col gap-6">
            {details.map((detail) => (
              <li key={detail.label} className="flex items-start gap-4">
                <detail.icon className="h-5 w-5 text-background/60 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-background/40 mb-1 font-sans">
                    {detail.label}
                  </p>
                  <p className="text-sm text-background font-sans">{detail.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors font-sans"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email address
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors font-sans"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors font-sans resize-none"
            />
          </div>
          {submitError && (
            <p className="text-xs text-red-300 font-sans" role="alert">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-background/90 disabled:opacity-50 transition-colors font-sans"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          {submitted && (
            <p className="text-xs text-background/60 font-sans" role="status">
              Thank you &mdash; we&apos;ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
