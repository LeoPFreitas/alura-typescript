import { Imprimivel } from "./Imprimivel";
import { Negotiation } from "./Negotiation";

export class Negotiations implements Imprimivel {
  private _negotiations: Negotiation[] = [];

  adiciona(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return ([] as Negotiation[]).concat(this._negotiations);
  }

  toText(): void {
    console.log("Impressao");
    console.log(JSON.stringify(this._negotiations));
  }
}
