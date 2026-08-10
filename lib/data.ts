export type OfficeProduct = {
  name: string;
  type: "Nyomtató" | "Multifunkciós";
  color: "Színes" | "Fekete-fehér";
  format: "A4" | "A3";
  speed: number;
  summary: string;
};

export const products: OfficeProduct[] = [
  { name: "ECOSYS P6235cdn", type: "Nyomtató", color: "Színes", format: "A4", speed: 35, summary: "Kompakt színes hálózati nyomtató automata kétoldalas működéssel." },
  { name: "ECOSYS P7240cdn", type: "Nyomtató", color: "Színes", format: "A4", speed: 40, summary: "Gyors, hálózati színes nyomtató nagyobb munkacsoportok számára." },
  { name: "ECOSYS PA4500x", type: "Nyomtató", color: "Fekete-fehér", format: "A4", speed: 45, summary: "Megbízható munkacsoportos nyomtató nagyobb havi terhelésre." },
  { name: "ECOSYS PA5000x", type: "Nyomtató", color: "Fekete-fehér", format: "A4", speed: 50, summary: "Gyors mono készülék fejlett biztonsági és hálózati lehetőségekkel." },
  { name: "ECOSYS MA3500cifx", type: "Multifunkciós", color: "Színes", format: "A4", speed: 35, summary: "Nyomtatás, másolás, szkennelés és fax kompakt irodák számára." },
  { name: "ECOSYS MA4500ifx", type: "Multifunkciós", color: "Fekete-fehér", format: "A4", speed: 45, summary: "Biztonságos és gyors multifunkciós készülék kis munkacsoportoknak." },
  { name: "TASKalfa MZ2501ci", type: "Multifunkciós", color: "Színes", format: "A3", speed: 25, summary: "Rugalmasan bővíthető A3-as színes rendszer általános irodai feladatokra." },
  { name: "TASKalfa MZ4000ci", type: "Multifunkciós", color: "Színes", format: "A3", speed: 40, summary: "Moduláris A3-as rendszer modern dokumentumkezeléssel." },
  { name: "TASKalfa MZ5001i", type: "Multifunkciós", color: "Fekete-fehér", format: "A3", speed: 50, summary: "Nagy teljesítményű fekete-fehér irodai központ intenzív használatra." },
  { name: "TASKalfa MZ7001ci", type: "Multifunkciós", color: "Színes", format: "A3", speed: 70, summary: "Nagy terhelésű, gyors színes dokumentumkezelő központ." }
];
