"use client";

import { FormEvent, useState } from "react";

type ServiceItem = { id: string; title: string; kicker: string; description: string; details: string; action: string; symbol: string; featured?: boolean };

const services: ServiceItem[] = [
  { id: "hiba", title: "Szerviz és hibabejelentés", kicker: "JAVÍTÁS", description: "Gyors bejelentés Kyocera nyomtatókhoz és multifunkciós készülékekhez.", details: "Add meg a készülék típusát, a hibajelenséget és az elérhetőségedet. A bejelentés a szervizes kollégához kerül.", action: "Hiba bejelentése", symbol: "⚙" },
  { id: "restart", title: "Restart AKCIÓ", kicker: "ÁLLAPOTFELMÉRÉS", description: "Első karbantartás és állapotfelmérés nálunk még nem regisztrált Kyocera felhasználóknak.", details: "A kiemelt ajánlat külön, jól látható blokkban marad. Az éles oldalon az aktuális ár és feltételek adminból módosíthatók.", action: "Restart akció igénylése", symbol: "↻", featured: true },
  { id: "szerzodes", title: "Mindenre kiterjedő szerviz", kicker: "SZERZŐDÉSES SZOLGÁLTATÁS", description: "Tervezhető üzemeltetés, időszakos karbantartás és kopó alkatrészek cseréje.", details: "A szerződés a meglévő vagy új géppark igényeihez igazítható, hogy a szükséges festék és karbantartás tervezhető legyen.", action: "Ajánlatot kérek", symbol: "✓" },
  { id: "berles", title: "Bérlés", kicker: "RUGALMAS KONSTRUKCIÓ", description: "Nagy értékű fénymásolók és multifunkciós készülékek bérlése egy vagy több gépre.", details: "Rövid igényfelmérés után a havi terheléshez, funkciókhoz és időtartamhoz illeszkedő ajánlat készíthető.", action: "Bérlési ajánlat", symbol: "▣" },
  { id: "szamlalo", title: "Számlálóállás bejelentése", kicker: "ONLINE JELENTÉS", description: "A készülék aktuális számlálóállásának gyors és egyértelmű beküldése.", details: "A formon több készülék is rögzíthető lenne, és az adatok automatikusan a megfelelő szerződéshez kapcsolhatók.", action: "Jelentés készítése", symbol: "#" },
  { id: "finanszirozas", title: "Finanszírozás", kicker: "BERUHÁZÁSI LEHETŐSÉG", description: "Nagy értékű készülékek részletre történő megvásárlásának előkészítése.", details: "A látogató megadhatja a kívánt készüléket, a tervezett darabszámot és a kapcsolattartási adatokat.", action: "Finanszírozási ajánlat", symbol: "Ft" }
];

export function ServiceHub() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const [sent, setSent] = useState(false);

  function close() { setSelected(null); setSent(false); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return (
    <>
      <div className="service-cards">
        {services.map((service) => (
          <article className={`service-card ${service.featured ? "featured" : ""}`} key={service.id}>
            <div className="service-symbol">{service.symbol}</div>
            <div className="service-card-copy"><span>{service.kicker}</span><h3>{service.title}</h3><p>{service.description}</p><small>{service.details}</small></div>
            <button className={`button ${service.featured ? "light-button" : "primary"}`} type="button" onClick={() => setSelected(service)}>{service.action}</button>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={close}>
          <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={close} aria-label="Bezárás">×</button>
            {!sent ? <><span className="eyebrow">{selected.kicker}</span><h2 id="service-modal-title">{selected.title}</h2><p>{selected.details}</p><form className="modal-form" onSubmit={submit}><label>Név / cégnév<input required placeholder="Példa Kft." /></label><label>E-mail<input required type="email" placeholder="kapcsolat@pelda.hu" /></label><label>Telefonszám<input required placeholder="+36 30 123 4567" /></label>{selected.id === "hiba" && <label>Készülék típusa<input required placeholder="Pl. TASKalfa 3554ci" /></label>}{selected.id === "szamlalo" && <><label>Készülék azonosító<input required placeholder="Gépszám vagy sorozatszám" /></label><label>Számlálóállás<input required type="number" min="0" placeholder="0" /></label></>}<label className="full-field">Megjegyzés<textarea rows={4} placeholder="További részletek…" /></label><label className="checkbox-row full-field"><input required type="checkbox" /><span>Elfogadom az adatkezelési tájékoztatót.</span></label><button className="button primary full-field" type="submit">{selected.action}</button></form></> : <div className="success-panel"><span>✓</span><h3>A demo űrlap sikeresen elküldve</h3><p>Éles rendszerben innen e-mail, Supabase bejegyzés és belső értesítés készülhet.</p><button className="button secondary" type="button" onClick={close}>Bezárás</button></div>}
          </div>
        </div>
      )}
    </>
  );
}
