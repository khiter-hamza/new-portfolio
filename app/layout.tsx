import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorSpotlight from "@/components/CursorSpotlight";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khiter Hamza | Full-Stack Developer",
  description: "Portfolio of Khiter Hamza, a Full-Stack Developer specializing in AI, automation, and agentic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-white relative`}>
        <CursorSpotlight />
        <CustomCursor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
