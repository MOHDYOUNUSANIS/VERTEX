export interface LeatherDetails {
  slug: string;
  name: string;
  category: string;
  description: string;
  grain: string;
  finish: string;
  temper: string;
  thickness: string;
  bestFor: string[];
  image: string;
}

// A list of all 43 sub leathers
const rawLeathers = [
  // COW LEATHER
  {
    name: "Cow NDM",
    category: "Cow Leather",
    description: "Cow Natural Dry Milled (NDM) leather features a natural, soft pebble grain achieved through prolonged tumbling. It offers supreme flexibility and a luxurious, relaxed feel.",
    grain: "Natural Pebble Grain",
    finish: "Aniline / Semi-Aniline",
    temper: "Soft & Supple",
    thickness: "1.2 - 1.4 mm",
    bestFor: ["Premium Handbags", "Soft Leather Jackets", "Luxury Backpacks"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Nubuck",
    category: "Cow Leather",
    description: "Crafted by gently buffing the outer grain of cowhide, Cow Nubuck displays a velvet-like surface with a soft, rich nap that reacts beautifully to touch.",
    grain: "Buffed Top Grain",
    finish: "Suede-like Velvet",
    temper: "Medium Soft",
    thickness: "1.3 - 1.5 mm",
    bestFor: ["Premium Boots", "High-End Upholstery", "Designer Wallets"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Oily",
    category: "Cow Leather",
    description: "Saturated with specialized oils and waxes, Cow Oily leather features an attractive pull-up effect, excellent water resistance, and a rugged, classic look.",
    grain: "Full Grain with Oily Sheen",
    finish: "Waxed / Waxy",
    temper: "Medium Firm",
    thickness: "1.4 - 1.6 mm",
    bestFor: ["Outdoor Boots", "Rugged Duffel Bags", "Journal Covers"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Tumbled",
    category: "Cow Leather",
    description: "Tumbled in drums to enhance its natural texture, this leather boasts a prominent, irregular grain pattern that masks wear and tear while remaining incredibly soft.",
    grain: "Enhanced Tumbled Grain",
    finish: "Semi-Finished",
    temper: "Very Soft",
    thickness: "1.2 - 1.5 mm",
    bestFor: ["Casual Shoes", "Daily Handbags", "Comfort Wear"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Crust",
    category: "Cow Leather",
    description: "Unfinished vegetable or chrome-tanned leather, Cow Crust is dry and waiting to be custom-dyed and finished. Perfect for bespoke hand-painting and patinas.",
    grain: "Natural Unfinished Grain",
    finish: "None (Raw)",
    temper: "Medium to Firm",
    thickness: "1.1 - 1.3 mm",
    bestFor: ["Custom Patina Shoes", "Bespoke Wallets", "Craft Projects"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Finished",
    category: "Cow Leather",
    description: "Coated with a protective top layer, Cow Finished leather is highly resistant to water, stains, and scratches, making it ideal for high-traffic applications.",
    grain: "Corrected & Pigmented",
    finish: "Protective Lacquered",
    temper: "Medium",
    thickness: "1.2 - 1.4 mm",
    bestFor: ["Commercial Furniture", "Auto Upholstery", "Daily Accessories"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Semi-Aniline",
    category: "Cow Leather",
    description: "Offering the best of both worlds, this leather retains its natural markings while featuring a thin protective dye layer that ensures color uniformity and durability.",
    grain: "Natural Grain with Light Correction",
    finish: "Light Pigmented Seal",
    temper: "Soft to Medium",
    thickness: "1.2 - 1.4 mm",
    bestFor: ["Luxury Furniture", "Executive Briefcases", "Premium Wallets"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Full Grain",
    category: "Cow Leather",
    description: "The absolute premium cut of the hide. Cow Full Grain retains the entire grain layer, complete with natural markings, scars, and unmatched structural durability.",
    grain: "100% Full Top Grain",
    finish: "Natural Aniline",
    temper: "Firm to Medium",
    thickness: "1.6 - 2.0 mm",
    bestFor: ["Heritage Belts", "Lifetime Bags", "Heavy-Duty Holsters"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Corrected Grain",
    category: "Cow Leather",
    description: "Lightly buffed to remove surface imperfections, this leather is finished with a simulated grain pattern, providing high yields and clean, uniform aesthetics.",
    grain: "Corrected / Embossed",
    finish: "Pigmented Acrylic",
    temper: "Medium Firm",
    thickness: "1.3 - 1.5 mm",
    bestFor: ["Formal Shoes", "Uniform Belts", "Structured Portfolios"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Suede",
    category: "Cow Leather",
    description: "Created from the inner split of the hide, Cow Suede is highly flexible and characterized by a thick, velvety nap that feels exceptionally soft against the skin.",
    grain: "Inner Hide Nap",
    finish: "Brushed Suede",
    temper: "Extremely Soft",
    thickness: "1.2 - 1.4 mm",
    bestFor: ["Loafers", "Casual Jackets", "Premium Linings"],
    image: "/images/collection-2.jpg"
  },
  {
    name: "Cow Pull-Up",
    category: "Cow Leather",
    description: "Richly finished with hot oil and waxes, Cow Pull-Up shifts color and develops beautiful highlights when bent, stretched, or scratched, telling a story over time.",
    grain: "Full Grain Pull-Up",
    finish: "Hot Stuffed Oils",
    temper: "Medium",
    thickness: "1.4 - 1.8 mm",
    bestFor: ["Vintage Footwear", "Travel Luggage", "Heritage Accessories"],
    image: "/images/collection-2.jpg"
  },

  // BUFFALO LEATHER
  {
    name: "Buffalo NDM",
    category: "Buffalo Leather",
    description: "Natural Dry Milled Buffalo leather presents a thicker, more pronounced pebble texture than cowhide. Extremely durable with a wonderful organic feel.",
    grain: "Deep Natural Pebble",
    finish: "Semi-Aniline",
    temper: "Medium Soft",
    thickness: "1.4 - 1.8 mm",
    bestFor: ["Heavy-Duty Handbags", "Rugged Boots", "Premium Leather Goods"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Nubuck",
    category: "Buffalo Leather",
    description: "Combining the heavy-duty strength of buffalo hide with a soft, buffed nap, Buffalo Nubuck offers an ultra-durable, premium velvety texture.",
    grain: "Buffed Top Grain",
    finish: "Velvet Nap",
    temper: "Medium",
    thickness: "1.5 - 1.8 mm",
    bestFor: ["Hiking Boots", "Heavy Wear Furniture", "Outdoor Equipment"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Oily",
    category: "Buffalo Leather",
    description: "Deeply impregnated with heavy oils, Buffalo Oily is highly weatherproof and showcases deep pull-up tones that make it look better with age and use.",
    grain: "Full Grain Oily",
    finish: "Heavy Waxes & Oils",
    temper: "Firm",
    thickness: "1.6 - 2.0 mm",
    bestFor: ["Rugged Travel Bags", "Motorcycle Gear", "Work Boots"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Tumbled",
    category: "Buffalo Leather",
    description: "Dry tumbled to break up the dense fibers, Buffalo Tumbled leather has an iconic wrinkled look and is unexpectedly flexible despite its thickness.",
    grain: "Coarse Tumbled Pebbles",
    finish: "Natural / Semi-Finished",
    temper: "Soft",
    thickness: "1.5 - 1.8 mm",
    bestFor: ["Casual Satchels", "Soft Boot Shafts", "Comfort Cushions"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Crust",
    category: "Buffalo Leather",
    description: "Unfinished buffalo hide ready to absorb custom dyes and waxes. Prized by artisans for creating custom antiqued finishes on boots and heavy cases.",
    grain: "Natural Dry Grain",
    finish: "Raw (No Topcoat)",
    temper: "Firm",
    thickness: "1.4 - 1.8 mm",
    bestFor: ["Custom Patina Bootmakers", "Saddle Accents", "Crafting"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Finished",
    category: "Buffalo Leather",
    description: "Featuring a high-durability pigmented topcoat, Buffalo Finished leather is engineered to withstand moisture, stains, and demanding daily wear.",
    grain: "Corrected & Embossed",
    finish: "Pigmented Seal",
    temper: "Medium",
    thickness: "1.4 - 1.6 mm",
    bestFor: ["Auto Interiors", "Commercial Seating", "Duty Belts"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Full Grain",
    category: "Buffalo Leather",
    description: "The thickest and most rugged full grain option. Retains the original epidermal texture of the buffalo, offering unrivaled puncture and tear resistance.",
    grain: "Natural Buffalo Grain",
    finish: "Aniline Finish",
    temper: "Very Firm",
    thickness: "1.8 - 2.2 mm",
    bestFor: ["Heavy Luggage", "Tool Rolls", "Industrial Aprons"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Corrected Grain",
    category: "Buffalo Leather",
    description: "Buffed and embossed to establish a consistent, clean grain pattern across large hides. Highly cost-effective with excellent durability.",
    grain: "Embossed Grain Pattern",
    finish: "Synthetic Topcoat",
    temper: "Medium Firm",
    thickness: "1.4 - 1.7 mm",
    bestFor: ["Work Boots", "Utility Cases", "Structured Belts"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Pull-Up",
    category: "Buffalo Leather",
    description: "Heavy oiled leather with intense color migration. Bending this leather produces striking amber and cream highlights under the main shade.",
    grain: "Full Grain Pull-Up",
    finish: "Wax Stuffed",
    temper: "Medium Firm",
    thickness: "1.6 - 2.0 mm",
    bestFor: ["Vintage Briefcases", "Work Boots", "Rustic Accessories"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Crazy Horse",
    category: "Buffalo Leather",
    description: "Famous for its wax-rich, distressed look. Buffalo Crazy Horse scratches easily but can be rubbed clean with fingertips, creating a unique vintage patina.",
    grain: "Sanded & Heavily Waxed",
    finish: "Distressed Matte Finish",
    temper: "Medium",
    thickness: "1.6 - 1.9 mm",
    bestFor: ["Classic Messenger Bags", "Watch Straps", "Rustic Journals"],
    image: "/images/collection-3.jpg"
  },
  {
    name: "Buffalo Suede",
    category: "Buffalo Leather",
    description: "Thick and highly textured, Buffalo Suede features a rougher, more structural nap than cow suede, perfect for rugged fashion statements.",
    grain: "Coarse Inner Split Nap",
    finish: "Roughout Suede",
    temper: "Soft",
    thickness: "1.4 - 1.6 mm",
    bestFor: ["Heavy-Duty Jackets", "Casual Desert Boots", "Accents"],
    image: "/images/collection-3.jpg"
  },

  // GOAT / SHEEP LEATHER
  {
    name: "Goat Nappa",
    category: "Goat / Sheep Leather",
    description: "Goat Nappa is renowned for its lightweight feel and high tensile strength. Extremely soft with a tight, characteristic grain pattern.",
    grain: "Fine Tight Pebble",
    finish: "Semi-Aniline",
    temper: "Very Soft",
    thickness: "0.8 - 1.0 mm",
    bestFor: ["Premium Gloves", "Lightweight Handbags", "Luxury Wallets"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Goat Suede",
    category: "Goat / Sheep Leather",
    description: "Highly flexible with a short, dense, and silky nap. Goat Suede is the gold standard for high-end fashion garments and luxury footwear lining.",
    grain: "Ultra-Fine Inner Nap",
    finish: "Silky Velvet Suede",
    temper: "Extremely Soft",
    thickness: "0.7 - 0.9 mm",
    bestFor: ["Designer Heels", "Luxury Jackets", "Premium Linings"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Goat Nubuck",
    category: "Goat / Sheep Leather",
    description: "Fine goat skin buffed on the grain side to achieve an extremely delicate, brushed texture that feels like peach skin.",
    grain: "Delicate Sanded Grain",
    finish: "Peach-Skin Matte",
    temper: "Soft & Pliant",
    thickness: "0.8 - 1.0 mm",
    bestFor: ["Luxury Wallets", "Fine Trimmings", "Premium Apparels"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Goat Crust",
    category: "Goat / Sheep Leather",
    description: "Tanned, raw goat skin waiting for finished dyes. Light, tight-fibered, and highly receptive to custom hand-painting or wax polishing.",
    grain: "Fine Raw Grain",
    finish: "Raw (Dry)",
    temper: "Medium",
    thickness: "0.8 - 1.0 mm",
    bestFor: ["Bookbinding", "Custom Painted Linings", "Handcrafts"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Goat Glazed",
    category: "Goat / Sheep Leather",
    description: "Polished to a high gloss using glass cylinders under high pressure, Goat Glazed leather features a beautiful glassy shine and intense color depth.",
    grain: "High-Gloss Polished Grain",
    finish: "Glass-Polished Aniline",
    temper: "Medium Soft",
    thickness: "0.9 - 1.1 mm",
    bestFor: ["Luxury Purses", "Statement Accessories", "Fine Shoes"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Goat Aniline",
    category: "Goat / Sheep Leather",
    description: "Dyed strictly with soluble dyes, allowing the intricate, naturally pebbled surface of the goat hide to remain completely visible and unaltered.",
    grain: "100% Natural Goat Grain",
    finish: "Pure Aniline",
    temper: "Soft & Pliant",
    thickness: "0.8 - 1.0 mm",
    bestFor: ["Luxury Small Leather Goods", "Premium Vestments", "Bespoke Linings"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Sheep Nappa",
    category: "Goat / Sheep Leather",
    description: "Among the softest leathers in the world. Sheep Nappa is feather-light and behaves almost like fabric, conforming perfectly to curves and contours.",
    grain: "Ultra-Smooth Micro Grain",
    finish: "Semi-Aniline",
    temper: "Buttery Soft",
    thickness: "0.6 - 0.8 mm",
    bestFor: ["High-End Garments", "Premium Designer Gloves", "Luxury Pouches"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Sheep Suede",
    category: "Goat / Sheep Leather",
    description: "An incredibly supple split leather. It possesses a luxurious, cloud-like softness and a velvety nap that is unmatched for comfort.",
    grain: "Cloud-Soft Split Nap",
    finish: "Super-Soft Suede",
    temper: "Buttery Soft",
    thickness: "0.6 - 0.8 mm",
    bestFor: ["Luxury Linings", "Fitted Skirts & Shirts", "Jewelry Box Liners"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Sheep Garment Leather",
    category: "Goat / Sheep Leather",
    description: "Specially formulated for maximum drape and minimal weight, this sheepskin feels like a second skin, allowing designers to create flowing leather apparel.",
    grain: "Natural Soft Grain",
    finish: "Ultra-Light Pigmentation",
    temper: "Fabric-like Soft",
    thickness: "0.5 - 0.7 mm",
    bestFor: ["Leather Trench Coats", "Fashion Jackets", "Draped Dresses"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Sheep Crust",
    category: "Goat / Sheep Leather",
    description: "Unfinished, lightweight sheepskin. Ideal for bookbinders, miniature craftworkers, and custom accessory dye specialists.",
    grain: "Smooth Raw Grain",
    finish: "None (Raw)",
    temper: "Soft to Medium",
    thickness: "0.6 - 0.8 mm",
    bestFor: ["Bespoke Bookbinding", "Custom Dyes", "Miniature Crafts"],
    image: "/images/brand-story.jpg"
  },
  {
    name: "Sheep Finished",
    category: "Goat / Sheep Leather",
    description: "Equipped with a thin, protective barrier over its naturally ultra-soft base, providing everyday stain and moisture resistance to delicate sheepskin.",
    grain: "Smooth Sealed Grain",
    finish: "Lacquered Topcoat",
    temper: "Soft",
    thickness: "0.7 - 0.9 mm",
    bestFor: ["Premium Phone Sleeves", "Designer Handbags", "Lined Wallets"],
    image: "/images/brand-story.jpg"
  },

  // HARNESS LEATHER
  {
    name: "Harness Natural",
    category: "Harness Leather",
    description: "Harness Natural is a heavy, vegetable-tanned leather left undyed. It patinas rapidly, absorbing environmental oils to darken into a rich, deep caramel shade.",
    grain: "Smooth Full Grain",
    finish: "Natural Veg-Tanned",
    temper: "Very Firm",
    thickness: "3.5 - 4.5 mm",
    bestFor: ["Heavy Utility Belts", "Saddle Crafting", "Lifetime Straps"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Oily",
    category: "Harness Leather",
    description: "Impregnated with high-grade tallow and marine waxes, this harness leather is completely weather-proof and built to withstand harsh outdoor friction.",
    grain: "Slick Waxed Grain",
    finish: "Hot-Stuffed Oils & Tallow",
    temper: "Stiff & Sturdy",
    thickness: "3.8 - 4.5 mm",
    bestFor: ["Horse Harnesses", "Heavy-Duty Gun Holsters", "Dog Leashes"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Pull-Up",
    category: "Harness Leather",
    description: "A thick, load-bearing leather loaded with rich waxes that migrate when flexed, creating spectacular vintage pull-up highlights along stress points.",
    grain: "Full Grain Pull-Up",
    finish: "Aniline Oil Finish",
    temper: "Firm",
    thickness: "3.2 - 4.0 mm",
    bestFor: ["Premium Pet Collars", "High-End Briefcase Straps", "Heavy Cases"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Veg-Tanned",
    category: "Harness Leather",
    description: "Traditional oak-bark vegetable tanned leather. It has an aromatic smell, incredible tensile strength, and zero synthetic polymers, remaining 100% organic.",
    grain: "Raw Veg Grain",
    finish: "Unsealed Tannin Finish",
    temper: "Extremely Firm",
    thickness: "4.0 - 5.0 mm",
    bestFor: ["Equestrian Equipment", "Armor & Tool Belts", "Bespoke Footwear Soles"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Drum Dyed",
    category: "Harness Leather",
    description: "Dyed completely through the cross-section in rotating drums, ensuring that any scratches or scrapes show the same rich color underneath.",
    grain: "Fully Penetrated Grain",
    finish: "Drum-Dyed Matte",
    temper: "Firm",
    thickness: "3.5 - 4.2 mm",
    bestFor: ["Professional Gun Belts", "Outdoor Saddlery", "Heavy Straps"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Waxy",
    category: "Harness Leather",
    description: "Finished with a heavy wax coating that blooms with a white haze over time. Brushing the leather melts the wax back in for a beautiful, renewed sheen.",
    grain: "Wax-Bloomed Full Grain",
    finish: "Wax Coated",
    temper: "Firm",
    thickness: "3.5 - 4.0 mm",
    bestFor: ["Classic Bridles", "Premium Portfolio Cases", "Watch Boxes"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Bridle",
    category: "Harness Leather",
    description: "English-style bridle leather, meticulously hand-finished with tallow on both the grain and flesh sides to create a completely smooth, friction-free finish.",
    grain: "Ultra-Slick Glazed Grain",
    finish: "Tallow-Stuffed Glaze",
    temper: "Firm but Pliant",
    thickness: "3.8 - 4.5 mm",
    bestFor: ["Premium Bridles & Reins", "Luxury Dress Belts", "High-End Luggage"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Saddle Leather",
    category: "Harness Leather",
    description: "Designed specifically to endure the intense friction of saddle seats. Highly resistant to stretching, moisture, and sweat.",
    grain: "Dense Full Grain",
    finish: "Polished Protective Oil",
    temper: "Stiff",
    thickness: "4.0 - 4.8 mm",
    bestFor: ["Saddles", "Heavy Straps", "Desktop Writing Pads"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Finished",
    category: "Harness Leather",
    description: "Harness leather equipped with a highly polished synthetic topcoat that prevents all moisture penetration and resists color fading.",
    grain: "Lacquered Full Grain",
    finish: "Waterproof Topcoat",
    temper: "Very Firm",
    thickness: "3.5 - 4.2 mm",
    bestFor: ["Police/Duty Belts", "Heavy Industrial Straps", "Cases"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Embossed",
    category: "Harness Leather",
    description: "Heavy harness leather embossed under heat with distinct textures (like pebble or saffiano) for a modern, scratch-resistant styling.",
    grain: "Embossed Texture",
    finish: "Heat-Set Acrylic Finish",
    temper: "Stiff",
    thickness: "3.2 - 3.8 mm",
    bestFor: ["Structured Bags", "Travel Cases", "Heavy Accent Panels"],
    image: "/images/lookbook-1.jpg"
  },
  {
    name: "Harness Antique Finish",
    category: "Harness Leather",
    description: "Hand-rubbed with dark, contrasting pigments to create a beautiful, two-tone vintage look that emphasizes the natural contours and depth of the hide.",
    grain: "Two-Tone Rubbed Grain",
    finish: "Antiqued Patina Finish",
    temper: "Firm",
    thickness: "3.5 - 4.0 mm",
    bestFor: ["Vintage Furniture Trim", "Equestrian Accents", "Bespoke Belts"],
    image: "/images/lookbook-1.jpg"
  }
];

// Helper to convert names to URL slugs (e.g. "Cow Semi-Aniline" -> "cow-semi-aniline")
export function getSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const leatherDatabase: LeatherDetails[] = rawLeathers.map((item) => ({
  ...item,
  slug: getSlug(item.name),
  image: item.image
}));

export function getLeatherBySlug(slug: string): LeatherDetails | undefined {
  return leatherDatabase.find((item) => item.slug === slug);
}
