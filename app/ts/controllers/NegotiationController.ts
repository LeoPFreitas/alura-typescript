import { NegotiationsView, MessageView } from "../views/index";
import { Negotiations, Negotiation } from "../models/index";
import { domInject } from "../helpers/decorators/index";

export class NegotiationController {
  @domInject("#data")
  private _inputData: JQuery;

  @domInject("#quantity")
  private _inputQuantity: JQuery;

  @domInject("#value")
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negotiationsView");
  private _messageView = new MessageView("#messageView");

  constructor() {
    // renderiza a tabela assim que carregar
    this._negotiationsView.update(this._negotiations);
  }

  private _diaUtil(data: Date) {
    return data.getDay() != Days.Sabado && data.getDay() != Days.Domingo;
  }

  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ","));
    this._diaUtil(data);

    if (!this._diaUtil(data)) {
      this._messageView.update(
        "Negocioacoes só podem ser feitas em dias úteis"
      );
      return;
    }

    const negotiation = new Negotiation(
      data,
      parseInt(this._inputQuantity.val()),
      parseFloat(this._inputValue.val())
    );

    this._negotiations.adiciona(negotiation);
    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negotiation added with success!");
  }
}

enum Days {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
