import html from "./index.html"

export default class botonNeon extends HTMLButtonElement {
	constructor() {
		super()
		this.isRender = false
		this.link

		// funsiones
		this.actualizarDatos = () => {
			const linkDeInfo = this.querySelector("a")

			linkDeInfo.setAttribute("href", this.link)
		}
	}

	connectedCallback() {
		this.innerHTML = html

		this.actualizarDatos()

		this.isRender = true
	}

	attributeChangedCallback(nameVal, oldVal, newVal) {
		this.link = newVal

		this.isRender && this.actualizarDatos()
	}

	static get observedAttributes() {
		return ["link"]
	}
}
