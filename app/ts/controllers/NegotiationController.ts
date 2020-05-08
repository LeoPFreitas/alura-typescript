import { NegotiationsView, MessageView } from "../views/index";
import { Negotiations, Negotiation } from "../models/index";

export class NegotiationController {
  private _inputData: JQuery;
  private _inputQuantity: JQuery;
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negotiationsView");
  private _messageView = new MessageView("#messageView");

  constructor() {
    this._inputData = $("#data");
    this._inputQuantity = $("#quantity");
    this._inputValue = $("#value");

    // renderiza a tabela assim que carregar
    this._negotiationsView.update(this._negotiations);
  }

  adiciona(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputData.val().replace(/-/g, ",")),
      parseInt(this._inputQuantity.val()),
      parseFloat(this._inputValue.val())
    );

    this._negotiations.adiciona(negotiation);

    this._negotiationsView.update(this._negotiations);

    this._messageView.update("Negotiation added with success!");
  }
}
