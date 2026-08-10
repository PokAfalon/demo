import type { Metadata } from "next";
import { ServiceHub } from "@/components/ServiceHub";

export const metadata: Metadata = { title: "Szolgáltatások" };

export default function ServicePage() {
  return (
    <>
      <section className="subpage-hero compact-hero"><div className="container subpage-grid"><div><span className="eyebrow light">SZOLGÁLTATÁSAINK</span><h1>Irodatechnikai ügyintézés egy helyen.</h1><p>Válaszd ki az ügy típusát, add meg a szükséges adatokat, és az üzenet közvetlenül a megfelelő témához kerül.</p></div><div className="subpage-placeholder"><span>6 SZOLGÁLTATÁS<br />EGY HELYEN</span></div></div></section>
      <section className="service-hub-section"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">TELJES SZOLGÁLTATÁSI KÍNÁLAT</span><h2>Válaszd ki a megfelelő ügyintézést</h2></div><p>Minden témához csak azokat az adatokat kérjük, amelyek az adott ügy gyorsabb feldolgozásához szükségesek.</p></div><ServiceHub /></div></section>
      <section className="cta-section"><div className="container cta-panel"><div><span className="eyebrow light">NEM TALÁLOD A MEGFELELŐT?</span><h2>Általános kérdésed van?</h2><p>A központi kapcsolatfelvétel továbbra is a megfelelő kollégához irányít.</p></div><a className="button light-button" href="/kapcsolat">Kapcsolat</a></div></section>
    </>
  );
}
