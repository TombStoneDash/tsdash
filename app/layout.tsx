import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://tsdash.com'),
  title: "The Dash | TombStone Dash",
  description: "The dash between your birth and death dates represents everything. Make your dash count. A philosophy on living meaningfully by TombStone Dash.",
  openGraph: {
    title: "The Dash | Make Your Dash Count",
    description: "Between those two dates on a tombstone lies a simple dash. That dash represents everything: every breath, every choice, every moment of your life.",
    url: "https://tsdash.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dash | Make Your Dash Count",
    description: "What matters isn't when it began or when it ends—it's what you do with that dash.",
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
