import html from "./index.html"
// import img from ""

export default class estrellaFugaz extends HTMLElement {
	constructor() {
		super()
		this.isRender = false
		this.StarClassName = "estrellafugaz"
		this.attachShadow({ mode: "open" })
		this.shadowRoot.innerHTML = html

		// funciones
		this.appearStar = (e, contenedor) => {
			const tamanoDeDiv = [e.target.clientWidth, e.target.clientHeight]
			const Star = document.createElement("span")

			if (e.x < tamanoDeDiv[0] * 0.5) {
				Star.style = `
				--direccion-de-estrella: 225deg;
				--translateX:125px;
				`
			}

			if (tamanoDeDiv[1] > e.y + 125) {
				Star.style.top = `${e.y}px`
				Star.style.left = `${e.x}px`
			} else if (tamanoDeDiv[0] > e.x + 100) {
				Star.style.top = `${e.y - 100}px`
				Star.style.left = `${e.x + 100}px`
			} else {
				Star.style.top = `${e.y - 150}px`
				Star.style.left = `${e.x}px`
			}

			Star.className = this.StarClassName

			e.target.appendChild(Star)
			this.removeStar(contenedor)
		}

		this.removeStar = contenedor => {
			setTimeout(() => {
				const Span = this.shadowRoot.querySelector(`span`)
				contenedor.removeChild(Span)
			}, 1000)
		}
	}

	connectedCallback() {
		this.contenedorDiv = this.shadowRoot.querySelector(".contenedor-de-estrellafugaz")

		//declarando eventos
		this.contenedorDiv.addEventListener("click", e => {
			this.appearStar(e, this.contenedorDiv)
		})

		// colocando atributos
		this.contenedorDiv.style.backgroundImage = `url(${this.url})`

		this.isRender = true
	}

	attributeChangedCallback(nameVal, oldVal, newVal) {
		this.url = newVal

		// colocando atributos
		if (this.isRender) {
			this.contenedorDiv.style.backgroundImage = `url(${this.url})`
		}
	}

	static get observedAttributes() {
		return ["url"]
	}
}
