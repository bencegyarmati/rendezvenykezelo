import { Kategoria } from "./kategoria";
import { Resztvevo } from "./resztvevo";

export interface Rendezveny {
  nev: string;
  helyszin: string;
  ido: Date;
  resztvevok: Resztvevo[];
  kategoria: Kategoria;
  // opcionális
  leiras?: string;  
  ar?: number;  
  jegyTipusok?: string[]; 
  korhatar?: number;  
  eloadok?: string[];  
}