export class Kategoria {
    constructor(public nev: string) {}
  }
  
  export class Koncert extends Kategoria {
    constructor(nev: string, public zeneiStil: string) {
      super(nev);
    }
  }
  
  export class Fesztival extends Kategoria {
    constructor(nev: string, public tema: string) {
      super(nev);
    }
  }