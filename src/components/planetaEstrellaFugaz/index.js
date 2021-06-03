import html from "./index.html"

export default class otros extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" })
		shadow.innerHTML = html
		this.isRender = true
	}
}
