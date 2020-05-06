class Negotiations {
  // é do lispo array que contem objetos negotiation
  // private _negotiations: Array<Negotiation> = [];
  private _negotiations: Negotiation[] = [];

  adiciona(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return [].concat(this._negotiations);
  }
}
