export class UxsBaseWebComponent extends HTMLElement {
    constructor() {
        super();
        // Activar Shadow DOM opcionalmente
        if (this.useShadow) {
            this.attachShadow({ mode: "open" });
        }
    }

    /**
     * Define si el componente usa Shadow DOM o no.
     * @returns {boolean}
     */
    protected get useShadow(): boolean {
        return false;
    }

    /**
     * Se ejecuta cuando el componente se conecta al DOM.
     */
    connectedCallback() {
        this.render();
    }

    /**
     * Método de renderización que cada componente hijo puede sobreescribir.
     */
    protected render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<slot></slot>`;
        } else {
            this.innerHTML = `<slot></slot>`;
        }
    }
}

// Registrar el componente base para que se pueda extender
customElements.define("uxs-base-web-component", UxsBaseWebComponent);