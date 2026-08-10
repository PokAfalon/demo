"use client";

import { useMemo, useState } from "react";
import { ShopDemo } from "@/components/ShopDemo";
import { shopCategoryGroups, type ShopCategoryGroupId } from "@/lib/shopCategoryGroups";
import { shopProducts } from "@/lib/shopProducts";

const categoryCards = shopCategoryGroups.filter((group) => group.id !== "all");

const promises = [
  { title: "Könnyebb választás", text: "Kategóriák, alkategóriák és célzott szűrők segítenek gyorsan szűkíteni a kínálatot." },
  { title: "Átlátható termékoldalak", text: "A lényeg azonnal látszik: típus, cikkszám, elérhetőség, ár és a fontos tulajdonságok." },
  { title: "Egyszerű rendelés", text: "A kosártól a pénztárig rövid, kiszámítható folyamat vezeti végig a vásárlót." },
];

const editorialCards = [
  { eyebrow: "MINDENNAPI HASZNÁLAT", title: "Az első kerámia késedhez", text: "Általános konyhai feladatokra olyan méretet érdemes választani, amely kényelmesen kezelhető és többféle alapanyaghoz használható.", action: "Kések megtekintése", group: "knives" as ShopCategoryGroupId },
  { eyebrow: "AJÁNDÉKÖTLET", title: "Készletben gondolkodsz?", text: "A szettek egységes megjelenést és több feladatra használható összeállítást adnak egy csomagban.", action: "Készletek megtekintése", group: "sets" as ShopCategoryGroupId },
  { eyebrow: "KONYHAI KIEGÉSZÍTŐK", title: "Ne csak a késre gondolj", text: "Hámozók, szeletelők, malmok és egyéb eszközök segíthetnek gyorsabbá és rendezettebbé tenni az előkészítést.", action: "Kiegészítők felfedezése", group: "preparation" as ShopCategoryGroupId },
];

