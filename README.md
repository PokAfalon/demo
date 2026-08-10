# DOKY / Digytall Office UI/UX demo v7

Interaktív Next.js + TypeScript prototípus a DOKY központi oldalhoz, az irodatechnikai részhez, a szolgáltatásokhoz és a kerámiakés webshophoz.

> A fejlesztői szerver nincs fixen a `127.0.0.1` címhez kötve, ezért a `http://localhost:3000` és a `http://127.0.0.1:3000` cím is használható.
## Indítás Windows alatt

1. Csomagold ki a ZIP-et egy egyszerű mappába, például: `C:\doky-demo-v7`
2. Indítsd el a `start-windows.bat` fájlt.
3. Első alkalommal az npm letölti a szükséges csomagokat.
4. Amikor a terminálban megjelenik a `Ready` üzenet, nyisd meg: `http://localhost:3000`

Ha egy korábbi telepítésből maradt hibás gyorsítótár, használd a `reset-and-start-windows.bat` fájlt.

Szükséges: Node.js 20.9 vagy újabb.

## Közvetlen oldalak

- Főoldal / DOKY irányító: `http://localhost:3000`
- Irodatechnika: `http://localhost:3000/irodatechnika`
- Szolgáltatások: `http://localhost:3000/szerviz`
- Kerámiakés webshop: `http://localhost:3000/keramia-kesek`
- Kapcsolat: `http://localhost:3000/kapcsolat`
- Süti beállítások: `http://localhost:3000/suti-beallitasok`

## Ami ebben a verzióban ténylegesen interaktív

### Webshop

- kategóriakártyák és kategóriaszűrés
- alkategória-szűrés
- elérhetőségi szűrés
- akciós és újdonság szűrők
- minimum / maximum ár
- keresés név, cikkszám, sorozat és tag alapján
- rendezés
- aktív szűrőcímkék törlése
- lapozás
- termékrészletező ablak
- kosárba helyezés
- kosármennyiség növelése / csökkentése
- kosár megőrzése böngészőben localStorage segítségével
- pénztár adatmezőkkel
- házhozszállítás / személyes átvétel választás
- dinamikusan változó szállítási díj és végösszeg
- bankkártya / átutalás választás
- demo rendelés-visszaigazolás
- készletértesítő űrlap nem rendelhető termékekhez

A demo nem indít valódi bankkártyás fizetést és nem küld valódi rendelést.

### Irodatechnika

- keresés
- készülékszűrők
- részletező modal
- termékspecifikációs összefoglaló
- ajánlatkérő űrlap és sikeres demo-visszaigazolás

### Szolgáltatások

Mind a hat szolgáltatási kártya megnyitja a hozzá tartozó űrlapot, az űrlapok pedig elküldhetők demo módban.

### Kapcsolat

Az űrlap kliensoldalon működik és sikeres demo-visszaigazolást ad.

### Egyéb

- mobil navigáció
- DOKY útbaigazító kártyák
- webshop belső navigáció
- GYIK lenyitható elemek
- adatkezelési oldal
- működő süti-beállítási demo localStorage mentéssel

## Fontos

Ez frontend prototípus. A valódi éles rendszerben az űrlapokat, rendeléseket, készletet és fizetést backendhez / Shoprenterhez / Supabase-hez és a kiválasztott fizetési szolgáltatóhoz kell kötni.
