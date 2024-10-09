import { RendezvenyService } from "./services/rendezvenyService";
import { Rendezveny } from "./models/rendezveny";
import { Koncert, Fesztival } from "./models/kategoria";
import { JegyService } from "./services/jegyService";

const rendezvenyService = new RendezvenyService();

// Rendezvény létrehozása
const koncert1: Rendezveny = {
  nev: "Rock Koncert",
  helyszin: "Budapest Park",
  ido: new Date("2024-12-20"),
  resztvevok: [
    { nev: "Kiss János", email: "kiss.janos@example.com" },
    { nev: "Nagy Péter", email: "nagy.peter@example.com" },
  ],
  kategoria: new Koncert("Koncert", "Rock"),
};

rendezvenyService.letrehoz(koncert1);

const fesztival1: Rendezveny = {
  nev: "Sziget Fesztivál",
  helyszin: "Óbudai-sziget",
  ido: new Date("2025-08-10"),
  resztvevok: [],
  kategoria: new Fesztival("Fesztivál", "Zenei"),
};

rendezvenyService.letrehoz(fesztival1);

// Rendezvények listázása
const rendezvenyek = rendezvenyService.listaz();

// Rendezvények megjelenítése
function rendezvenyMegjelenites(rendezveny: Rendezveny): void {
    console.log("Név:", rendezveny.nev);
    console.log("Helyszín:", rendezveny.helyszin);
    console.log("Idő:", rendezveny.ido);
    console.log("Résztvevők:", rendezveny.resztvevok);
    console.log("Kategória:", rendezveny.kategoria.nev);
    if (rendezveny.leiras) {
      console.log("Leírás:", rendezveny.leiras);
    }
    if (rendezveny.ar) {
      console.log("Ár:", rendezveny.ar);
    }
    if (rendezveny.jegyTipusok) {
      console.log("Jegytípusok:", rendezveny.jegyTipusok.join(", "));
    }
    if (rendezveny.korhatar) {
      console.log("Korhatár:", rendezveny.korhatar);
    }
    if (rendezveny.eloadok) {
      console.log("Előadók:", rendezveny.eloadok.join(", "));
    }
    console.log("--------------------");
  }

  rendezvenyek.forEach(rendezvenyMegjelenites);

// Jegyvásárlás
const jegyService = new JegyService(rendezvenyService);
jegyService.vasarolJegyet("Rock Koncert", {
  nev: "Kovács Anna",
  email: "kovacs.anna@example.com",
});

// Rendezvények keresése
const keresettRendezvenyek = rendezvenyService.keres(
  undefined,
  "Koncert",
  new Date("2024-01-01"),
  new Date("2024-12-31")
);
keresettRendezvenyek.forEach(rendezvenyMegjelenites);