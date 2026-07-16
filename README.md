# Vertex Leathers - Premium Leather Exporter & Tannery

A premium, luxury-themed Next.js web application showcasing **Vertex Leathers**, a vertically integrated heritage leather house specializing in processing and exporting finished cow, buffalo, goat, sheep, and harness leather.

## Tech Stack & Features

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS & Vanilla CSS
- **Icons**: Lucide React
- **Dynamic Routing**: Automatic page generation for all 43 premium leather sub-types
- **Responsive Layout**: Designed for mobile, tablet, and desktop viewports

## Key Sections

1. **Homepage**:
   - **Hero Section**: Introduces the brand statement "It's About Trusting Nature".
   - **Brand Story**: Explores the heritage, certificates, and core brand pillars.
   - **Tannery Section**: Redesigned in a premium light sand theme featuring:
     - Interactive **9-Step Visual Process Timeline** (from raw selection to finished leather export).
     - Capacity and export statistics cards.
     - Focal showcases for *Tannery Drums*, *Raw Material Excellence*, and *Sustainable Manufacturing*.
   - **Certifications Section**: Highlights international compliance benchmarks including LWG (Leather Working Group) Gold status, ISO 9001, ISO 14001, and REACH/OEKO-TEX safety.
   - **Newsletter & Footer**: Enables client interaction and provides dynamic routing back to sections.

2. **Leather Swatch Product Pages**:
   - Dynamic route `/leather/[slug]` serving custom specifications, thickness ranges, temper details, ideal applications, and related items.
   - Embedded sample quotation request form.

3. **Mega-Menu Navbar**:
   - Hover-triggered columns for quick navigation through all 43 leather sub-grades.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

Install dependencies using `npm`:

```bash
npm install --legacy-peer-deps
```

*Note: `--legacy-peer-deps` is used to handle package peer requirements between react-day-picker and date-fns.*

### Development Server

Run the development environment locally:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to view the application.

## Directory Structure

- `/app`: Pages and layouts (including `app/leather/[slug]` dynamic routing template).
- `/components`: Modular UI components (Navbar, Tannery Section, Certificates, Footer).
- `/lib`: Database registry containing structured specifications for all 43 leather grades.
- `/public`: Static assets, brand logos, and generated premium textures.
