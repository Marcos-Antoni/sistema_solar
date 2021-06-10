import html from "./index.html"
import ImagenPlaneta from "../classCambiarImagen"

export default class InformacionDePlanetas extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })

		this.arrayDeInformacionDePlanetas = [
			{
				nombre: "Mercurio",
				contenido: `Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño.`,
				img: "./img/planeta_mercurio.png",
				link: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
				superfisieplaneta: "./img/superficie_de_mercurio.jpg",
			},
			{
				nombre: "Venus",
				contenido: `Venus es el segundo planeta del sistema solar, tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. `,
				img: "./img/planeta_venus.png",
				link: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
				superfisieplaneta: "./img/superficie_de_venus.jpg",
				width: "100px",
			},
			{
				nombre: "Tierra",
				contenido: `La Tierra es un planeta del sistema solar que gira alrededor de su estrella el Sol
en la tercera órbita más interna.`,
				img: "./img/planeta_tierra.png",
				link: "https://es.wikipedia.org/wiki/Tierra",
				superfisieplaneta: "./img/superficie_de_la_tierra.jpg",
			},
			{
				nombre: "Marte",
				contenido: `Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.`,
				img: "./img/palenta_marte.png",
				link: "https://es.wikipedia.org/wiki/Marte_(planeta)",
				superfisieplaneta: "./img/superficie_de_marte.jpg",
			},
			{
				nombre: "Júpiter",
				contenido: `Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.`,
				img: "./img/planeta_jupiter.png",
				link: "https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
				superfisieplaneta: "./img/superficie_de_jupiter.jpg",
			},
			{
				nombre: "Saturno",
				contenido: `Saturno es el sexto planeta del sistema solar, el segundo en masa y el único con un sistema de anillos visible desde la Tierra.`,
				img: "./img/planeta_saturno.png",
				link: "https://es.wikipedia.org/wiki/Saturno_(planeta)",
				superfisieplaneta: "./img/superficie_de_saturno.jpg",
			},
			{
				nombre: "Urano",
				contenido: `Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo.`,
				img: "./img/planeta_urano.png",
				link: "https://es.wikipedia.org/wiki/Urano_(planeta)",
				superfisieplaneta: "./img/superficie_de_urano.jpg",
			},
			{
				nombre: "Neptuno",
				contenido: `Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. `,
				img: "./img/planeta_neptuno.png",
				link: "https://es.wikipedia.org/wiki/Neptuno_(planeta)",
				superfisieplaneta: "./img/superficie_de_neptuno.jpg",
			},
		]

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

		this.agregarPlanetas = () => {
			const contenedorDePlanetas = this.shadowRoot.querySelector(".contenedor-grid")

			this.arrayDeInformacionDePlanetas.map(info => {
				const planeta = document.createElement("info-planeta")

				planeta.innerHTML = `
				<span slot="nombre">${info.nombre}</span>
				<span slot="contenido">${info.contenido}</span>`

				planeta.setAttribute("img", info.img)
				planeta.setAttribute("link", info.link)
				planeta.setAttribute("superfisieplaneta", info.superfisieplaneta)
				planeta.setAttribute("class", "planeta")

				info.width && planeta.setAttribute("width", info.width)

				planeta.addEventListener("mousemove", () =>
					ImagenPlaneta.cambiarUrl(info.superfisieplaneta)
				)

				contenedorDePlanetas.appendChild(planeta)
			})
		}
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = html

		this.agregarPlanetas()

		this.newStar(300)
	}
}
