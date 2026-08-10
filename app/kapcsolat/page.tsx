import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Kapcsolat" };

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow light">KAPCSOLAT</span>
          <h1>Mondd el, miben segíthetünk.</h1>
          <p>Az űrlap témája alapján automatikusan a megfelelő üzletághoz kerülhetne az érdeklődés.</p>
        </div>
      </section>
      <section className="form-section">
        <div className="container form-layout">
          <div className="form-aside">
            <span className="eyebrow">DIGYTALL OFFICE KFT.</span>
            <h2>Közvetlen elérhetőségek</h2>
            <div className="contact-list">
              <div><span>Cím</span><strong>1037 Budapest, Zay u. 3.</strong></div>
              <div><span>Telefon</span><a href="tel:+3612380021">+36 1 238 0021</a></div>
              <div><span>E-mail</span><a href="mailto:info@doky.hu">info@doky.hu</a></div>
              <div><span>Nyitvatartás</span><strong>Hétfő–péntek, 8:00–16:00</strong></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
