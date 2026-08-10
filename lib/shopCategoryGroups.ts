import type { ShopCategory } from "@/lib/shopProducts";

export const shopCategoryGroups = [
  {
    id: "all",
    title: "Összes termék",
    description: "A teljes kerámiakés és konyhai termékkínálat.",
    categories: [] as ShopCategory[],
    highlights: [] as string[],
  },
  {
    id: "knives",
    title: "Kések",
    description: "Kerámia kések több méretben, színben és sorozatban.",
    categories: ["Kések"] as ShopCategory[],
    highlights: ["Séf kések", "JPN", "KyoTop", "BIO"],
  },
  {
    id: "sets",
    title: "Készletek",
    description: "Késkészletek, szettek és késtartók ajándékba vagy otthonra.",
    categories: ["Készletek"] as ShopCategory[],
    highlights: ["Szettek", "Késtartók", "Színes", "Fekete"],
  },
  {
    id: "preparation",
    title: "Konyhai előkészítés",
    description: "Malmok, hámozók és szeletelők a gyorsabb előkészítéshez.",
    categories: ["Malmok", "Hámozók", "Szeletelők"] as ShopCategory[],
    highlights: ["Malmok", "Hámozók", "Szeletelők"],
  },
  {
    id: "cookware",
    title: "Edények",
    description: "Serpenyők és lábosok a mindennapi főzéshez.",
    categories: ["Edények"] as ShopCategory[],
    highlights: ["Serpenyők", "Lábosok"],
  },
  {
    id: "thermos",
    title: "Termoszok",
    description: "Termopoharak és hőtartó megoldások útközben.",
    categories: ["Termoszok"] as ShopCategory[],
    highlights: ["Termopoharak"],
  },
  {
    id: "accessories",
    title: "Kiegészítők",
    description: "Vágódeszkák, élvédők, élezők, ollók és további eszközök.",
    categories: ["Kiegészítők"] as ShopCategory[],
    highlights: ["Vágódeszkák", "Élvédők", "Élezők", "Ollók"],
  },
] as const;

export type ShopCategoryGroupId = (typeof shopCategoryGroups)[number]["id"];
