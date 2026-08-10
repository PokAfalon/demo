import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Adatkezelés" };

export default function PrivacyPage() {
  return (
    <>
      <section className="contact-hero legal-hero"><div className="container"><span className="eyebrow light">JOGI INFORMÁCIÓ</span><h1>Adatkezelési tájékoztató – demo oldal</h1><p>Ez a prototípus azt mutatja, hol és hogyan jelenhetne meg az éles adatkezelési tájékoztató.</p></div></section>
      <section className="simple-content"><div className="container narrow-content legal-content">
        <span className="eyebrow">DEMO TARTALOM</span>
        <h2>Átlátható, könnyen olvasható jogi oldal</h2>
        <p>Az éles változatban ide kerülne az adatkezelő pontos azonosítása, az adatkezelési célok és jogalapok, a kezelt adatok köre, a megőrzési idők, az adatfeldolgozók, az érintetti jogok és a kapcsolattartási adatok.</p>
        <h3>Űrlapok és ajánlatkérések</h3><p>A kapcsolatfelvételi és szervizűrlapoknál külön jelezhető, milyen adatot miért kér a rendszer, és meddig őrzi meg.</p>
        <h3>Webshop</h3><p>A rendeléshez, szállításhoz, számlázáshoz és fizetéshez szükséges adatkezelési információk külön, jól elkülönített fejezetet kaphatnak.</p>
        <h3>Sütik</h3><p>A nem szükséges sütik csak a felhasználó választása után aktiválódhatnak. A kapcsolódó demó beállítópanel külön oldalon kipróbálható.</p>
        <div className="section-action"><Link className="button primary" href="/suti-beallitasok">Süti beállítások megnyitása</Link></div>
      </div></section>
    </>
  );
}
