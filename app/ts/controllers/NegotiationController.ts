class NegotiationController {
  private _inputData: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negotiationsView");

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector("#data");
    this._inputQuantity = <HTMLInputElement>document.querySelector("#quantity");
    this._inputValue = <HTMLInputElement>document.querySelector("#value");

    // renderiza a tabela assim que carregar
    this._negotiationsView.update(this._negotiations);
  }

  adiciona(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputData.value.replace(/-/g, ",")),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value)
    );

    this._negotiations.adiciona(negotiation);

    this._negotiationsView.update(this._negotiations);
  }
}
