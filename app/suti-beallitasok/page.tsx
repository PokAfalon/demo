import type { Metadata } from "next";
import { CookieSettings } from "@/components/CookieSettings";

export const metadata: Metadata = { title: "Süti beállítások" };

export default function CookieSettingsPage() {
  return (
    <>
      <section className="contact-hero legal-hero"><div className="container"><span className="eyebrow light">ADATVÉDELEM</span><h1>Süti beállítások</h1><p>A panel működő demó: a választásokat a böngésző helyi tárhelyén jegyzi meg.</p></div></section>
      <section className="simple-content"><div className="container narrow-content"><span className="eyebrow">BEÁLLÍTÁSOK</span><h2>Te döntöd el, mi legyen aktív</h2><p>A szükséges sütik mellett a statisztikai és marketing célú sütik külön kapcsolhatók.</p><CookieSettings /></div></section>
    </>
  );
}
