class NegotiationsView {
  private _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(model: Negotiations): void {
    this._element.innerHTML = this.template(model);
  }

  template(model: Negotiations): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>

      <tbody>
        ${model
          .toArray()
          .map((negotiation) => {
            return `
          <tr>
            <td>${negotiation.data.getDate()}/${
              negotiation.data.getMonth() + 1
            }/${negotiation.data.getFullYear()}
            </td>
            <td>${negotiation.quantity}</td>
            <td>${negotiation.value}</td>
            <td>${negotiation.volume}</td>
          </tr>
        `;
          })
          .join("")}
      </tbody>

      <tfoot>
      </tfoot>
    </table>
    `;
  }
}
