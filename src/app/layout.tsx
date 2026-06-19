import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { branches, hours, locationInfo } from "@/lib/data/hours";
import { services } from "@/lib/data/services";

const siteUrl = "https://barberlabs.id";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barber Labs - Haircuts by Appointment",
    template: "%s | Barber Labs",
  },
  description:
    "Clean cuts, clear schedule, no waiting. Book your appointment at Barber Labs.",
  keywords: ["barbershop", "haircut", "appointment", "fade", "taper", "beard trim"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Barber Labs - Haircuts by Appointment",
    description: "Clean cuts, clear schedule, no waiting.",
    url: "/",
    siteName: "Barber Labs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Barber Labs - Haircuts by appointment",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Labs - Haircuts by Appointment",
    description: "Clean cuts, clear schedule, no waiting.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: locationInfo.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: locationInfo.whatsappNumber,
    address: branches.map((branch) => ({
      "@type": "PostalAddress",
      name: branch.name,
      streetAddress: branch.address,
      addressLocality: "Jatinangor",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    })),
    openingHoursSpecification: hours
      .filter((hour) => !hour.isClosed)
      .map((hour) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hour.day,
        opens: hour.open,
        closes: hour.close,
      })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      name: service.name,
      price: service.price,
      priceCurrency: "IDR",
      availability: service.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    })),
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
