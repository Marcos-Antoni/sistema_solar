import html from "./index.html"

export default class planetaDeEstrellaFugaz extends HTMLElement {
	constructor() {
		super()
		this.saludo
		this.isRender = false
		this.attachShadow({ mode: "open" })
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = html
		this.isRender = true
	}

	attributeChangedCallback(nameVal, oldVal, newVal) {
		this.saludo = newVal

		if (this.isRender) {
			this.appendChild(`<h2>hola ${this.saludo}<h2>`)
		}
	}

	static get observedAttributes() {
		return ["saludo"]
	}
}
