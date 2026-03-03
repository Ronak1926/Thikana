import type { Metadata } from "next";
import { Playfair_Display, Inter, Nunito } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Thikana – Modern European Dining in the Heart of Shoreditch",
    template: "%s | Thikana Restaurant",
  },
  description:
    "Experience modern European dining at Thikana, Shoreditch. Seasonal ingredients, refined flavours, and an elegant atmosphere. Reserve your table today.",
  keywords: [
    "Thikana",
    "restaurant",
    "Shoreditch",
    "European dining",
    "fine dining",
    "London restaurant",
    "seasonal menu",
    "private dining",
    "Indian cuisine",
  ],
  openGraph: {
    title: "Thikana – Modern European Dining in the Heart of Shoreditch",
    description:
      "Seasonal ingredients. Refined flavours. A warm and elegant atmosphere.",
    type: "website",
    locale: "en_GB",
    url: "https://thikana.london",
    siteName: "Thikana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thikana – Modern European Dining",
    description:
      "Seasonal ingredients. Refined flavours. A warm and elegant atmosphere.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Thikana",
    description:
      "Modern European dining in the heart of Shoreditch. Seasonal ingredients, refined flavours.",
    url: "https://thikana.london",
    telephone: "+44 20 1234 5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Example Street",
      addressLocality: "London",
      postalCode: "W1",
      addressCountry: "GB",
    },
    servesCuisine: ["European", "South Indian"],
    priceRange: "£££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "23:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${playfair.variable} ${inter.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
