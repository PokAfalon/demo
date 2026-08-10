import type { Metadata } from "next";
import Link from "next/link";
import { ProductFilter } from "@/components/ProductFilter";

export const metadata: Metadata = { title: "Irodatechnika" };

export default function OfficePage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container subpage-grid">
          <div>
            <span className="eyebrow light">KYOCERA IRODATECHNIKA</span>
            <h1>Találd meg gyorsan a megfelelő készüléket.</h1>
            <p>Szűrj méret, funkció és felhasználási igény szerint, vagy kérj segítséget a megfelelő készülék kiválasztásához.</p>
            <div className="hero-actions">
              <a className="button light-button" href="#katalogus">Katalógus</a>
              <Link className="button outline-light" href="/kapcsolat">Szakértői segítség</Link>
            </div>
          </div>
          <div className="subpage-placeholder"><span>KIEMELT KÉSZÜLÉK<br />KÉPÉNEK HELYE</span></div>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container stat-grid">
          <div><strong>A4 és A3</strong><span>Készülékek minden irodai mérethez</span></div>
          <div><strong>Színes és mono</strong><span>A feladathoz igazítható kínálat</span></div>
          <div><strong>Szervizháttér</strong><span>Nem maradsz egyedül a vásárlás után</span></div>
        </div>
      </section>

      <section className="catalog-section" id="katalogus">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">KÉSZÜLÉKKATALÓGUS</span><h2>Gyorsan szűrhető kínálat</h2></div>
            <p>A legfontosabb adatok gyorsan összehasonlíthatók, a részletes műszaki információk pedig külön termékoldalon érhetők el.</p>
          </div>
          <ProductFilter />
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-panel">
          <div><span className="eyebrow light">SZEMÉLYRE SZABOTT AJÁNLAT</span><h2>Nem csak gépet, megoldást keresel?</h2><p>Írd meg a havi terhelést és az elvárt funkciókat, segítünk választani.</p></div>
          <Link className="button light-button" href="/kapcsolat">Ajánlatot kérek</Link>
        </div>
      </section>
    </>
  );
}
