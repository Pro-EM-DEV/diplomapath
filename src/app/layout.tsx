import type { Metadata } from "next";
import { Inter, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DiplomaPath India | #1 Career Guide for Diploma Engineering Students",
  description: "Transform your diploma into a dream career. India's most trusted premium platform for polytechnic students — career roadmaps, salary insights, interview prep, college guidance, and expert mentorship.",
  keywords: "diploma engineering, career guidance, polytechnic, diploma jobs India, PLC training, diploma to B.Tech, lateral entry, government jobs diploma, diploma salary, engineering career",
  authors: [{ name: "Amit K Pathak", url: "https://diplomapath.corender.com" }],
  openGraph: {
    title: "DiplomaPath India | From Diploma to Dream Career",
    description: "India's #1 premium career guidance platform for diploma engineering students. Expert roadmaps, salary data, and interview preparation.",
    url: "https://diplomapath.com",
    siteName: "DiplomaPath India",
    images: [
      {
        url: "https://diplomapath.com/bg.jpg",
        width: 1200,
        height: 630,
        alt: "DiplomaPath India Cover Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiplomaPath India | #1 Career Guide",
    description: "Transform your diploma into a dream career. Get expert roadmaps, salary insights, and mentorship.",
    images: ["https://diplomapath.com/bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://diplomapath.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${dancingScript.variable} antialiased font-sans text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
