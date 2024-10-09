// Nem vagyok biztos a működésében
import { Rendezveny } from "../models/rendezveny";
import { Koncert } from "../models/kategoria";

// A rendezvény kategóriája alapján dönti el, hogy a rendezvény koncert-e.
export function isKoncert(
  rendezveny: Rendezveny
): rendezveny is Rendezveny & { kategoria: Koncert } {
  return rendezveny.kategoria instanceof Koncert;
}