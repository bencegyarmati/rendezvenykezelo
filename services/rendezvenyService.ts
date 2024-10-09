import { Rendezveny } from "../models/rendezveny";
import { naplózás } from "../utils/dekoratorok";

export class RendezvenyService {
  [x: string]: any;
  private rendezvenyek: Rendezveny[] = [];

  
  async letrehoz(rendezveny: Rendezveny): Promise<void> {
    try {
      // ... aszinkron művelet, pl. adatbázisba mentés ...
      this.rendezvenyek.push(rendezveny);
    } catch (hiba) {
      console.error("Hiba a rendezvény létrehozása során:", hiba);
      // ... további hibakezelés, pl. egyedi hiba dobása ...
    }
  }

  szerkeszt(nev: string, ujRendezveny: Rendezveny): void {
    const index = this.rendezvenyek.findIndex((r) => r.nev === nev);
    if (index !== -1) {
      this.rendezvenyek[index] = ujRendezveny;
    }
  }

  torol(nev: string): void {
    this.rendezvenyek = this.rendezvenyek.filter((r) => r.nev !== nev);
  }

  listaz(): Rendezveny[] {
    return this.rendezvenyek;
  }

  // Keresés kategória alapján
  keresKategoria(kategoriaNev: string): Rendezveny[] {
    return this.rendezvenyek.filter((r) => r.kategoria.nev === kategoriaNev);
  }

  keres(
    nev?: string,
    kategoriaNev?: string,
    idotol?: Date,
    idoig?: Date
  ): Rendezveny[] {
    return this.rendezvenyek.filter((r) => {
      return (
        (!nev || r.nev.includes(nev)) &&
        (!kategoriaNev || r.kategoria.nev === kategoriaNev) &&
        (!idotol || r.ido >= idotol) &&
        (!idoig || r.ido <= idoig)
      );
    });
  }
}