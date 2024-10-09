import { RendezvenyService } from "./rendezvenyService";
import { Rendezveny } from "../models/rendezveny";
import { Koncert } from "../models/kategoria";

describe("RendezvenyService", () => {
  let service: RendezvenyService;

  beforeEach(() => {
    service = new RendezvenyService();
  });

  it("should create a new event", () => {
    const rendezveny: Rendezveny = {
      nev: "Test Event",
      helyszin: "Test Location",
      ido: new Date(),
      resztvevok: [],
      kategoria: new Koncert("Koncert", "Rock"),
    };
    service.letrehoz(rendezveny);
    expect(service.listaz()).toContain(rendezveny);
  });

  it("should edit an existing event", () => {
    const rendezveny: Rendezveny = {
      nev: "Test Event",
      helyszin: "Test Location",
      ido: new Date(),
      resztvevok: [],
      kategoria: new Koncert("Koncert", "Rock"),
    };
    service.letrehoz(rendezveny);
    const ujRendezveny: Rendezveny = {
      ...rendezveny,
      nev: "Modified Event",
    };
    service.szerkeszt("Test Event", ujRendezveny);
    expect(service.listaz()).toContain(ujRendezveny);
  });
  
});