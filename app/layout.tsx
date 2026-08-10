import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = { title: { default: "DOKY – Digytall Office", template: "%s | DOKY" }, description: "Digytall Office – irodatechnika, szerviz és kerámia kés webshop." };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="hu"><body><a className="skip-link" href="#main-content">Ugrás a tartalomhoz</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
