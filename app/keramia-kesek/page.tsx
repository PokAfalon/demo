import type { Metadata } from "next";
import { ShopCatalogPage } from "@/components/ShopCatalogPage";

export const metadata: Metadata = { title: "Kerámia kések és konyhai termékek" };

export default function KnifePage() {
  return <ShopCatalogPage />;
}
