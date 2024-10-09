import { Kategoria } from "./kategoria";
import { Resztvevo } from "./resztvevo";

export interface Rendezveny {
  nev: string;
  helyszin: string;
  ido: Date;
  resztvevok: Resztvevo[];
  kategoria: Kategoria;
}