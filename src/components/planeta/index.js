import html from "./index.html"

export default class Planeta extends HTMLElement {
	constructor() {
		super()
		this.imgPlaneta
		this.superfisieDelPlaneta
		this.link
		this.width
		this.isRender = false

		this.attachShadow({ mode: "open" })

		// funsiones
		this.actualizarAtributos = () => {
			const img = this.shadowRoot.querySelector("img")
			const botonNeon = this.shadowRoot.querySelector(".boton-neon")
			const star = this.shadowRoot.querySelector("estrella-fugaz")

			this.width && img.style.setProperty("--width", this.width)
			img.src = this.imgPlaneta
			botonNeon.setAttribute("link", this.link)
			this.superfisieDelPlaneta && star.setAttribute("planeta", this.superfisieDelPlaneta)
		}
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = html

		this.actualizarAtributos()

		this.isRender = true
	}

	attributeChangedCallback(nameVal, oldVal, newVal) {
		if (nameVal == "img") {
			this.imgPlaneta = newVal
		} else if (nameVal == "superfisieplaneta") {
			this.superfisieDelPlaneta = newVal
		} else if (nameVal == "link") {
			this.link = newVal
		} else if (nameVal == "width") {
			this.width = newVal
		}
		if (this.isRender) {
			this.actualizarAtributos()
		}
	}

	static get observedAttributes() {
		return ["img", "superfisieplaneta", "link", "width"]
	}
}
