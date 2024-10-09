import { Rendezveny } from "../models/rendezveny";

export class RendezvenyService {
  private rendezvenyek: Rendezveny[] = [];

  letrehoz(rendezveny: Rendezveny): void {
    this.rendezvenyek.push(rendezveny);
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
  
}