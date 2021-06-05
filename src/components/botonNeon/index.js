import html from "./index.html"

export default class botonNeon extends HTMLButtonElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.innerHTML = html
	}

	attributeChangedCallback(nameVal, oldVal, newVal) {}

	static get observedAttributes() {}
}
