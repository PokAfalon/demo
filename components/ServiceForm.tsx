"use client";

import { FormEvent, useState } from "react";

export function ServiceForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success-panel" role="status">
        <span>✓</span>
        <h3>Köszönjük a bejelentést!</h3>
        <p>A demo szerint az adatok sikeresen elküldésre kerültek. Éles rendszerben innen indulna az e-mailes és adatbázisos feldolgozás.</p>
        <button className="button secondary" type="button" onClick={() => setSent(false)}>Új bejelentés</button>
      </div>
    );
  }

  return (
    <form className="service-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Név / cégnév
          <input required name="name" placeholder="Példa Kft." />
        </label>
        <label>
          Telefonszám
          <input required name="phone" placeholder="+36 30 123 4567" />
        </label>
        <label>
          E-mail
          <input required type="email" name="email" placeholder="kapcsolat@pelda.hu" />
        </label>
        <label>
          Készülék típusa
          <input required name="device" placeholder="Pl. TASKalfa 3554ci" />
        </label>
        <label className="full-field">
          Miben segíthetünk?
          <select name="type" defaultValue="hiba">
            <option value="hiba">Hibabejelentés</option>
            <option value="karbantartas">Karbantartás</option>
            <option value="telepites">Telepítés / beüzemelés</option>
            <option value="tanacsadas">Tanácsadás</option>
          </select>
        </label>
        <label className="full-field">
          Rövid hibaleírás
          <textarea required name="message" rows={5} placeholder="Írd le röviden, mit tapasztalsz…" />
        </label>
      </div>
      <label className="checkbox-row">
        <input required type="checkbox" />
        <span>Elfogadom az adatkezelési tájékoztatóban foglaltakat.</span>
      </label>
      <button className="button primary wide-mobile" type="submit">Bejelentés elküldése</button>
    </form>
  );
}
