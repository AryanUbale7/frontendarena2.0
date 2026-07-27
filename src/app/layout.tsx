import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import Cursor from "@/components/animations/Cursor";
import LoadingScreen from "@/components/animations/LoadingScreen";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Arena | Premium Digital Product Studio",
  description: "Award-winning software company specializing in Website Development, SaaS Applications, AI Solutions, UI/UX Design, Web Applications, and Custom Software Development.",
  keywords: ["Digital Product Studio", "SaaS Development", "AI Solutions", "Web Development", "UI/UX Design", "Custom Software", "Frontend Arena"],
  authors: [{ name: "Frontend Arena" }],
  openGraph: {
    title: "Frontend Arena | Premium Digital Product Studio",
    description: "Specializing in high-performance SaaS applications, custom web design, and AI solutions.",
    url: "https://frontendarena.com",
    siteName: "Frontend Arena",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frontend Arena",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-[#030712] text-slate-900 dark:text-slate-50 transition-colors duration-300 overflow-x-hidden">
        <LoadingScreen />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
