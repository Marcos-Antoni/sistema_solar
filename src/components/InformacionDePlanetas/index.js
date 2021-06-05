import html from "./index.html"

export default class InformacionDePlanetas extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })

		// funciones
		this.newStar = num => {
			const seccionPlanetas = document.querySelector(".seccion-de-planetas")

			for (let i = 0; i < num; i++) {
				const star = document.createElement("span")
				const numMax = 100
				const numMin = 0.5

				const x = Math.random() * (numMax - numMin) + numMin
				const y = Math.random() * (numMax - numMin) + numMin

				star.className = "estrella"
				star.style.top = `${y}%`
				star.style.left = `${x}%`

				seccionPlanetas.appendChild(star)
			}
		}
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = html

		this.newStar(250)
	}
}
