import html from "./index.html"

export default class Planeta extends HTMLElement {
	constructor() {
		super()
		this.img
		this.attachShadow({ mode: "open" })
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = html
		const img = this.shadowRoot.querySelector("img")

		img.src = this.img
		console.log(img.src)
	}

	attributeChangedCallback(nameVal, oldVal, newVal) {
		this.img = newVal
	}

	static get observedAttributes() {
		return ["img"]
	}
}
