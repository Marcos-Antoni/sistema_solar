import "../style/normalize.scss"
import "../style/index.scss"

import EstrellaFugaz from "../components/estrellaFugaz/index"
import planetaEstrellaFugaz from "../components/planetaEstrellaFugaz/index"
import InformacionDePlanetas from "../components/InformacionDePlanetas/index"
import planeta from "../components/planeta/index"
import boton from "../components/botonNeon/index"

customElements.define("estrella-fugaz", EstrellaFugaz)
customElements.define("planeta-estrella-fugaz", planetaEstrellaFugaz)
customElements.define("informacion-de-planetas", InformacionDePlanetas)
customElements.define("info-planeta", planeta)
customElements.define("boton-neon", boton, { extends: "button" })
