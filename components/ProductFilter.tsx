"use client";

import { FormEvent, useMemo, useState } from "react";
import { products, type OfficeProduct } from "@/lib/data";

const filters = ["Mind", "Színes", "Fekete-fehér", "A4", "A3", "Nyomtató", "Multifunkciós"] as const;

export function ProductFilter() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Mind");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<OfficeProduct | null>(null);
  const [quote, setQuote] = useState<OfficeProduct | null>(null);
  const [quoteSent, setQuoteSent] = useState(false);

  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("hu-HU");
    return products.filter((product) => {
      const matchesFilter =
        filter === "Mind" ||
        product.color === filter ||
        product.format === filter ||
        product.type === filter;
      const matchesQuery = !normalized || `${product.name} ${product.summary} ${product.type} ${product.color} ${product.format}`.toLocaleLowerCase("hu-HU").includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  function openQuote(product: OfficeProduct) {
    setDetail(null);
    setQuote(product);
    setQuoteSent(false);
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuoteSent(true);
  }

  function clearSearch() {
    setFilter("Mind");
    setQuery("");
  }

  return (
    <>
      <div className="catalog-toolbar">
        <label className="search-field">
          <span className="sr-only">Keresés a készülékek között</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Keresés típus vagy tulajdonság alapján…" />
        </label>
        <div className="filter-row" aria-label="Termékszűrők">
          {filters.map((item) => (
            <button key={item} type="button" className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {(filter !== "Mind" || query) && (
        <div className="catalog-active-summary">
          <span>{visible.length} készülék a jelenlegi szűrésben</span>
          <button type="button" className="text-button" onClick={clearSearch}>Szűrők törlése</button>
        </div>
      )}

      <div className="product-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-media">
              <span>{product.format}</span>
              <small>Termékkép helye</small>
            </div>
            <div className="product-body">
              <div className="product-tags">
                <span>{product.color}</span>
                <span>{product.type}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <dl className="spec-row">
                <div><dt>Sebesség</dt><dd>{product.speed} oldal/perc</dd></div>
                <div><dt>Formátum</dt><dd>{product.format}</dd></div>
              </dl>
              <div className="card-actions">
                <button type="button" className="button secondary" onClick={() => setDetail(product)}>Részletek</button>
                <button type="button" className="button primary" onClick={() => openQuote(product)}>Ajánlatkérés</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="empty-state">
          <strong>Nincs a keresésnek megfelelő készülék.</strong>
          <p>Próbálj másik kifejezést vagy töröld a szűrőket.</p>
          <button className="button secondary" type="button" onClick={clearSearch}>Összes készülék</button>
        </div>
      )}

      {detail && (
        <div className="modal-backdrop" onMouseDown={() => setDetail(null)}>
          <div className="modal-panel product-modal office-product-modal" role="dialog" aria-modal="true" aria-labelledby="office-product-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setDetail(null)} aria-label="Bezárás">×</button>
            <div className="detail-media">KÉSZÜLÉKKÉP HELYE</div>
            <div>
              <span className="eyebrow">{detail.format} · {detail.color}</span>
              <h2 id="office-product-title">{detail.name}</h2>
              <p>{detail.summary}</p>
              <dl className="office-detail-specs">
                <div><dt>Típus</dt><dd>{detail.type}</dd></div>
                <div><dt>Formátum</dt><dd>{detail.format}</dd></div>
                <div><dt>Szín</dt><dd>{detail.color}</dd></div>
                <div><dt>Sebesség</dt><dd>{detail.speed} oldal/perc</dd></div>
              </dl>
              <p className="demo-note">Az éles termékoldalon itt jelennének meg a részletes műszaki adatok, opciók, tonerek és letölthető dokumentumok.</p>
              <div className="card-actions">
                <button className="button secondary" type="button" onClick={() => setDetail(null)}>Vissza</button>
                <button className="button primary" type="button" onClick={() => openQuote(detail)}>Ajánlatot kérek</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {quote && (
        <div className="modal-backdrop" onMouseDown={() => { setQuote(null); setQuoteSent(false); }}>
          <div className="modal-panel quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => { setQuote(null); setQuoteSent(false); }} aria-label="Bezárás">×</button>
            {!quoteSent ? (
              <>
                <span className="eyebrow">AJÁNLATKÉRÉS</span>
                <h2 id="quote-title">{quote.name}</h2>
                <p>Add meg az alapadatokat. A demo elküldés után visszaigazolja a folyamatot.</p>
                <form className="modal-form" onSubmit={submitQuote}>
                  <label>Név / cégnév<input required name="name" placeholder="Példa Kft." /></label>
                  <label>E-mail<input required name="email" type="email" placeholder="kapcsolat@pelda.hu" /></label>
                  <label>Telefonszám<input required name="phone" placeholder="+36 30 123 4567" /></label>
                  <label>Tervezett havi terhelés<input name="volume" type="number" min="0" placeholder="Pl. 5000 oldal" /></label>
                  <label className="full-field">Megjegyzés<textarea name="message" rows={4} placeholder="Pl. kell-e finisher, extra papírtálca, szkennelési igény…" /></label>
                  <label className="checkbox-row full-field"><input required type="checkbox" /><span>Elfogadom az adatkezelési tájékoztatót.</span></label>
                  <button className="button primary full-field" type="submit">Ajánlatkérés elküldése</button>
                </form>
              </>
            ) : (
              <div className="success-panel">
                <span>✓</span>
                <h3>Az ajánlatkérés elküldve a demóban</h3>
                <p>Éles rendszerben a készülék típusa és az űrlap adatai automatikusan bekerülhetnének az ajánlatkérési folyamatba.</p>
                <button className="button secondary" type="button" onClick={() => { setQuote(null); setQuoteSent(false); }}>Bezárás</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
