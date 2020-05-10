import { NegotiationController } from "./controllers/NegotiationController";

const controller = new NegotiationController();

$(".form").submit(controller.adiciona.bind(controller));
$("#button-import").click(controller.importData.bind(controller));
