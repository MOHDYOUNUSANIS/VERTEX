import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Company: [
    { label: "Profile", href: "#profile" },
    { label: "Our History", href: "#history" },
    { label: "Contact Us", href: "#contact" },
  ],
  Divisions: [
    { label: "Tannery", href: "#tannery" },
    { label: "Upholstery", href: "#tannery" },
  ],
  Resources: [
    { label: "Certificates", href: "#certificates" },
    { label: "Our Brands", href: "#profile" },
    { label: "Sustainability", href: "#tannery" },
  ],
}

export function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-16 lg:py-24 border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
        <div className="col-span-2 md:col-span-1">
          <Link href="#home" aria-label="Vertex - 100% Genuine Leather">
            <Image
              src="/vertex-logo.png"
              alt="Vertex - 100% Genuine Leather"
              width={100}
              height={140}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-xs font-sans">
            Genuine leather crafted with respect for nature. Rooted in heritage, trusted by
            partners worldwide.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <p className="text-xs tracking-[0.2em] uppercase text-foreground mb-4 font-sans">
              {category}
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-sans">
          &copy; 2026 Vertex Leathers. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-[10px] tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors font-sans">
            Privacy
          </Link>
          <Link href="#" className="text-[10px] tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors font-sans">
            Terms
          </Link>
          <Link href="#" className="text-[10px] tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors font-sans">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
