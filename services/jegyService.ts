import { Rendezveny } from "../models/rendezveny";
import { Resztvevo } from "../models/resztvevo";
import { RendezvenyService } from "./rendezvenyService";

export class JegyService {
  constructor(private rendezvenyService: RendezvenyService) {}

  vasarolJegyet(rendezvenyNev: string, resztvevo: Resztvevo): void {
    const rendezveny = this.rendezvenyService.keresNev(rendezvenyNev);
    if (rendezveny) {
      rendezveny.resztvevok.push(resztvevo);
      console.log(
        `${resztvevo.nev} jegyet vásárolt a(z) ${rendezvenyNev} rendezvényre.`
      );
    } else {
      throw new Error("Nincs ilyen rendezvény.");
    }
  }
}