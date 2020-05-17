import { Imprimivel } from "./Imprimivel";
import { Comparable } from "./Comparable";

export class Negotiation implements Imprimivel, Comparable<Negotiation> {
  constructor(
    readonly data: Date,
    readonly quantity: number,
    readonly value: number
  ) {}

  get volume() {
    return this.quantity * this.value;
  }

  toText(): void {
    console.log("Impressao");
    console.log(`
    Data: ${this.quantity},
    Valor: ${this.value},
    Volume: ${this.volume},
  `);
  }

  isEqual(negotiation: Negotiation): boolean {
    return (
      this.data.getDate() == negotiation.data.getDate() &&
      this.data.getMonth() == negotiation.data.getMonth() &&
      this.data.getFullYear() == negotiation.data.getFullYear()
    );
  }
}
