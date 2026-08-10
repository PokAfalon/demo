"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success-panel contact-success" role="status">
        <span>✓</span>
        <h3>Az üzenetet a demo fogadta.</h3>
        <p>Éles rendszerben az érdeklődés a kiválasztott témához kerülne, és e-mailes visszaigazolás is kiküldhető.</p>
        <button className="button secondary" type="button" onClick={() => setSent(false)}>Új üzenet</button>
      </div>
    );
  }

  return (
    <form className="service-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Név<input required name="name" placeholder="Teljes név" /></label>
        <label>E-mail<input required name="email" type="email" placeholder="nev@ceg.hu" /></label>
        <label className="full-field">Téma<select name="topic" defaultValue="irodatechnika"><option value="irodatechnika">Irodatechnika / ajánlatkérés</option><option value="szerviz">Szerviz</option><option value="keramia">Kerámia kések / rendelés</option><option value="egyeb">Egyéb</option></select></label>
        <label className="full-field">Üzenet<textarea required name="message" rows={7} placeholder="Írd meg röviden a kérdésed…" /></label>
      </div>
      <label className="checkbox-row"><input required type="checkbox" /><span>Elfogadom az adatkezelési tájékoztatót.</span></label>
      <button className="button primary" type="submit">Üzenet elküldése</button>
    </form>
  );
}
