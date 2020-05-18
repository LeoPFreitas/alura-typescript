import { NegotiationParcial, Negotiation } from "../models/index";

export class NegotiationService {
  getNegotiation(handler: handlerFunction): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/data")
      .then((res) => handler(res))
      .then((res) => res.json())
      .then((data: NegotiationParcial[]) =>
        data.map(
          (dado) => new Negotiation(new Date(), dado.vezes, dado.montante)
        )
      )
      .catch((err) => {
        console.log(err);
        throw new Error("Não foi possível importar as negociacoes");
      });
  }
}

export interface handlerFunction {
  (res: Response): Response;
}
