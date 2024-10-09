import { RendezvenyService } from "./services/rendezvenyService";
import { Rendezveny } from "./models/rendezveny";
import { Koncert, Fesztival } from "./models/kategoria";
import { Resztvevo } from "./models/resztvevo";

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
console.log(rendezvenyService.listaz());

// Rendezvények keresése kategória alapján
console.log(rendezvenyService.keresKategoria("Koncert"));