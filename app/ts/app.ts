import { NegotiationController } from "./controllers/NegotiationController";

const controller = new NegotiationController();

$(".form").submit(controller.adiciona.bind(controller));
