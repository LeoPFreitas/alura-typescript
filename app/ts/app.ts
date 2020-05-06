const controller = new NegotiationController();

document
  .querySelector(".form")
  .addEventListener("submit", controller.adiciona.bind(controller));
