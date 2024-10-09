export function naplózás(
    cél: any,
    tulajdonságNév: string,
    leíró: PropertyDescriptor
  ) {
    const eredetiMetódus = leíró.value;
    leíró.value = function (...args: any[]) {
      console.log(`Metódus hívás: ${tulajdonságNév}`);
      return eredetiMetódus.apply(this, args);
    };
  }