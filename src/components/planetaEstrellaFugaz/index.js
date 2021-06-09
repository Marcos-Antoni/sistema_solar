import html from "./index.html"
import ImagenPlaneta from "../classCambiarImagen"

export default class otros extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
		this.shadowRoot.innerHTML = html

		const planeta = this.shadowRoot.querySelector("estrella-fugaz")
		ImagenPlaneta.html = planeta

		ImagenPlaneta.cambiarUrl("../img/superficie_de_la_tierra.jpg")
	}

	connectedCallback() {
		this.isRender = true
	}
}
