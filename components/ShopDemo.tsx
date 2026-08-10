"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { shopCategoryGroups, type ShopCategoryGroupId } from "@/lib/shopCategoryGroups";
import {
  shopProducts,
  type ShopAvailability,
  type ShopProduct,
} from "@/lib/shopProducts";

type CartLine = { product: ShopProduct; quantity: number };
type SortMode = "featured" | "name" | "price-asc" | "price-desc";
type AvailabilityFilter = ShopAvailability;

const money = new Intl.NumberFormat("hu-HU", {
  style: "currency",
  currency: "HUF",
  maximumFractionDigits: 0,
});
const pageSize = 12;
const catalogMinPrice = Math.min(...shopProducts.map((product) => product.price));
const catalogMaxPrice = Math.max(...shopProducts.map((product) => product.price));

type ShopDemoProps = {
  selectedGroup: ShopCategoryGroupId;
  onSelectedGroupChange: (group: ShopCategoryGroupId) => void;
};

type FilterPanelProps = {
  groupCounts: Record<ShopCategoryGroupId, number>;
  selectedGroup: ShopCategoryGroupId;
  selectGroup: (group: ShopCategoryGroupId) => void;
  availableSubcategories: { name: string; count: number }[];
  selectedSubcategories: string[];
  toggleSubcategory: (subcategory: string) => void;
  selectedAvailability: AvailabilityFilter[];
  toggleAvailability: (availability: AvailabilityFilter) => void;
  onlySale: boolean;
  setOnlySale: (value: boolean) => void;
  onlyNew: boolean;
  setOnlyNew: (value: boolean) => void;
  minPrice: string;
  maxPrice: string;
  setMinPrice: (value: string) => void;
  setMaxPrice: (value: string) => void;
  clearFilters: () => void;
  footer?: ReactNode;
};

