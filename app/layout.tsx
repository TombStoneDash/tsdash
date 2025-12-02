import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://tsdash.com'),
  title: "tsdash.com | TombStone Dash Short Links",
  description: "Quick links to TombStone Dash projects and social profiles",
  openGraph: {
    title: "tsdash.com | Quick Links",
    description: "TombStone Dash short URL service",
    url: "https://tsdash.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
