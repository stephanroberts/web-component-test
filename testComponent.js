class TestComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div>
          <h2> Hello to the whole World! </h2>
        </div>
      `;
  }
}

customElements.define('test-component', TestComponent);