export function ShopCatalogPage() {
  const [selectedGroup, setSelectedGroup] = useState<ShopCategoryGroupId>("all");

  const categoryCounts = useMemo(() => {
    return Object.fromEntries(
      categoryCards.map((card) => [
        card.title,
        shopProducts.filter((product) => card.categories.includes(product.category)).length,
      ]),
    ) as Record<string, number>;
  }, []);

  function selectCategoryGroup(groupId: ShopCategoryGroupId) {
    setSelectedGroup(groupId);
    window.requestAnimationFrame(() => {
      document.getElementById("termekek")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <nav className="shop-subnav" aria-label="Kerámiakés webshop navigáció">
        <div className="container shop-subnav-inner">
          <a className="shop-wordmark" href="#shop-top" aria-label="Kerámiakés webshop kezdőlap">
            <span>KYOCERA</span><strong>KERÁMIAKÉS</strong>
          </a>
          <div className="shop-subnav-links">
            <a href="#kategoriak">Kategóriák</a>
            <a href="#termekek">Termékek</a>
            <a href="#utmutato">Választási útmutató</a>
            <a href="#gyik">GYIK</a>
          </div>
        </div>
      </nav>

      <section className="shop-premium-hero" id="shop-top">
        <div className="container shop-premium-hero-grid">
          <div className="shop-premium-copy">
            <span className="eyebrow light">KERÁMIA KÉSEK ÉS KONYHAI ESZKÖZÖK</span>
            <h1>Precíz eszközök a mindennapi konyhához.</h1>
            <p className="hero-lead">
              Kések, készletek és praktikus konyhai kiegészítők egy átlátható webshopban.
              Találd meg gyorsan azt, ami a saját főzési szokásaidhoz illik.
            </p>
            <div className="hero-actions">
              <button className="button light-button" type="button" onClick={() => selectCategoryGroup("all")}>Vásárlás</button>
              <a className="button outline-light" href="#utmutato">Segítség a választáshoz</a>
            </div>
            <div className="hero-proof-row" aria-label="Webshop előnyök">
              <span>Átlátható kategóriák</span>
              <span>Részletes szűrés</span>
              <span>Mobilbarát vásárlás</span>
            </div>
          </div>
          <div className="hero-product-stage" aria-label="Kiemelt termék képhelye">
            <span className="stage-badge">KIEMELT</span>
            <div className="stage-image-placeholder"><b>TERMÉKKÉP</b><small>helye</small></div>
            <div className="stage-caption"><strong>Kiemelt termék vagy kollekció</strong><span>Itt kap helyet a fő vizuál és egy rövid terméküzenet.</span></div>
          </div>
        </div>
      </section>

      <section className="shop-promise-strip">
        <div className="container shop-promise-grid">
          {promises.map((item, index) => (
            <article key={item.title}><span>0{index + 1}</span><div><strong>{item.title}</strong><p>{item.text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="category-discovery premium-categories" id="kategoriak" aria-labelledby="category-heading">
        <div className="container">
          <div className="section-heading category-heading-row">
            <div>
              <span className="eyebrow">VÁSÁROLJ KATEGÓRIA SZERINT</span>
              <h2 id="category-heading">Indulj abból, amire szükséged van</h2>
              <p>Kevesebb menüpont, világosabb csoportok. Az alkategóriák és részletes szűrők a terméklistában jelennek meg.</p>
            </div>
            <button className="text-button category-all-button" type="button" onClick={() => selectCategoryGroup("all")}>
              Teljes kínálat ({shopProducts.length})
            </button>
          </div>

          <div className="category-card-grid category-card-grid-v6">
            {categoryCards.map((card, index) => {
              const active = selectedGroup === card.id;
              return (
                <button
                  key={card.title}
                  type="button"
                  className={`category-discovery-card category-discovery-card-v6${active ? " active" : ""}`}
                  onClick={() => selectCategoryGroup(card.id)}
                  aria-pressed={active}
                >
                  <div className="category-visual-placeholder"><span>0{index + 1}</span><small>KÉP HELYE</small></div>
                  <div className="category-v6-copy">
                    <span className="category-card-count">{categoryCounts[card.title]} termék</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="category-card-tags">{card.highlights.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
                    <strong>Megnézem <span aria-hidden="true">→</span></strong>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="collection-band" aria-labelledby="collection-heading">
        <div className="container">
          <div className="section-heading split-heading compact-heading">
            <div><span className="eyebrow light">NÉPSZERŰ IRÁNYOK</span><h2 id="collection-heading">Ne terméklistából kelljen kitalálnod, merre indulj</h2></div>
            <p>Rövid útmutatók vezetik a vásárlót a releváns termékcsoporthoz, így a webshop nem csak katalógus, hanem segítséget is ad.</p>
          </div>
          <div className="editorial-grid">
            {editorialCards.map((card) => (
              <article key={card.title}>
                <span>{card.eyebrow}</span><h3>{card.title}</h3><p>{card.text}</p>
                <button type="button" onClick={() => selectCategoryGroup(card.group)}>{card.action} →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-section shop-section-v6" id="termekek">
        <div className="container">
          <ShopDemo selectedGroup={selectedGroup} onSelectedGroupChange={setSelectedGroup} />
        </div>
      </section>

      <section className="choice-guide" id="utmutato">
        <div className="container choice-guide-grid">
          <div className="choice-guide-copy">
            <span className="eyebrow">VÁLASZTÁSI ÚTMUTATÓ</span>
            <h2>Melyik termék illik hozzád?</h2>
            <p>Nem minden vásárló ismeri a sorozatokat vagy cikkszámokat. A webshop ezért feladat szerint is segít választani.</p>
          </div>
          <div className="choice-guide-steps">
            <article><span>01</span><div><strong>Mit készítesz a leggyakrabban?</strong><p>Általános főzés, zöldség-előkészítés, húsok vagy tálalás?</p></div></article>
            <article><span>02</span><div><strong>Mekkora eszköz kényelmes?</strong><p>A termékoldal röviden megmutatja, mire való az adott méret és kialakítás.</p></div></article>
            <article><span>03</span><div><strong>Egy darab vagy készlet?</strong><p>Ha több feladatra keresel megoldást, a készletek egyszerűbb kiindulópontot adhatnak.</p></div></article>
          </div>
        </div>
      </section>

      <section className="why-ceramic-section">
        <div className="container why-ceramic-grid">
          <div className="why-ceramic-placeholder"><span>ÉLETMÓD / HASZNÁLATI<br />KÉP HELYE</span></div>
          <div>
            <span className="eyebrow light">MIÉRT KERÁMIA?</span>
            <h2>Könnyű, precíz és egyszerűen kezelhető.</h2>
            <p>A kerámia penge kis tömege és kemény anyaga miatt sok hétköznapi szeletelési feladathoz kényelmes választás. A termékoldalakon egyértelműen jelezzük, mire ajánlott és mire nem.</p>
            <div className="why-points">
              <span><b>01</b> Könnyű kialakítás</span>
              <span><b>02</b> Precíz szeletelés</span>
              <span><b>03</b> Egyszerű termékválasztás</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-faq" id="gyik">
        <div className="container shop-faq-grid">
          <div><span className="eyebrow">GYAKORI KÉRDÉSEK</span><h2>Vásárlás előtt jó tudni</h2><p>A legfontosabb kérdések röviden, közvetlenül a webshopban.</p></div>
          <div className="faq-list">
            <details open><summary>Mire használható egy kerámia kés?</summary><p>Elsősorban olyan szeletelési és aprítási feladatokra érdemes választani, amelyekhez nem szükséges csontot, fagyasztott alapanyagot vagy nagyon kemény felületet vágni.</p></details>
            <details><summary>Hogyan válasszak méretet?</summary><p>A kisebb kések finomabb előkészítéshez, a hosszabb pengék nagyobb alapanyagok szeleteléséhez praktikusak. A termékoldalon ezt külön, egyszerű ajánlással érdemes jelezni.</p></details>
            <details><summary>Hol látom, hogy egy termék rendelhető-e?</summary><p>A készlet- vagy rendelhetőségi állapot közvetlenül a termékkártyán és a részletes termékoldalon is megjelenik.</p></details>
          </div>
        </div>
      </section>

      <section className="shop-final-cta">
        <div className="container shop-final-cta-inner">
          <div><span className="eyebrow light">TELJES KÍNÁLAT</span><h2>Készen állsz választani?</h2><p>Használd a kategóriákat, a keresőt és a szűrőket, hogy néhány lépésből eljuss a megfelelő termékhez.</p></div>
          <button className="button light-button" type="button" onClick={() => selectCategoryGroup("all")}>Termékek megtekintése</button>
        </div>
      </section>
    </>
  );
}
