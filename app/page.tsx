import Link from "next/link";

const gatewayItems = [
  { href: "/irodatechnika", className: "office", kicker: "KYOCERA", title: "Irodatechnika", text: "Nyomtatók, multifunkciós készülékek és az irodai működéshez szükséges megoldások.", symbol: "▣" },
  { href: "/szerviz", className: "service", kicker: "KYOCERA", title: "Szerviz", text: "Hibabejelentés, karbantartás, szerződéses szerviz, bérlés és ügyintézés.", symbol: "⚙" },
  { href: "/technolit", className: "technolit", kicker: "TECHNOLIT", title: "Ipari termékek", text: "Ipari felhasználásra szánt termékek és megoldások külön üzletági felületen.", symbol: "◫" },
  { href: "/keramia-kesek", className: "knife", kicker: "KYOCERA", title: "Kerámia kések", text: "Kerámia kések, készletek, edények és konyhai kiegészítők webshopja.", symbol: "╱" }
];

export default function HomePage() {
  return (
    <>
      <section className="legacy-gateway" aria-labelledby="gateway-title">
        <h1 id="gateway-title" className="sr-only">Digytall Office üzletágak</h1>
        <div className="gateway-grid">
          {gatewayItems.map((item) => (
            <Link key={item.title} className={`gateway-tile ${item.className}`} href={item.href}>
              <div className="gateway-heading"><span>{item.kicker}</span><strong>{item.title}</strong></div>
              <div className="gateway-art" aria-hidden="true"><i>{item.symbol}</i><b>KÉP HELYE</b></div>
              <p>{item.text}</p><em>Tovább →</em>
            </Link>
          ))}
          <div className="gateway-center" aria-label="Digytall Office központi információ">
            <span className="center-orbit">D</span>
            <strong>DIGYTALL<br />OFFICE</strong>
            <small>1037 BUDAPEST, ZAY U. 3.<br />+36 1 238 0021<br />INFO@DOKY.HU</small>
          </div>
        </div>
      </section>

      <section className="gateway-explainer">
        <div className="container explainer-grid">
          <div><span className="eyebrow">EGY HELY, TÖBB SZAKTERÜLET</span><h2>Válaszd ki, miben segíthetünk.</h2></div>
          <div><p>A DOKY központi oldala gyorsan a megfelelő üzletághoz irányít, miközben a legfontosabb szolgáltatásokat és elérhetőségeket is egy helyen mutatja meg.</p><Link className="text-link" href="/kapcsolat">Kapcsolatfelvétel →</Link></div>
        </div>
      </section>

      <section className="home-service-preview">
        <div className="container">
          <div className="section-heading split-heading"><div><span className="eyebrow">IRODATECHNIKAI SZOLGÁLTATÁSOK</span><h2>Gyors ügyintézés a megfelelő témában</h2></div><p>Nem kell általános e-mailben leírnod mindent: válaszd ki a témát, és a megfelelő űrlap vezeti végig az adatokat.</p></div>
          <div className="preview-service-grid">
            {["Hibabejelentés", "Restart akció", "Szerződéses szerviz", "Bérlés", "Számlálóállás", "Finanszírozás"].map((name, index) => <article key={name}><span>0{index + 1}</span><strong>{name}</strong><p>Rövid, célzott ügyintézés a szükséges adatokkal.</p></article>)}
          </div>
          <div className="section-action"><Link className="button primary" href="/szerviz">Szolgáltatások megnyitása</Link></div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-grid">
          <div><span className="eyebrow light">DIGYTALL OFFICE</span><h2>Nem csak terméket, működő megoldást keresünk.</h2><p>Az eszköz kiválasztásától a beüzemelésen és karbantartáson át a későbbi szervizig egyértelmű kapcsolódási pontokat adunk.</p></div>
          <div className="trust-points"><article><b>01</b><div><strong>Szakértői segítség</strong><p>Segítség a megfelelő készülék és szolgáltatás kiválasztásában.</p></div></article><article><b>02</b><div><strong>Átlátható ügyintézés</strong><p>Külön folyamatok az ajánlatkéréshez, szervizhez és kapcsolattartáshoz.</p></div></article><article><b>03</b><div><strong>Értékesítés utáni támogatás</strong><p>A kapcsolat a vásárlással nem ér véget.</p></div></article></div>
        </div>
      </section>

      <section className="network-section"><div className="container network-grid"><div><span className="eyebrow">KAPCSOLÓDÓ OLDALAK</span><h2>Minden terület a saját felületén, mégis egységes rendszerben.</h2></div><div className="network-links"><a href="https://www.kyoceramasolok.com" target="_blank" rel="noreferrer"><span>Irodatechnika</span><strong>kyoceramasolok.com</strong><b>↗</b></a><a href="https://www.keramiakes.com" target="_blank" rel="noreferrer"><span>Webshop</span><strong>keramiakes.com</strong><b>↗</b></a><a href="https://www.gboxegom.com" target="_blank" rel="noreferrer"><span>Kapcsolódó cég</span><strong>gboxegom.com</strong><b>↗</b></a></div></div></section>
    </>
  );
}
