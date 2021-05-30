export default class otros extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" })
		shadow.innerHTML = "<h2>hola mundo</h2>"
		this.isRender = true
	}
}
