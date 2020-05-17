import { Imprimivel } from "./Imprimivel";
import { Negotiation } from "./Negotiation";
import { Comparable } from "./Comparable";

export class Negotiations implements Imprimivel, Comparable<Negotiations> {
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

  isEqual(negotiations: Negotiations): boolean {
    return (
      JSON.stringify(this._negotiations) ==
      JSON.stringify(negotiations.toArray())
    );
  }
}
