import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Star - Developer & Creator",
  description: "Expert in Discord Bots, Minecraft Plugins, Web Development, and innovative projects. Crafting digital experiences with passion and precision.",
  keywords: ["Discord Bots", "Minecraft Plugins", "Web Development", "eSports", "Developer", "Star"],
  authors: [{ name: "Star" }],
  openGraph: {
    title: "Star - Developer & Creator",
    description: "Expert in Discord Bots, Minecraft Plugins, Web Development, and innovative projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="relative min-h-screen">
          {/* Background gradient effect */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full filter blur-[128px] animate-pulse-glow"></div>
            <div className="absolute top-60 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[128px] animate-pulse-glow animation-delay-400"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-[128px] animate-pulse-glow animation-delay-200"></div>
          </div>
          
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
