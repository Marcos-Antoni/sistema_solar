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
			const tamanoDeDiv = [contenedor.clientWidth, contenedor.clientHeight]
			const Star = document.createElement("span")
			const x = e.offsetX
			const y = e.offsetY

			let direccion = 1

			if (x < tamanoDeDiv[0] * 0.5) {
				Star.style = `
				--direccion-de-estrella: 225deg;
				--translateX:125px;
				`

				direccion = -1
			}

			if (tamanoDeDiv[1] > y + 125) {
				Star.style.top = `${y}px`
				Star.style.left = `${x}px`
			} else if (tamanoDeDiv[0] > x + 100 && 0 < x - 100) {
				Star.style.top = `${y - 100}px`
				Star.style.left = `${x + 100 * direccion}px`
			} else {
				Star.style.top = `${y - 150}px`
				Star.style.left = `${x}px`
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
		return ["planeta"]
	}
}
