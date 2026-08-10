"use client";

import { useEffect, useState } from "react";

type CookiePrefs = { analytics: boolean; marketing: boolean };

export function CookieSettings() {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("doky-demo-cookie-prefs");
      if (!raw) return;
      const prefs = JSON.parse(raw) as CookiePrefs;
      setAnalytics(Boolean(prefs.analytics));
      setMarketing(Boolean(prefs.marketing));
    } catch {
      // A demo a mentés nélkül is használható.
    }
  }, []);

  function save() {
    try {
      window.localStorage.setItem("doky-demo-cookie-prefs", JSON.stringify({ analytics, marketing }));
    } catch {
      // Nincs teendő.
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  function acceptAll() {
    setAnalytics(true);
    setMarketing(true);
    try { window.localStorage.setItem("doky-demo-cookie-prefs", JSON.stringify({ analytics: true, marketing: true })); } catch {}
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  function rejectOptional() {
    setAnalytics(false);
    setMarketing(false);
    try { window.localStorage.setItem("doky-demo-cookie-prefs", JSON.stringify({ analytics: false, marketing: false })); } catch {}
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  return (
    <div className="cookie-settings-card">
      <div className="cookie-setting-row locked"><div><strong>Szükséges sütik</strong><p>A weboldal alapvető működéséhez szükségesek, ezért nem kapcsolhatók ki.</p></div><span className="cookie-status">Mindig aktív</span></div>
      <label className="cookie-setting-row"><div><strong>Statisztikai sütik</strong><p>Segíthetnek megérteni, hogyan használják a látogatók az oldalt.</p></div><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /></label>
      <label className="cookie-setting-row"><div><strong>Marketing sütik</strong><p>Az éles rendszerben csak külön hozzájárulás után aktiválódnának.</p></div><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} /></label>
      <div className="cookie-actions"><button className="button secondary" type="button" onClick={rejectOptional}>Csak szükséges</button><button className="button secondary" type="button" onClick={acceptAll}>Összes elfogadása</button><button className="button primary" type="button" onClick={save}>Beállítások mentése</button></div>
      {saved && <div className="inline-success" role="status">✓ A demo elmentette a beállításokat ebben a böngészőben.</div>}
    </div>
  );
}
