import { Navbar } from "@/components/navbar"
import { MarqueeBanner } from "@/components/marquee-banner"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { BrandStory } from "@/components/brand-story"
import { TannerySection } from "@/components/tannery-section"
import { CertificatesSection } from "@/components/certificates-section"
import { EditorialSection } from "@/components/editorial-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <CollectionsSection />
      <BrandStory />
      <TannerySection />
      <CertificatesSection />
      <EditorialSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