function FilterPanel({
  groupCounts,
  selectedGroup,
  selectGroup,
  availableSubcategories,
  selectedSubcategories,
  toggleSubcategory,
  selectedAvailability,
  toggleAvailability,
  onlySale,
  setOnlySale,
  onlyNew,
  setOnlyNew,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  clearFilters,
  footer,
}: FilterPanelProps) {
  return (
    <div className="filter-panel-inner">
      <div className="filter-panel-heading">
        <div>
          <span>TERMÉKSZŰRŐ</span>
          <h3>Szűrés</h3>
        </div>
        <button type="button" className="text-button" onClick={clearFilters}>Törlés</button>
      </div>

      <fieldset className="filter-group">
        <legend>Kategóriák</legend>
        {shopCategoryGroups.map((group, index) => (
          <label className={`filter-check${index === 0 ? " all-products-check" : ""}`} key={group.id}>
            <input
              type="radio"
              name="shop-category-group"
              checked={selectedGroup === group.id}
              onChange={() => selectGroup(group.id)}
            />
            <span>{group.title}</span>
            <small>{groupCounts[group.id]}</small>
          </label>
        ))}
      </fieldset>

      <fieldset className="filter-group">
        <legend>Alkategóriák</legend>
        <div className="filter-scroll-list">
          {availableSubcategories.map((item) => (
            <label className="filter-check" key={item.name}>
              <input
                type="checkbox"
                checked={selectedSubcategories.includes(item.name)}
                onChange={() => toggleSubcategory(item.name)}
              />
              <span>{item.name}</span>
              <small>{item.count}</small>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filter-group">
        <legend>Elérhetőség</legend>
        {(["Kosárba tehető", "Értesítés kérhető"] as AvailabilityFilter[]).map((item) => (
          <label className="filter-check" key={item}>
            <input
              type="checkbox"
              checked={selectedAvailability.includes(item)}
              onChange={() => toggleAvailability(item)}
            />
            <span>{item === "Kosárba tehető" ? "Raktáron / rendelhető" : "Értesítést kérek"}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="filter-group">
        <legend>Ajánlatok</legend>
        <label className="filter-check">
          <input type="checkbox" checked={onlySale} onChange={(event) => setOnlySale(event.target.checked)} />
          <span>Akciós termékek</span>
        </label>
        <label className="filter-check">
          <input type="checkbox" checked={onlyNew} onChange={(event) => setOnlyNew(event.target.checked)} />
          <span>Újdonságok</span>
        </label>
      </fieldset>

      <fieldset className="filter-group">
        <legend>Ár</legend>
        <div className="price-filter-inputs">
          <label>
            <span>Minimum</span>
            <input
              type="number"
              min={catalogMinPrice}
              max={catalogMaxPrice}
              step="100"
              value={minPrice}
              placeholder={catalogMinPrice.toLocaleString("hu-HU")}
              onChange={(event) => setMinPrice(event.target.value)}
            />
          </label>
          <label>
            <span>Maximum</span>
            <input
              type="number"
              min={catalogMinPrice}
              max={catalogMaxPrice}
              step="100"
              value={maxPrice}
              placeholder={catalogMaxPrice.toLocaleString("hu-HU")}
              onChange={(event) => setMaxPrice(event.target.value)}
            />
          </label>
        </div>
      </fieldset>

      {footer}
    </div>
  );
}

export function ShopDemo({ selectedGroup, onSelectedGroupChange }: ShopDemoProps) {
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<AvailabilityFilter[]>([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortMode>("featured");
  const [onlySale, setOnlySale] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [detail, setDetail] = useState<ShopProduct | null>(null);
  const [notifyProduct, setNotifyProduct] = useState<ShopProduct | null>(null);
  const [notifySent, setNotifySent] = useState(false);
  const [cartToast, setCartToast] = useState("");
  const [delivery, setDelivery] = useState<"home" | "pickup">("home");
  const [payment, setPayment] = useState<"card" | "transfer">("card");

  const activeGroup = shopCategoryGroups.find((group) => group.id === selectedGroup) ?? shopCategoryGroups[0];
  const activeCategories = activeGroup.categories;

  const groupCounts = useMemo(() => {
    return Object.fromEntries(
      shopCategoryGroups.map((group) => [
        group.id,
        group.categories.length === 0
          ? shopProducts.length
          : shopProducts.filter((product) => group.categories.includes(product.category)).length,
      ]),
    ) as Record<ShopCategoryGroupId, number>;
  }, []);

  const availableSubcategories = useMemo(() => {
    const counts = new Map<string, number>();
    shopProducts
      .filter((product) => activeCategories.length === 0 || activeCategories.includes(product.category))
      .forEach((product) => counts.set(product.subcategory, (counts.get(product.subcategory) ?? 0) + 1));

    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name, "hu"));
  }, [activeCategories]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("hu-HU");
    const numericMin = minPrice ? Number(minPrice) : null;
    const numericMax = maxPrice ? Number(maxPrice) : null;

    const matching = shopProducts.filter((product) => {
      const haystack = [product.name, product.sku, product.category, product.subcategory, ...product.tags]
        .join(" ")
        .toLocaleLowerCase("hu-HU");

      return (
        (activeCategories.length === 0 || activeCategories.includes(product.category)) &&
        (selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subcategory)) &&
        (selectedAvailability.length === 0 || selectedAvailability.includes(product.availability)) &&
        (!onlySale || Boolean(product.originalPrice)) &&
        (!onlyNew || product.tags.includes("Újdonság")) &&
        (numericMin === null || product.price >= numericMin) &&
        (numericMax === null || product.price <= numericMax) &&
        (!normalizedQuery || haystack.includes(normalizedQuery))
      );
    });

    return [...matching].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name, "hu");
      const aRank = Number(Boolean(a.originalPrice)) * 2 + Number(a.tags.includes("Újdonság"));
      const bRank = Number(Boolean(b.originalPrice)) * 2 + Number(b.tags.includes("Újdonság"));
      return bRank - aRank || a.category.localeCompare(b.category, "hu") || a.price - b.price;
    });
  }, [maxPrice, minPrice, onlyNew, onlySale, query, selectedAvailability, activeCategories, selectedSubcategories, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setSelectedSubcategories((current) =>
      current.filter((subcategory) => availableSubcategories.some((item) => item.name === subcategory)),
    );
    setPage(1);
  }, [availableSubcategories]);

  useEffect(() => {
    setPage(1);
  }, [maxPrice, minPrice, onlyNew, onlySale, query, selectedAvailability, selectedSubcategories, sort]);

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("doky-demo-cart");
      if (!raw) return;
      const stored = JSON.parse(raw) as { id: string; quantity: number }[];
      const restored = stored
        .map((item) => {
          const product = shopProducts.find((candidate) => candidate.id === item.id);
          return product && item.quantity > 0 ? { product, quantity: item.quantity } : null;
        })
        .filter((line): line is CartLine => Boolean(line));
      setCart(restored);
    } catch {
      // A demo akkor is működik, ha a böngésző nem engedi a localStorage használatát.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("doky-demo-cart", JSON.stringify(cart.map((line) => ({ id: line.product.id, quantity: line.quantity }))));
    } catch {
      // Nincs teendő: a kosár ilyenkor csak az aktuális munkamenetben marad meg.
    }
  }, [cart]);

  useEffect(() => {
    if (!cartToast) return;
    const timer = window.setTimeout(() => setCartToast(""), 1800);
    return () => window.clearTimeout(timer);
  }, [cartToast]);

  const itemCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const shipping = delivery === "home" && cart.length > 0 ? 1990 : 0;
  const grandTotal = total + shipping;

  function selectGroup(group: ShopCategoryGroupId) {
    onSelectedGroupChange(group);
  }

  function toggleSubcategory(subcategory: string) {
    setSelectedSubcategories((current) =>
      current.includes(subcategory)
        ? current.filter((item) => item !== subcategory)
        : [...current, subcategory],
    );
  }

  function toggleAvailability(availability: AvailabilityFilter) {
    setSelectedAvailability((current) =>
      current.includes(availability)
        ? current.filter((item) => item !== availability)
        : [...current, availability],
    );
  }

  function add(product: ShopProduct) {
    if (product.availability !== "Kosárba tehető") {
      setNotifyProduct(product);
      setNotifySent(false);
      return;
    }

    setCart((current) =>
      current.some((line) => line.product.id === product.id)
        ? current.map((line) =>
            line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line,
          )
        : [...current, { product, quantity: 1 }],
    );
    setCartToast(`${product.name} a kosárba került.`);
  }

  function change(id: string, delta: number) {
    setCart((current) =>
      current
        .map((line) => (line.product.id === id ? { ...line, quantity: line.quantity + delta } : line))
        .filter((line) => line.quantity > 0),
    );
  }

  function clearFilters() {
    onSelectedGroupChange("all");
    setSelectedSubcategories([]);
    setSelectedAvailability([]);
    setQuery("");
    setSort("featured");
    setOnlySale(false);
    setOnlyNew(false);
    setMinPrice("");
    setMaxPrice("");
  }

  const activeChips = [
    ...(selectedGroup !== "all" ? [{ type: "category" as const, value: activeGroup.title }] : []),
    ...selectedSubcategories.map((value) => ({ type: "subcategory" as const, value })),
    ...selectedAvailability.map((value) => ({ type: "availability" as const, value })),
    ...(onlySale ? [{ type: "sale" as const, value: "Akciós" }] : []),
    ...(onlyNew ? [{ type: "new" as const, value: "Újdonság" }] : []),
    ...(minPrice ? [{ type: "min" as const, value: `${Number(minPrice).toLocaleString("hu-HU")} Ft-tól` }] : []),
    ...(maxPrice ? [{ type: "max" as const, value: `${Number(maxPrice).toLocaleString("hu-HU")} Ft-ig` }] : []),
  ];

  function removeChip(type: (typeof activeChips)[number]["type"], value: string) {
    if (type === "category") onSelectedGroupChange("all");
    if (type === "subcategory") toggleSubcategory(value);
    if (type === "availability") toggleAvailability(value as AvailabilityFilter);
    if (type === "sale") setOnlySale(false);
    if (type === "new") setOnlyNew(false);
    if (type === "min") setMinPrice("");
    if (type === "max") setMaxPrice("");
  }

  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1).filter(
    (number) => number === 1 || number === pageCount || Math.abs(number - page) <= 1,
  );

  const filterProps: FilterPanelProps = {
    groupCounts,
    selectedGroup,
    selectGroup,
    availableSubcategories,
    selectedSubcategories,
    toggleSubcategory,
    selectedAvailability,
    toggleAvailability,
    onlySale,
    setOnlySale,
    onlyNew,
    setOnlyNew,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    clearFilters,
  };

  return (
    <>
      {cartToast && <div className="demo-toast" role="status">✓ {cartToast}</div>}
      <div className="shop-toolbar catalog-heading">
        <div>
          <span className="eyebrow">TELJES KÍNÁLAT</span>
          <h2>Találd meg a megfelelő terméket</h2>
          <p>
            Kereshetsz név vagy cikkszám alapján, szűrhetsz kategóriára, elérhetőségre és árra,
            majd a neked megfelelő sorrendbe rendezheted a találatokat.
          </p>
        </div>
        <button className="cart-button" type="button" onClick={() => setCartOpen(true)}>
          Kosár <span>{itemCount}</span>
        </button>
      </div>

      <div className="catalog-search-row">
        <label className="shop-search catalog-main-search">
          <span>Keresés a termékek között</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Terméknév, cikkszám, sorozat vagy szín…"
          />
        </label>
        <button className="mobile-filter-button" type="button" onClick={() => setFilterOpen(true)}>
          Szűrés és kategóriák
          {activeChips.length > 0 && <span>{activeChips.length}</span>}
        </button>
      </div>

      <div className="catalog-layout">
        <aside className="desktop-filter-panel" aria-label="Termékszűrők">
          <FilterPanel {...filterProps} />
        </aside>

        <div className="catalog-results">
          <div className="catalog-results-top">
            <div>
              <strong>{filtered.length} termék</strong>
              <span>
                {filtered.length > 0
                  ? `${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, filtered.length)}. termék látható`
                  : "Nincs a feltételeknek megfelelő termék."}
              </span>
            </div>
            <label className="sort-control">
              <span>Rendezés</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
                <option value="featured">Kiemelt / akciós elöl</option>
                <option value="name">Név szerint</option>
                <option value="price-asc">Ár: növekvő</option>
                <option value="price-desc">Ár: csökkenő</option>
              </select>
            </label>
          </div>

          {activeChips.length > 0 && (
            <div className="active-filter-row" aria-label="Aktív szűrők">
              {activeChips.map((chip) => (
                <button key={`${chip.type}-${chip.value}`} type="button" onClick={() => removeChip(chip.type, chip.value)}>
                  {chip.value} <span aria-hidden="true">×</span>
                </button>
              ))}
              <button className="clear-chip" type="button" onClick={clearFilters}>Összes törlése</button>
            </div>
          )}

          <div className="product-grid shop-product-grid catalog-product-grid">
            {visible.map((product) => {
              const badge = product.originalPrice
                ? "Akció"
                : product.tags.includes("Újdonság")
                  ? "Újdonság"
                  : product.subcategory;

              return (
                <article className="product-card" key={product.id}>
                  <div className="product-media">
                    <span>{badge}</span>
                    <div className="product-geometry" aria-hidden="true"><i /><i /></div>
                    <small>TERMÉKKÉP HELYE</small>
                  </div>
                  <div className="product-body">
                    <p className="product-kicker">{product.category} · {product.subcategory}</p>
                    <h3>{product.name}</h3>
                    <p className="product-variant">Cikkszám: {product.sku}</p>
                    <div className="product-tags">
                      {product.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="stock-row">
                      <span className={product.availability === "Kosárba tehető" ? "in-stock" : "notify-stock"}>
                        {product.availability}
                      </span>
                    </div>
                    <div className="price-row price-stack">
                      {product.originalPrice && <del>{money.format(product.originalPrice)}</del>}
                      <div><strong>{money.format(product.price)}</strong><span>bruttó</span></div>
                    </div>
                    <div className="card-actions">
                      <button className="button secondary" type="button" onClick={() => setDetail(product)}>Részletek</button>
                      <button className="button primary" type="button" onClick={() => add(product)}>
                        {product.availability === "Kosárba tehető" ? "Kosárba" : "Értesítés"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <strong>Nincs találat.</strong>
              <p>Próbálj másik keresést, kategóriát vagy szűrési feltételt.</p>
              <button className="button secondary" type="button" onClick={clearFilters}>Összes termék</button>
            </div>
          )}

          {filtered.length > pageSize && (
            <nav className="catalog-pagination" aria-label="Terméklista lapozása">
              <button type="button" disabled={page === 1} onClick={() => setPage((current) => current - 1)}>← Előző</button>
              <div>
                {pageNumbers.map((number, index) => {
                  const previous = pageNumbers[index - 1];
                  return (
                    <span key={number}>
                      {previous && number - previous > 1 && <i>…</i>}
                      <button
                        type="button"
                        className={number === page ? "active" : ""}
                        onClick={() => setPage(number)}
                        aria-current={number === page ? "page" : undefined}
                      >
                        {number}
                      </button>
                    </span>
                  );
                })}
              </div>
              <button type="button" disabled={page === pageCount} onClick={() => setPage((current) => current + 1)}>Következő →</button>
            </nav>
          )}
        </div>
      </div>

      {filterOpen && (
        <div className="drawer-backdrop filter-drawer-backdrop" onMouseDown={() => setFilterOpen(false)}>
          <aside className="mobile-filter-drawer" onMouseDown={(event) => event.stopPropagation()} aria-label="Szűrés és kategóriák">
            <div className="drawer-head">
              <div><span>WEBSHOP</span><h2>Szűrés és kategóriák</h2></div>
              <button type="button" onClick={() => setFilterOpen(false)} aria-label="Szűrő bezárása">×</button>
            </div>
            <FilterPanel
              {...filterProps}
              footer={
                <button className="button primary full-button mobile-filter-apply" type="button" onClick={() => setFilterOpen(false)}>
                  {filtered.length} termék megjelenítése
                </button>
              }
            />
          </aside>
        </div>
      )}

      {cartOpen && (
        <div className="drawer-backdrop" onMouseDown={() => setCartOpen(false)}>
          <aside className="cart-drawer" onMouseDown={(event) => event.stopPropagation()} aria-label="Kosár">
            <div className="drawer-head">
              <div><span>KOSÁR</span><h2>{itemCount} termék</h2></div>
              <button type="button" onClick={() => setCartOpen(false)} aria-label="Kosár bezárása">×</button>
            </div>
            <div className="cart-lines">
              {cart.length === 0 ? (
                <div className="empty-cart"><strong>A kosár még üres</strong><p>A kiválasztott termékek itt jelennek meg.</p></div>
              ) : cart.map((line) => (
                <article key={line.product.id}>
                  <div className="cart-thumb">KÉP</div>
                  <div>
                    <strong>{line.product.name}</strong>
                    <span>{line.product.sku} · {line.product.subcategory}</span>
                    <b>{money.format(line.product.price * line.quantity)}</b>
                    <div className="quantity-control">
                      <button type="button" onClick={() => change(line.product.id, -1)}>−</button>
                      <span>{line.quantity}</span>
                      <button type="button" onClick={() => change(line.product.id, 1)}>+</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-total">
              <div><span>Részösszeg</span><strong>{money.format(total)}</strong></div>
              <button className="button primary full-button" type="button" disabled={cart.length === 0} onClick={() => { setCartOpen(false); setCheckoutOpen(true); setCheckoutDone(false); }}>Tovább a pénztárhoz</button>
              <small>A pénztárban a szállítás és a fizetési mód is kipróbálható. A demó nem indít valódi fizetést.</small>
            </div>
          </aside>
        </div>
      )}

      {checkoutOpen && (
        <div className="modal-backdrop checkout-backdrop" onMouseDown={() => setCheckoutOpen(false)}>
          <div className="checkout-panel" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setCheckoutOpen(false)} aria-label="Pénztár bezárása">×</button>
            {checkoutDone ? (
              <div className="checkout-success">
                <span className="success-mark">✓</span>
                <span className="eyebrow">RENDELÉS ÖSSZEFOGLALÓ</span>
                <h2>A folyamat készen áll az éles integrációra.</h2>
                <p>A demo rendelés elkészült. Bankkártyás fizetés esetén az éles rendszer innen irányítaná tovább a vásárlót a SimplePay vagy Barion biztonságos fizetési oldalára; átutalásnál pedig a visszaigazolás tartalmazná az utalási adatokat.</p>
                <div className="demo-order-recap"><span>Fizetés: <b>{payment === "card" ? "Bankkártya" : "Banki átutalás"}</b></span><span>Szállítás: <b>{delivery === "home" ? "Házhozszállítás" : "Személyes átvétel"}</b></span><span>Végösszeg: <b>{money.format(grandTotal)}</b></span></div>
                <button className="button primary" type="button" onClick={() => { setCheckoutOpen(false); setCheckoutDone(false); setCart([]); }}>Vissza a webshopba</button>
              </div>
            ) : (
              <div className="checkout-layout">
                <div className="checkout-form-side">
                  <span className="eyebrow">PÉNZTÁR</span>
                  <h2>Rendelési adatok</h2>
                  <div className="checkout-progress" aria-label="Pénztár lépései"><span className="active">1 Adatok</span><span>2 Szállítás</span><span>3 Fizetés</span></div>
                  <form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setCheckoutDone(true); }}>
                    <div className="checkout-form-grid">
                      <label><span>Név</span><input required placeholder="Teljes név" /></label>
                      <label><span>E-mail</span><input required type="email" placeholder="nev@email.hu" /></label>
                      <label><span>Telefonszám</span><input required placeholder="+36 30 123 4567" /></label>
                      <label><span>Irányítószám</span><input required inputMode="numeric" placeholder="1037" /></label>
                      <label className="wide"><span>Város</span><input required placeholder="Budapest" /></label>
                      <label className="wide"><span>Cím</span><input required placeholder="Utca, házszám" /></label>
                    </div>
                    <fieldset className="checkout-option-group"><legend>Szállítás</legend><label><input checked={delivery === "home"} onChange={() => setDelivery("home")} type="radio" name="delivery" /> <span><b>Házhozszállítás · {money.format(1990)}</b><small>Demó szállítási díj; az éles webshopban a tényleges futárdíj jelenik meg.</small></span></label><label><input checked={delivery === "pickup"} onChange={() => setDelivery("pickup")} type="radio" name="delivery" /> <span><b>Személyes átvétel · díjmentes</b><small>Átvételi pont esetén itt jelenhet meg a cím és nyitvatartás.</small></span></label></fieldset>
                    <fieldset className="checkout-option-group"><legend>Fizetés</legend><label><input checked={payment === "card"} onChange={() => setPayment("card")} type="radio" name="payment" /> <span><b>Bankkártyás fizetés</b><small>Az éles rendszer SimplePay vagy Barion biztonságos fizetési oldalára irányítana.</small></span></label><label><input checked={payment === "transfer"} onChange={() => setPayment("transfer")} type="radio" name="payment" /> <span><b>Banki átutalás</b><small>Az utalási adatok a rendelés visszaigazolásában jelenhetnek meg.</small></span></label></fieldset>
                    <label className="checkout-consent"><input required type="checkbox" /><span>Elolvastam és elfogadom a vásárláshoz kapcsolódó feltételeket.</span></label>
                    <button className="button primary full-button" type="submit">Rendelés áttekintése</button>
                  </form>
                </div>
                <aside className="checkout-summary">
                  <span>RENDELÉSED</span><h3>{itemCount} termék</h3>
                  <div className="checkout-summary-lines">{cart.map((line) => <div key={line.product.id}><div><strong>{line.product.name}</strong><small>{line.quantity} × {money.format(line.product.price)}</small></div><b>{money.format(line.product.price * line.quantity)}</b></div>)}</div>
                  <div className="checkout-summary-total checkout-summary-subtotal"><span>Részösszeg</span><strong>{money.format(total)}</strong></div>
                  <div className="checkout-summary-total checkout-summary-shipping"><span>Szállítás</span><strong>{shipping === 0 ? "Díjmentes" : money.format(shipping)}</strong></div>
                  <div className="checkout-summary-total checkout-summary-grand"><span>Végösszeg</span><strong>{money.format(grandTotal)}</strong></div>
                  <p>A demo a szállítási választás alapján azonnal újraszámolja a végösszeget.</p>
                </aside>
              </div>
            )}
          </div>
        </div>
      )}

      {detail && (
        <div className="modal-backdrop" onMouseDown={() => setDetail(null)}>
          <div className="modal-panel product-modal" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setDetail(null)}>×</button>
            <div className="detail-media">TERMÉKKÉP HELYE</div>
            <div>
              <span className="eyebrow">{detail.category} · {detail.subcategory}</span>
              <h2>{detail.name}</h2>
              <p className="product-variant">Cikkszám: {detail.sku}</p>
              <p>{detail.summary}</p>
              <div className="detail-tags">{detail.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <ul>
                <li>A termék fő adatai és elérhetősége egy helyen</li>
                <li>A részletes oldalon használati javaslat és fontos tudnivalók jelenhetnek meg</li>
                <li>Kapcsolódó termékekkel és kiegészítőkkel tovább segíthető a választás</li>
              </ul>
              <div className="stock-row"><span className={detail.availability === "Kosárba tehető" ? "in-stock" : "notify-stock"}>{detail.availability}</span></div>
              <div className="price-row price-stack">
                {detail.originalPrice && <del>{money.format(detail.originalPrice)}</del>}
                <div><strong>{money.format(detail.price)}</strong><span>bruttó</span></div>
              </div>
              {detail.availability === "Kosárba tehető" ? (
                <button className="button primary full-button" type="button" onClick={() => { add(detail); setDetail(null); }}>Kosárba teszem</button>
              ) : (
                <button className="button primary full-button" type="button" onClick={() => { setNotifyProduct(detail); setNotifySent(false); setDetail(null); }}>Értesítést kérek</button>
              )}
            </div>
          </div>
        </div>
      )}


      {notifyProduct && (
        <div className="modal-backdrop" onMouseDown={() => { setNotifyProduct(null); setNotifySent(false); }}>
          <div className="modal-panel notify-modal" role="dialog" aria-modal="true" aria-labelledby="notify-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => { setNotifyProduct(null); setNotifySent(false); }} aria-label="Bezárás">×</button>
            {!notifySent ? (
              <>
                <span className="eyebrow">KÉSZLETÉRTESÍTŐ</span>
                <h2 id="notify-title">{notifyProduct.name}</h2>
                <p>Ez a termék jelenleg nem tehető kosárba. Add meg az e-mail címed, és a demo elmenti az értesítési igényt.</p>
                <form className="modal-form" onSubmit={(event) => { event.preventDefault(); setNotifySent(true); }}>
                  <label className="full-field">E-mail<input required type="email" placeholder="nev@email.hu" /></label>
                  <label className="checkbox-row full-field"><input required type="checkbox" /><span>Hozzájárulok, hogy készletértesítőt kapjak erről a termékről.</span></label>
                  <button className="button primary full-field" type="submit">Értesítés kérése</button>
                </form>
              </>
            ) : (
              <div className="success-panel">
                <span>✓</span>
                <h3>Az értesítési igény rögzítve</h3>
                <p>Éles rendszerben a megadott címre automatikus értesítés mehetne, amikor a termék újra rendelhető.</p>
                <button className="button secondary" type="button" onClick={() => { setNotifyProduct(null); setNotifySent(false); }}>Bezárás</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
