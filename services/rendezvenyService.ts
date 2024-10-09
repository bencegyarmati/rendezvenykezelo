import { Rendezveny } from "../models/rendezveny";
import { naplózás } from "../utils/dekoratorok";


export function helyiNaplózás(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {

    console.log(`Method ${propertyKey} has been called`);
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result;
    };
}
  

export class RendezvenyService {
    [x: string]: any;
  private rendezvenyek: Rendezveny[] = [];
 
  async letrehoz(rendezveny: Rendezveny): Promise<void> {
    try {
    this.rendezvenyek.push(rendezveny);
  } catch (error) {
    console.error(error);
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

}



