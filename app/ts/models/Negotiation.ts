import { Imprimivel } from "./Imprimivel";

export class Negotiation implements Imprimivel {
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
}
