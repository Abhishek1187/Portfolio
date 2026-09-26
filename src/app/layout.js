import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070f",
};

export const metadata = {
  title: "Abhishek Kumar — Software Developer",
  description: "Official portfolio of Abhishek Kumar. Software developer building real-time full-stack web applications with React.js, Node.js, Express.js, Firebase, MongoDB, and Supabase.",
  keywords: ["Abhishek Kumar", "Software Developer", "Full-Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Supabase", "Portfolio", "New Delhi"],
  authors: [{ name: "Abhishek Kumar" }],
  openGraph: {
    title: "Abhishek Kumar — Full-Stack Developer Portfolio",
    description: "Computer Science undergraduate building full-stack web applications and scalable real-time systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070f] text-[#f4f4ed] selection:bg-[#ff7a00] selection:text-black">
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
