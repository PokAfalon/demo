export const shopCategories = ["Összes", "Kések", "Készletek", "Edények", "Malmok", "Hámozók", "Szeletelők", "Termoszok", "Kiegészítők"] as const;

export type ShopCategory = Exclude<(typeof shopCategories)[number], "Összes">;

export type ShopAvailability = "Kosárba tehető" | "Értesítés kérhető";

export type ShopProduct = {
  id: string;
  sku: string;
  name: string;
  category: ShopCategory;
  subcategory: string;
  price: number;
  originalPrice?: number;
  availability: ShopAvailability;
  tags: string[];
  summary: string;
};

export const shopCatalogUpdatedAt = "2026. július 26.";

export const shopProducts: ShopProduct[] = [

  { id: "FZ075WHBK", sku: "FZ075WHBK", name: "Hámozó kés - 7,5 cm", category: "Kések", subcategory: "FZ sorozat", price: 8910, originalPrice: 9900, availability: "Kosárba tehető", tags: ["Akció", "Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK075WH", sku: "FK075WH", name: "Hámozó kés - 7,5 cm", category: "Kések", subcategory: "Fehér penge / fekete nyél", price: 9990, availability: "Kosárba tehető", tags: ["Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK075WHBKBIO", sku: "FK075WHBKBIO", name: "Hámozó kés BIO-nyél - 7,5 cm", category: "Kések", subcategory: "BIO-kések", price: 10790, originalPrice: 11990, availability: "Kosárba tehető", tags: ["Akció", "BIO", "Fehér penge"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WH", sku: "FK110WH", name: "Szeletelő kés - 11 cm", category: "Kések", subcategory: "Fehér penge / fekete nyél", price: 12890, availability: "Értesítés kérhető", tags: ["Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK115WH", sku: "FK115WH", name: "Mini Santoku kés - 11,5 cm", category: "Kések", subcategory: "Fehér penge / fekete nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHBKBIO", sku: "FK110WHBKBIO", name: "Szeletelő kés BIO-nyél - 11 cm", category: "Kések", subcategory: "BIO-kések", price: 13490, originalPrice: 14990, availability: "Kosárba tehető", tags: ["Akció", "BIO", "Fehér penge"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FZ140WHBK", sku: "FZ140WHBK", name: "Santoku kés - 14 cm", category: "Kések", subcategory: "FZ sorozat", price: 17760, originalPrice: 19300, availability: "Kosárba tehető", tags: ["Akció", "Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK125NWH", sku: "FK125NWH", name: "Szeletelő kés recés - 12,5 cm", category: "Kések", subcategory: "Fehér penge / fekete nyél", price: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Fekete nyél", "Recés"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WH", sku: "FK140WH", name: "Santoku kés - 14 cm", category: "Kések", subcategory: "Fehér penge / fekete nyél", price: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WHBKBIO", sku: "FK140WHBKBIO", name: "Santoku kés BIO-nyél - 14 cm", category: "Kések", subcategory: "BIO-kések", price: 20241, originalPrice: 22490, availability: "Kosárba tehető", tags: ["Akció", "BIO", "Fehér penge"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "TK-075WH-BK", sku: "TK-075WH-BK", name: "Chowa cirkónia Hámozó kés - 7,5 cm", category: "Kések", subcategory: "Chowa sorozat", price: 20770, availability: "Kosárba tehető", tags: ["Chowa", "Cirkónia"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "TK-110WH-BK", sku: "TK-110WH-BK", name: "Chowa cirkónia Szeletelő kés - 11 cm", category: "Kések", subcategory: "Chowa sorozat", price: 24940, availability: "Kosárba tehető", tags: ["Chowa", "Cirkónia"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK160WH", sku: "FK160WH", name: "Séf kés fehér - 16 cm", category: "Kések", subcategory: "Séf kések", price: 25990, availability: "Kosárba tehető", tags: ["Séf", "Fehér penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "TK-125WH-BK", sku: "TK-125WH-BK", name: "Chowa cirkónia Szeletelő kés recés - 12,5 cm", category: "Kések", subcategory: "Chowa sorozat", price: 29100, availability: "Kosárba tehető", tags: ["Chowa", "Cirkónia", "Recés"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK150WH", sku: "FK150WH", name: "Nakiri Séf kés - 15 cm", category: "Kések", subcategory: "Séf kések", price: 29490, availability: "Kosárba tehető", tags: ["Séf", "Nakiri", "Fehér penge"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK180WH", sku: "FK180WH", name: "Séf kés fehér - 18 cm", category: "Kések", subcategory: "Séf kések", price: 29490, availability: "Kosárba tehető", tags: ["Séf", "Fehér penge"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK181WH", sku: "FK181WH", name: "Kenyérszeletelő kés fehér - 18 cm", category: "Kések", subcategory: "Fehér penge / fekete nyél", price: 29490, availability: "Kosárba tehető", tags: ["Fehér penge", "Fekete nyél", "Kenyérkés"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "TK-140WH-BK", sku: "TK-140WH-BK", name: "Chowa cirkónia Santoku kés - 14 cm", category: "Kések", subcategory: "Chowa sorozat", price: 37420, availability: "Kosárba tehető", tags: ["Chowa", "Cirkónia", "Santoku"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "TK-150NWH-BK", sku: "TK-150NWH-BK", name: "Chowa cirkónia Nakiri kés - 15 cm", category: "Kések", subcategory: "Chowa sorozat", price: 45740, availability: "Kosárba tehető", tags: ["Chowa", "Cirkónia", "Nakiri"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "TK-181WH-BK", sku: "TK-181WH-BK", name: "Chowa cirkónia Kenyérszeletelő kés - 18 cm", category: "Kések", subcategory: "Chowa sorozat", price: 45740, availability: "Kosárba tehető", tags: ["Chowa", "Cirkónia", "Kenyérkés"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK075WHWH", sku: "FK075WHWH", name: "Hámozó kés fehér - 7,5 cm", category: "Kések", subcategory: "Fehér penge / fehér nyél", price: 9900, availability: "Kosárba tehető", tags: ["Fehér penge", "Fehér nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHWH", sku: "FK110WHWH", name: "Szeletelő kés fehér - 11 cm", category: "Kések", subcategory: "Fehér penge / fehér nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Fehér nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK130WHWH", sku: "FK130WHWH", name: "Szeletelő kés fehér - 13 cm", category: "Kések", subcategory: "Fehér penge / fehér nyél", price: 16190, availability: "Kosárba tehető", tags: ["Fehér penge", "Fehér nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WHWH", sku: "FK140WHWH", name: "Santoku kés fehér - 14 cm", category: "Kések", subcategory: "Fehér penge / fehér nyél", price: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Fehér nyél", "Santoku"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK075WHGR", sku: "FK075WHGR", name: "Hámozó kés zöld - 7,5 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 9990, availability: "Kosárba tehető", tags: ["Fehér penge", "Zöld"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK075WHOR", sku: "FK075WHOR", name: "Hámozó kés narancs - 7,5 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 9990, availability: "Kosárba tehető", tags: ["Fehér penge", "Narancs"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK075WHRD", sku: "FK075WHRD", name: "Hámozó kés piros - 7,5 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 9990, availability: "Kosárba tehető", tags: ["Fehér penge", "Piros"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHGR", sku: "FK110WHGR", name: "Szeletelő kés zöld - 11 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Zöld"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHPINK", sku: "FK110WHPINK", name: "Szeletelő kés rózsaszín - 11 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Rózsaszín", "Mellrák ellen"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHPU", sku: "FK110WHPU", name: "Szeletelő kés lila - 11 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Lila"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHRD", sku: "FK110WHRD", name: "Szeletelő kés piros - 11 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Piros"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHYL", sku: "FK110WHYL", name: "Szeletelő kés sárga - 11 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 12890, availability: "Kosárba tehető", tags: ["Fehér penge", "Sárga"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK130WHGR", sku: "FK130WHGR", name: "Szeletelő kés zöld - 13 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 16190, availability: "Kosárba tehető", tags: ["Fehér penge", "Zöld"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK130WHRD", sku: "FK130WHRD", name: "Szeletelő kés piros - 13 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 16190, availability: "Kosárba tehető", tags: ["Fehér penge", "Piros"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WHOR", sku: "FK140WHOR", name: "Santoku kés narancs - 14 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 16990, originalPrice: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Narancs", "Akció"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WHPU", sku: "FK140WHPU", name: "Santoku kés lila - 14 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 16990, originalPrice: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Lila", "Akció"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WHPINK", sku: "FK140WHPINK", name: "Santoku kés rózsaszín - 14 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Rózsaszín", "Mellrák ellen"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK140WHRD", sku: "FK140WHRD", name: "Santoku kés piros - 14 cm", category: "Kések", subcategory: "Fehér penge / színes nyél", price: 19300, availability: "Kosárba tehető", tags: ["Fehér penge", "Piros"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "ZK075BKBK", sku: "ZK075BKBK", name: "Shin Hámozó kés fekete - 7,5 cm", category: "Kések", subcategory: "Shin sorozat", price: 17390, availability: "Kosárba tehető", tags: ["Shin", "Fekete penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK115BK", sku: "FK115BK", name: "Mini Santoku kés fekete - 11,5 cm", category: "Kések", subcategory: "Fekete penge / fekete nyél", price: 20390, availability: "Kosárba tehető", tags: ["Fekete penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "ZK110BKBK", sku: "ZK110BKBK", name: "Shin Szeletelő kés fekete - 11 cm", category: "Kések", subcategory: "Shin sorozat", price: 20690, availability: "Kosárba tehető", tags: ["Shin", "Fekete penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "ZK130BKBK", sku: "ZK130BKBK", name: "Shin Szeletelő kés fekete - 13 cm", category: "Kések", subcategory: "Shin sorozat", price: 24190, availability: "Kosárba tehető", tags: ["Shin", "Fekete penge", "Fekete nyél"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK125BK", sku: "FK125BK", name: "Szeletelő kés recés fekete - 12,5 cm", category: "Kések", subcategory: "Fekete penge / fekete nyél", price: 27990, availability: "Kosárba tehető", tags: ["Fekete penge", "Fekete nyél", "Recés"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "ZK140BK", sku: "ZK140BK", name: "Shin Santoku kés fekete - 14 cm", category: "Kések", subcategory: "Shin sorozat", price: 27990, availability: "Kosárba tehető", tags: ["Shin", "Fekete penge", "Fekete nyél", "Santoku"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK181BK", sku: "FK181BK", name: "Kenyérszeletelő kés fekete - 18 cm", category: "Kések", subcategory: "Fekete penge / fekete nyél", price: 39390, availability: "Kosárba tehető", tags: ["Fekete penge", "Fekete nyél", "Kenyérkés"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "JPN130BK", sku: "JPN130BK", name: "JPN cirkónia szeletelő kés - 13 cm", category: "Kések", subcategory: "JPN sorozat", price: 48890, availability: "Kosárba tehető", tags: ["JPN", "Cirkónia", "Red Dot"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "JPN140BK", sku: "JPN140BK", name: "JPN Santoku cirkónia szeletelő kés - 14 cm", category: "Kések", subcategory: "JPN sorozat", price: 52690, availability: "Kosárba tehető", tags: ["JPN", "Cirkónia", "Santoku", "Red Dot"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "JPN160BK", sku: "JPN160BK", name: "JPN cirkónia Séf kés - 16 cm", category: "Kések", subcategory: "JPN sorozat", price: 58290, availability: "Kosárba tehető", tags: ["JPN", "Cirkónia", "Séf", "Red Dot"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "KT130HIP", sku: "KT130HIP", name: "KyoTop cirkónia kés - 13 cm", category: "Kések", subcategory: "KyoTop sorozat", price: 80400, availability: "Kosárba tehető", tags: ["KyoTop", "Cirkónia", "Prémium"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "KT140HIP", sku: "KT140HIP", name: "KyoTop cirkónia kés - 14 cm", category: "Kések", subcategory: "KyoTop sorozat", price: 93200, availability: "Kosárba tehető", tags: ["KyoTop", "Cirkónia", "Prémium"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "KT155HIP", sku: "KT155HIP", name: "KyoTop cirkónia kés - 15 cm", category: "Kések", subcategory: "KyoTop sorozat", price: 115800, availability: "Kosárba tehető", tags: ["KyoTop", "Cirkónia", "Prémium"], summary: "A jelenlegi webshop késkínálatából, cikkszámmal és aktuális árral." },

  { id: "FK110WHCP10NBLACK", sku: "FK110WHCP10NBLACK", name: "Szeletelő kés és Y hámozó szett - fekete", category: "Készletek", subcategory: "Színes készletek", price: 14790, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK140WH-CP10WH", sku: "FK140WH-CP10WH", name: "Santoku kés és Y hámozó szett - fehér", category: "Készletek", subcategory: "Fehér készletek", price: 21390, availability: "Kosárba tehető", tags: ["Fehér készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "KBLOCK4-4keses-feher", sku: "KBLOCK4-4keses-feher", name: "Bambusz késtartó + 4 db kés fehér", category: "Készletek", subcategory: "Fehér készletek", price: 61900, availability: "Kosárba tehető", tags: ["Fehér készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHBK", sku: "CP10-FK140WHBK", name: "Santoku kés és Y hámozó szett - fekete", category: "Készletek", subcategory: "Fekete készletek", price: 21390, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK140WH-CP10BK", sku: "FK140WH-CP10BK", name: "Santoku kés és Y hámozó szett - fekete", category: "Készletek", subcategory: "Fekete készletek", price: 22490, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK140WH-CSN202BK", sku: "FK140WH-CSN202BK", name: "Santoku kés és Szeletelő szett - fekete", category: "Készletek", subcategory: "Fekete készletek", price: 26290, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "SK2PC-BKBK", sku: "SK2PC-BKBK", name: "Steak kés szett - fekete (2 db)", category: "Készletek", subcategory: "Fekete készletek", price: 37590, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "ZK2PC-BK", sku: "ZK2PC-BK", name: "Shin kés szett - fekete (2 db)", category: "Készletek", subcategory: "Fekete készletek", price: 44490, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "SK4PC-BKBK", sku: "SK4PC-BKBK", name: "Steak kés szett - fekete (4 db)", category: "Készletek", subcategory: "Fekete készletek", price: 61790, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "RKBszettZK-BKBK", sku: "RKBszettZK-BKBK", name: "Négy kés + Késtartó szett - fekete (4 db)", category: "Készletek", subcategory: "Fekete készletek", price: 89690, availability: "Kosárba tehető", tags: ["Fekete készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK075WH-FK140WHBK", sku: "FK075WH-FK140WHBK", name: "Kés szett - 7,5 / 14 cm", category: "Készletek", subcategory: "Színes készletek", price: 29490, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "SK2PC-WHBK", sku: "SK2PC-WHBK", name: "Steak kés szett - fehér (2 db)", category: "Készletek", subcategory: "Színes készletek", price: 30690, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK-3PC WH-BK", sku: "FK-3PC WH-BK", name: "Kés szett 7,5 / 11 / 14 cm", category: "Készletek", subcategory: "Színes készletek", price: 35900, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK3PCBK", sku: "FK3PCBK", name: "Kés szett 7,5 / 12,5 / 16 cm", category: "Készletek", subcategory: "Színes készletek", price: 41990, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "SK4PC-WHBK", sku: "SK4PC-WHBK", name: "Steak kés szett (4 db)", category: "Készletek", subcategory: "Színes készletek", price: 51590, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "KBLOCK4WHBK", sku: "KBLOCK4WHBK", name: "Bambusz késtartó + 4 db kés", category: "Készletek", subcategory: "Színes készletek", price: 61900, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "RKB Szett FK-WHBK", sku: "RKB Szett FK-WHBK", name: "Kerek késtartó + 4 db kés", category: "Készletek", subcategory: "Színes készletek", price: 61990, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK110WHGR", sku: "CP10-FK110WHGR", name: "Szeletelő kés és Y hámozó szett - zöld", category: "Készletek", subcategory: "Színes készletek", price: 14790, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK110WH-CP09GR", sku: "FK110WH-CP09GR", name: "Szeletelő kés és Hámozó szett - zöld", category: "Készletek", subcategory: "Színes készletek", price: 14790, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK110WH-CP09RD", sku: "FK110WH-CP09RD", name: "Szeletelő kés és balkezes Hámozó szett - piros", category: "Készletek", subcategory: "Színes készletek", price: 14790, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK110WHCP10RED", sku: "FK110WHCP10RED", name: "Szeletelő kés és Y hámozó szett - piros", category: "Készletek", subcategory: "Színes készletek", price: 14790, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHBU", sku: "CP10-FK140WHBU", name: "Santoku kés és Y hámozó szett - kék", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHGR", sku: "CP10-FK140WHGR", name: "Santoku kés és Y hámozó szett - zöld", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHOR", sku: "CP10-FK140WHOR", name: "Santoku kés és Y hámozó szett - narancssárga", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHPK", sku: "CP10-FK140WHPK", name: "Santoku kés és Y hámozó szett - rózsaszín", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek", "Mellrák ellen"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHPU", sku: "CP10-FK140WHPU", name: "Santoku kés és Y hámozó szett - lila", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHRD", sku: "CP10-FK140WHRD", name: "Santoku kés és Y hámozó szett - piros", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CP10-FK140WHYL", sku: "CP10-FK140WHYL", name: "Santoku kés és Y hámozó szett - sárga", category: "Készletek", subcategory: "Színes készletek", price: 21390, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK140WH-CP10RD", sku: "FK140WH-CP10RD", name: "Santoku kés és Y hámozó szett - piros", category: "Készletek", subcategory: "Színes készletek", price: 22490, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "FK140WH-CSN202RD", sku: "FK140WH-CSN202RD", name: "Santoku kés és Szeletelő szett - piros", category: "Készletek", subcategory: "Színes készletek", price: 26290, availability: "Kosárba tehető", tags: ["Színes készletek"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "KBLOCK4", sku: "KBLOCK4", name: "Bambusz késtartó 4-részes (üres)", category: "Készletek", subcategory: "Késtartók", price: 13990, availability: "Kosárba tehető", tags: ["Késtartók"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "RKB", sku: "RKB", name: "Kerek késtartó (üres)", category: "Készletek", subcategory: "Késtartók", price: 13990, availability: "Kosárba tehető", tags: ["Késtartók"], summary: "Kés- és hámozókészlet, illetve késtartós összeállítás a jelenlegi kínálatból." },

  { id: "CSP-07", sku: "CSP-07", name: "Fedős lábos 2,6QT", category: "Edények", subcategory: "Lábosok", price: 30100, availability: "Kosárba tehető", tags: ["Lábosok", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CSP-08", sku: "CSP-08", name: "Fedős lábos 3,7QT", category: "Edények", subcategory: "Lábosok", price: 36100, availability: "Kosárba tehető", tags: ["Lábosok", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CSTP-09", sku: "CSTP-09", name: "Fedős lábos 4,8QT", category: "Edények", subcategory: "Lábosok", price: 42100, availability: "Kosárba tehető", tags: ["Lábosok", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CFP-L08", sku: "CFP-L08", name: "Kerámia bevonatú serpenyő 8\"", category: "Edények", subcategory: "Serpenyők", price: 21040, availability: "Kosárba tehető", tags: ["Serpenyők", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CFP-L10", sku: "CFP-L10", name: "Kerámia bevonatú serpenyő 10\"", category: "Edények", subcategory: "Serpenyők", price: 25550, availability: "Kosárba tehető", tags: ["Serpenyők", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CFP-L12", sku: "CFP-L12", name: "Kerámia bevonatú serpenyő 12\"", category: "Edények", subcategory: "Serpenyők", price: 30100, availability: "Kosárba tehető", tags: ["Serpenyők", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CGP-10", sku: "CGP-10", name: "Kerámia bevonatú Grill serpenyő 10\"", category: "Edények", subcategory: "Serpenyők", price: 42100, availability: "Kosárba tehető", tags: ["Serpenyők", "Kerámia bevonat"], summary: "Kerámia bevonatú konyhai edény a jelenlegi webshop kínálatából." },

  { id: "CM10WH", sku: "CM10WH", name: "Kerámia malom kisméretű - fehér", category: "Malmok", subcategory: "Mechanikus malmok", price: 5841, originalPrice: 6490, availability: "Kosárba tehető", tags: ["Mechanikus", "Akció"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM10YL", sku: "CM10YL", name: "Kerámia malom kisméretű - sárga", category: "Malmok", subcategory: "Mechanikus malmok", price: 5841, originalPrice: 6490, availability: "Kosárba tehető", tags: ["Mechanikus", "Akció"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM20BK", sku: "CM20BK", name: "Kerámia malom - fekete", category: "Malmok", subcategory: "Mechanikus malmok", price: 7490, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM20BU", sku: "CM20BU", name: "Kerámia malom - kék", category: "Malmok", subcategory: "Mechanikus malmok", price: 7490, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM20GR", sku: "CM20GR", name: "Kerámia malom - zöld", category: "Malmok", subcategory: "Mechanikus malmok", price: 7490, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM20RD", sku: "CM20RD", name: "Kerámia malom - piros", category: "Malmok", subcategory: "Mechanikus malmok", price: 7490, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM20WH", sku: "CM20WH", name: "Kerámia malom - fehér", category: "Malmok", subcategory: "Mechanikus malmok", price: 7490, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM25D", sku: "CM25D", name: "Dupla Kerámia malom - fekete", category: "Malmok", subcategory: "Mechanikus malmok", price: 9790, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM-35W-LB", sku: "CM-35W-LB", name: "Kerámia malom - világosbarna", category: "Malmok", subcategory: "Mechanikus malmok", price: 13990, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM-35W-RO", sku: "CM-35W-RO", name: "Kerámia malom - rózsafa", category: "Malmok", subcategory: "Mechanikus malmok", price: 13990, availability: "Kosárba tehető", tags: ["Mechanikus"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM50SP", sku: "CM50SP", name: "Aromazáró edény", category: "Malmok", subcategory: "Kávédarálók", price: 10490, availability: "Kosárba tehető", tags: ["Kávé"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CM40", sku: "CM40", name: "Kézi, késes kávédaráló", category: "Malmok", subcategory: "Kávédarálók", price: 19290, availability: "Kosárba tehető", tags: ["Kávé"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "EG70CF", sku: "EG70CF", name: "Elektromos kávédaráló malom", category: "Malmok", subcategory: "Kávédarálók", price: 31490, availability: "Kosárba tehető", tags: ["Kávé"], summary: "Kerámia őrlős malom vagy kávés kiegészítő a jelenlegi kínálatból." },

  { id: "CP10NBK", sku: "CP10NBK", name: "Kerámia hámozó Y-forma - fekete", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CP10NGR", sku: "CP10NGR", name: "Kerámia hámozó Y-forma - zöld", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CP10NRD", sku: "CP10NRD", name: "Kerámia hámozó Y-forma - piros", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CP10NWH", sku: "CP10NWH", name: "Kerámia hámozó Y-forma - fehér", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CP11BK", sku: "CP11BK", name: "Kétélű kerámia hámozó - fekete", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CP11GR", sku: "CP11GR", name: "Kétélű kerámia hámozó - zöld", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CP11RD", sku: "CP11RD", name: "Kétélű kerámia hámozó - piros", category: "Hámozók", subcategory: "Kézi hámozók", price: 3690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CWPNBK", sku: "CWPNBK", name: "Kerámia hámozó XL széles - fekete", category: "Hámozók", subcategory: "Kézi hámozók", price: 6790, availability: "Kosárba tehető", tags: ["Kerámia él", "XL"], summary: "Kerámia élű hámozó a jelenlegi webshop kínálatából." },

  { id: "CSN152BK", sku: "CSN152BK", name: "Dupla élű szeletelő - fekete", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 6690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CSN152RD", sku: "CSN152RD", name: "Dupla élű szeletelő - piros", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 6690, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CS182SBK", sku: "CS182SBK", name: "Julienne szeletelő - fekete", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 8490, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CS182SGR", sku: "CS182SGR", name: "Julienne szeletelő - zöld", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 8490, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CS182SRD", sku: "CS182SRD", name: "Julienne szeletelő - piros", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 8490, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CSN202BK", sku: "CSN202BK", name: "Állítható 4in1 szeletelő - fekete", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 8490, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CSN202GR", sku: "CSN202GR", name: "Állítható 4in1 szeletelő - zöld", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 8490, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CSN202RD", sku: "CSN202RD", name: "Állítható 4in1 szeletelő - piros", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 8490, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CSN402BK", sku: "CSN402BK", name: "Széles 4in1 szeletelő - fekete", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 13190, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "CSN550szett", sku: "CSN550szett", name: "Szeletelő szett + ajándék Reszelő és Tárolóedény", category: "Szeletelők", subcategory: "Kézi szeletelők", price: 16990, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Kerámia élű kézi szeletelő a jelenlegi webshop kínálatából." },

  { id: "MB-12S-PK", sku: "MB-12S-PK", name: "Termopohár 340 ml - rózsaszín", category: "Termoszok", subcategory: "Termopoharak", price: 13990, availability: "Kosárba tehető", tags: ["Termopohár", "Mellrák ellen"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-12S-SS", sku: "MB-12S-SS", name: "Termopohár 340 ml - ezüst", category: "Termoszok", subcategory: "Termopoharak", price: 13990, availability: "Kosárba tehető", tags: ["Termopohár"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-17S-WH", sku: "MB-17S-WH", name: "Termopohár 480 ml - fehér", category: "Termoszok", subcategory: "Termopoharak", price: 15990, availability: "Kosárba tehető", tags: ["Termopohár"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-06S-GY", sku: "MB-06S-GY", name: "Termopohár Slim 180 ml - sötétszürke", category: "Termoszok", subcategory: "Termopoharak", price: 20190, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-06S-WH", sku: "MB-06S-WH", name: "Termopohár Slim 180 ml - fehér", category: "Termoszok", subcategory: "Termopoharak", price: 20190, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-10S-BU", sku: "MB-10S-BU", name: "Termopohár Slim 300 ml - füstkék", category: "Termoszok", subcategory: "Termopoharak", price: 22190, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-10S-GY", sku: "MB-10S-GY", name: "Termopohár Slim 300 ml - sötétszürke", category: "Termoszok", subcategory: "Termopoharak", price: 22190, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-10S-SB", sku: "MB-10S-SB", name: "Termopohár Slim 300 ml - homokszín", category: "Termoszok", subcategory: "Termopoharak", price: 22190, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-10S-WH", sku: "MB-10S-WH", name: "Termopohár Slim 300 ml - fehér", category: "Termoszok", subcategory: "Termopoharak", price: 22190, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-17S-BU", sku: "MB-17S-BU", name: "Termopohár Slim 500 ml - füstkék", category: "Termoszok", subcategory: "Termopoharak", price: 25850, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-17S-GY", sku: "MB-17S-GY", name: "Termopohár Slim 500 ml - sötétszürke", category: "Termoszok", subcategory: "Termopoharak", price: 25850, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "MB-17S-WH-Slim", sku: "MB-17S-WH-Slim", name: "Termopohár Slim 500 ml - fehér", category: "Termoszok", subcategory: "Termopoharak", price: 25850, availability: "Értesítés kérhető", tags: ["Termopohár", "Újdonság"], summary: "Kyocera termopohár a jelenlegi webshop kínálatából." },

  { id: "BG075", sku: "BG075", name: "Kyocera élvédő 75mm", category: "Kiegészítők", subcategory: "Élvédők", price: 690, availability: "Kosárba tehető", tags: ["Késvédelem"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "BG110", sku: "BG110", name: "Kyocera élvédő 110mm", category: "Kiegészítők", subcategory: "Élvédők", price: 750, availability: "Kosárba tehető", tags: ["Késvédelem"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "BG130", sku: "BG130", name: "Kyocera élvédő 130mm", category: "Kiegészítők", subcategory: "Élvédők", price: 810, availability: "Kosárba tehető", tags: ["Késvédelem"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "BG140", sku: "BG140", name: "Kyocera élvédő 140mm", category: "Kiegészítők", subcategory: "Élvédők", price: 870, availability: "Kosárba tehető", tags: ["Késvédelem"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "BG180", sku: "BG180", name: "Kyocera élvédő 160-180mm", category: "Kiegészítők", subcategory: "Élvédők", price: 950, availability: "Kosárba tehető", tags: ["Késvédelem"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CC100GR", sku: "CC100GR", name: "Vágódeszka - zöld", category: "Kiegészítők", subcategory: "Vágódeszkák", price: 4790, availability: "Kosárba tehető", tags: ["Késbarát"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CC100RD", sku: "CC100RD", name: "Vágódeszka - piros", category: "Kiegészítők", subcategory: "Vágódeszkák", price: 4790, availability: "Kosárba tehető", tags: ["Késbarát"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "RSN20", sku: "RSN20", name: "Kézi élező fém késhez", category: "Kiegészítők", subcategory: "Élezők", price: 5490, availability: "Kosárba tehető", tags: ["Élezés"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "RSD01BK", sku: "RSD01BK", name: "Kézi élező kerámia késekhez", category: "Kiegészítők", subcategory: "Élezők", price: 8990, availability: "Kosárba tehető", tags: ["Élezés"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CSW18", sku: "CSW18", name: "Kerámia fenőkő acél késekhez - 18cm", category: "Kiegészítők", subcategory: "Élezők", price: 9590, availability: "Kosárba tehető", tags: ["Élezés"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "SS30", sku: "SS30", name: "Elektromos élező fém késekhez", category: "Kiegészítők", subcategory: "Élezők", price: 13990, availability: "Kosárba tehető", tags: ["Élezés"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "DS38", sku: "DS38", name: "Gyémántkorongos élező kerámia késekhez", category: "Kiegészítők", subcategory: "Élezők", price: 20490, availability: "Kosárba tehető", tags: ["Élezés"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CSL07-WHBK", sku: "CSL07-WHBK", name: "Fűszervágó kerámia olló", category: "Kiegészítők", subcategory: "Ollók", price: 21590, availability: "Kosárba tehető", tags: ["Kerámia él"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CPW-10BK", sku: "CPW-10BK", name: "Kétoldalas kerámia kaparó", category: "Kiegészítők", subcategory: "Kaparók", price: 6490, availability: "Kosárba tehető", tags: ["Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CY10", sku: "CY10", name: "Reszelő tál - fűszerekhez", category: "Kiegészítők", subcategory: "Reszelők", price: 4590, availability: "Kosárba tehető", tags: ["Kerámia"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "CD18", sku: "CD18", name: "Reszelő tál - zöldségekhez", category: "Kiegészítők", subcategory: "Reszelők", price: 7490, availability: "Kosárba tehető", tags: ["Kerámia"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN700801", sku: "TN700801", name: "Permetezőflakon 500ml", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 1397, availability: "Értesítés kérhető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN900127", sku: "TN900127", name: "Tartalék szivacs", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 1727, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN648249", sku: "TN648249", name: "Mikroszálas törlőkendő 5db", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 3302, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN900032", sku: "TN900032", name: "Üveg- és telefontisztító spray, 500ml", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 3302, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN825026", sku: "TN825026", name: "Impregnáló spray, 500ml textil-bőr", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 4064, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN900001", sku: "TN900001", name: "Grill- és sütőtisztító koncentrátum", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 4445, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN900126", sku: "TN900126", name: "Kerámialap tisztító- polírozó paszta, 500g", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 8128, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN900070", sku: "TN900070", name: "Lefolyótisztító", category: "Kiegészítők", subcategory: "Tisztítószerek", price: 15240, availability: "Kosárba tehető", tags: ["Technolit", "Tisztítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN860066", sku: "TN860066", name: "Szagsemlegesítő- és illatosító spray, 600ml - virág illat", category: "Kiegészítők", subcategory: "Szagsemlegesítők", price: 3810, availability: "Kosárba tehető", tags: ["Technolit", "Illatosítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TN860070", sku: "TN860070", name: "Szagsemlegesítő- és illatosító spray, 600ml - erdei gyümölcs", category: "Kiegészítők", subcategory: "Szagsemlegesítők", price: 3810, availability: "Kosárba tehető", tags: ["Technolit", "Illatosítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "TK901202", sku: "TK901202", name: "Szagsemlegesítő és kukamosó koncentrátum - ipari", category: "Kiegészítők", subcategory: "Szagsemlegesítők", price: 7620, availability: "Kosárba tehető", tags: ["Technolit", "Illatosítás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "PEN-BL", sku: "PEN-BL", name: "Kerámia golyós toll - KÉK", category: "Kiegészítők", subcategory: "Tollak", price: 7990, availability: "Kosárba tehető", tags: ["Kerámia golyó"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "PEN-BR", sku: "PEN-BR", name: "Kerámia golyós toll - BRONZ", category: "Kiegészítők", subcategory: "Tollak", price: 7990, availability: "Kosárba tehető", tags: ["Kerámia golyó"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "PEN-RD", sku: "PEN-RD", name: "Kerámia golyós toll - PIROS", category: "Kiegészítők", subcategory: "Tollak", price: 7990, availability: "Kosárba tehető", tags: ["Kerámia golyó"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "PEN-SL", sku: "PEN-SL", name: "Kerámia golyós toll - EZÜST", category: "Kiegészítők", subcategory: "Tollak", price: 7990, availability: "Kosárba tehető", tags: ["Kerámia golyó"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "LCKY-BL", sku: "LCKY-BL", name: "Szerencsehozó toll - KÉK", category: "Kiegészítők", subcategory: "Tollak", price: 15990, availability: "Kosárba tehető", tags: ["Kerámia golyó"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "LCKY-SL", sku: "LCKY-SL", name: "Szerencsehozó toll - EZÜST", category: "Kiegészítők", subcategory: "Tollak", price: 15990, availability: "Kosárba tehető", tags: ["Kerámia golyó"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "Gravir10", sku: "Gravir10", name: "Lézer gravírozás 10 karakter", category: "Kiegészítők", subcategory: "Gravírozás", price: 2300, availability: "Kosárba tehető", tags: ["Szolgáltatás", "Személyre szabás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

  { id: "Gravir22", sku: "Gravir22", name: "Lézer gravírozás 22 karakter", category: "Kiegészítők", subcategory: "Gravírozás", price: 2900, availability: "Kosárba tehető", tags: ["Szolgáltatás", "Személyre szabás"], summary: "Konyhai vagy ápolási kiegészítő a jelenlegi webshop kínálatából." },

];
