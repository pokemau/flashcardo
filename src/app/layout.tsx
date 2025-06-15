import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "Flashcardo",
  description: "Create Flashcards! :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" richColors theme="light" />
      </body>
    </html>
  );
}

