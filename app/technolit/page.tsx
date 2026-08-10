import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Technolit" };

export default function TechnolitPage() {
  return (
    <><section className="subpage-hero"><div className="container subpage-grid"><div><span className="eyebrow light">TECHNOLIT</span><h1>Technolit ipari termékek.</h1><p>A Technolit üzletág a DOKY központi oldaláról továbbra is közvetlenül elérhető.</p><div className="hero-actions"><Link className="button light-button" href="/">Vissza az irányítóhoz</Link><Link className="button outline-light" href="/kapcsolat">Kapcsolat</Link></div></div><div className="subpage-placeholder"><span>TECHNOLIT<br />TARTALOM HELYE</span></div></div></section><section className="simple-content"><div className="container narrow-content"><span className="eyebrow">TECHNOLIT</span><h2>Külön üzletág, közvetlen eléréssel</h2><p>A DOKY főoldalról egyetlen lépéssel elérhető a Technolit kínálata és kapcsolódó tartalma.</p></div></section></>
  );
}
