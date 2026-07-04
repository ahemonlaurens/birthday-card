import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bon anniversaire",
  description: "Carte d'anniversaire multilingue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
