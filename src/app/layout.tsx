import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Food App",
  description: "Discover and share meals with the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-zinc-950 text-zinc-100 min-h-screen">
        <Navbar />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
