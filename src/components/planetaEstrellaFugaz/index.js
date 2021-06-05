import html from "./index.html"

export default class otros extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = html
		this.isRender = true
	}
}
