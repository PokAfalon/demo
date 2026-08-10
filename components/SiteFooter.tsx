import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">DIGYTALL OFFICE</div>
          <p className="footer-intro">Irodatechnika, szerviz és kapcsolódó termékterületek egy átlátható, könnyen elérhető rendszerben.</p>
        </div>
        <div><h3>Üzletágak</h3><Link href="/irodatechnika">Irodatechnika</Link><Link href="/szerviz">Szolgáltatások</Link><Link href="/technolit">Technolit</Link><Link href="/keramia-kesek">Kerámia kések</Link></div>
        <div><h3>Kapcsolat</h3><p>1037 Budapest, Zay u. 3.</p><a href="tel:+3612380021">+36 1 238 0021</a><a href="mailto:info@doky.hu">info@doky.hu</a></div>
        <div><h3>Kapcsolódó oldalak</h3><a href="https://www.kyoceramasolok.com" target="_blank" rel="noreferrer">kyoceramasolok.com</a><a href="https://www.keramiakes.com" target="_blank" rel="noreferrer">keramiakes.com</a><a href="https://www.gboxegom.com" target="_blank" rel="noreferrer">gboxegom.com</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Digytall Office Kft.</span><div><Link href="/adatkezeles">Adatkezelés</Link><Link href="/suti-beallitasok">Süti beállítások</Link></div></div>
    </footer>
  );
}
