;(() => {
	"use strict"
	var e = {
			188: (e, t, n) => {
				n.d(t, { Z: () => i })
				var o = n(645),
					r = n.n(o)()(function (e) {
						return e[1]
					})
				r.push([
					e.id,
					"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);",
				]),
					r.push([
						e.id,
						'body{position:relative;min-height:100vh;max-width:100vw;height:auto;width:100vw;color:#fff;background-color:#10101f;font-family:"Roboto", sans-serif;overflow-x:hidden;z-index:1}body header{height:40vh;max-width:100vw;width:100vw;margin:0;z-index:5;overflow:hidden}body .seccion-de-planetas{position:relative;padding:0 40px;width:auto;height:auto;min-height:60vh;overflow:hidden}body .seccion-de-planetas .estrella{--sombre-de-estrella: #ffffff0a;--tamano-de-estrella: 3px;position:absolute;top:50%;left:50%;height:var(--tamano-de-estrella);width:var(--tamano-de-estrella);background-color:#fff;box-shadow:0 0 0 3px var(--sombre-de-estrella),0 0 0 6px var(--sombre-de-estrella);border-radius:50%;z-index:1}@media (max-width: 365px){body .seccion-de-planetas{padding:0 10px}}body footer{position:fixed;bottom:0;display:flex;justify-content:flex-end;width:100%;z-index:100}body footer a{margin:20px}body footer a i{color:#fff;background-color:#000;border-radius:50%;font-size:46px;width:50px;height:50px;transition:0.5s}body footer a i:hover{color:#000;background-color:#fff}\n',
						"",
					])
				const i = r
			},
			574: (e, t, n) => {
				n.d(t, { Z: () => i })
				var o = n(645),
					r = n.n(o)()(function (e) {
						return e[1]
					})
				r.push([
					e.id,
					'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */*{max-width:100vw;padding:0;margin:0;box-sizing:border-box}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n',
					"",
				])
				const i = r
			},
			645: e => {
				e.exports = function (e) {
					var t = []
					return (
						(t.toString = function () {
							return this.map(function (t) {
								var n = e(t)
								return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
							}).join("")
						}),
						(t.i = function (e, n, o) {
							"string" == typeof e && (e = [[null, e, ""]])
							var r = {}
							if (o)
								for (var i = 0; i < this.length; i++) {
									var a = this[i][0]
									null != a && (r[a] = !0)
								}
							for (var l = 0; l < e.length; l++) {
								var c = [].concat(e[l])
								;(o && r[c[0]]) ||
									(n && (c[2] ? (c[2] = "".concat(n, " and ").concat(c[2])) : (c[2] = n)),
									t.push(c))
							}
						}),
						t
					)
				}
			},
			379: (e, t, n) => {
				var o,
					r = (function () {
						var e = {}
						return function (t) {
							if (void 0 === e[t]) {
								var n = document.querySelector(t)
								if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
									try {
										n = n.contentDocument.head
									} catch (e) {
										n = null
									}
								e[t] = n
							}
							return e[t]
						}
					})(),
					i = []
				function a(e) {
					for (var t = -1, n = 0; n < i.length; n++)
						if (i[n].identifier === e) {
							t = n
							break
						}
					return t
				}
				function l(e, t) {
					for (var n = {}, o = [], r = 0; r < e.length; r++) {
						var l = e[r],
							c = t.base ? l[0] + t.base : l[0],
							s = n[c] || 0,
							u = "".concat(c, " ").concat(s)
						n[c] = s + 1
						var p = a(u),
							f = { css: l[1], media: l[2], sourceMap: l[3] }
						;-1 !== p
							? (i[p].references++, i[p].updater(f))
							: i.push({ identifier: u, updater: m(f, t), references: 1 }),
							o.push(u)
					}
					return o
				}
				function c(e) {
					var t = document.createElement("style"),
						o = e.attributes || {}
					if (void 0 === o.nonce) {
						var i = n.nc
						i && (o.nonce = i)
					}
					if (
						(Object.keys(o).forEach(function (e) {
							t.setAttribute(e, o[e])
						}),
						"function" == typeof e.insert)
					)
						e.insert(t)
					else {
						var a = r(e.insert || "head")
						if (!a)
							throw new Error(
								"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
							)
						a.appendChild(t)
					}
					return t
				}
				var s,
					u =
						((s = []),
						function (e, t) {
							return (s[e] = t), s.filter(Boolean).join("\n")
						})
				function p(e, t, n, o) {
					var r = n
						? ""
						: o.media
						? "@media ".concat(o.media, " {").concat(o.css, "}")
						: o.css
					if (e.styleSheet) e.styleSheet.cssText = u(t, r)
					else {
						var i = document.createTextNode(r),
							a = e.childNodes
						a[t] && e.removeChild(a[t]),
							a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
					}
				}
				function f(e, t, n) {
					var o = n.css,
						r = n.media,
						i = n.sourceMap
					if (
						(r ? e.setAttribute("media", r) : e.removeAttribute("media"),
						i &&
							"undefined" != typeof btoa &&
							(o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
								btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
								" */"
							)),
						e.styleSheet)
					)
						e.styleSheet.cssText = o
					else {
						for (; e.firstChild; ) e.removeChild(e.firstChild)
						e.appendChild(document.createTextNode(o))
					}
				}
				var d = null,
					h = 0
				function m(e, t) {
					var n, o, r
					if (t.singleton) {
						var i = h++
						;(n = d || (d = c(t))),
							(o = p.bind(null, n, i, !1)),
							(r = p.bind(null, n, i, !0))
					} else
						(n = c(t)),
							(o = f.bind(null, n, t)),
							(r = function () {
								!(function (e) {
									if (null === e.parentNode) return !1
									e.parentNode.removeChild(e)
								})(n)
							})
					return (
						o(e),
						function (t) {
							if (t) {
								if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
									return
								o((e = t))
							} else r()
						}
					)
				}
				e.exports = function (e, t) {
					;(t = t || {}).singleton ||
						"boolean" == typeof t.singleton ||
						(t.singleton =
							(void 0 === o &&
								(o = Boolean(window && document && document.all && !window.atob)),
							o))
					var n = l((e = e || []), t)
					return function (e) {
						if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
							for (var o = 0; o < n.length; o++) {
								var r = a(n[o])
								i[r].references--
							}
							for (var c = l(e, t), s = 0; s < n.length; s++) {
								var u = a(n[s])
								0 === i[u].references && (i[u].updater(), i.splice(u, 1))
							}
							n = c
						}
					}
				}
			},
		},
		t = {}
	function n(o) {
		var r = t[o]
		if (void 0 !== r) return r.exports
		var i = (t[o] = { id: o, exports: {} })
		return e[o](i, i.exports, n), i.exports
	}
	;(n.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e
		return n.d(t, { a: t }), t
	}),
		(n.d = (e, t) => {
			for (var o in t)
				n.o(t, o) &&
					!n.o(e, o) &&
					Object.defineProperty(e, o, { enumerable: !0, get: t[o] })
		}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			var e = n(379),
				t = n.n(e),
				o = n(574)
			t()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals
			var r = n(188)
			function i(e) {
				return (i =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e
						  })(e)
			}
			function a(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(e, o.key, o)
				}
			}
			function l(e, t) {
				return !t || ("object" !== i(t) && "function" != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								)
							return e
					  })(e)
					: t
			}
			function c(e) {
				var t = "function" == typeof Map ? new Map() : void 0
				return (c = function (e) {
					if (
						null === e ||
						((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
					)
						return e
					var n
					if ("function" != typeof e)
						throw new TypeError("Super expression must either be null or a function")
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e)
						t.set(e, o)
					}
					function o() {
						return s(e, arguments, f(this).constructor)
					}
					return (
						(o.prototype = Object.create(e.prototype, {
							constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
						})),
						p(o, e)
					)
				})(e)
			}
			function s(e, t, n) {
				return (s = u()
					? Reflect.construct
					: function (e, t, n) {
							var o = [null]
							o.push.apply(o, t)
							var r = new (Function.bind.apply(e, o))()
							return n && p(r, n.prototype), r
					  }).apply(null, arguments)
			}
			function u() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1
				if (Reflect.construct.sham) return !1
				if ("function" == typeof Proxy) return !0
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					)
				} catch (e) {
					return !1
				}
			}
			function p(e, t) {
				return (p =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			function f(e) {
				return (f = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			t()(r.Z, { insert: "head", singleton: !1 }), r.Z.locals
			var d = (function (e) {
				!(function (e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError("Super expression must either be null or a function")
					;(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 },
					})),
						t && p(e, t)
				})(s, e)
				var t,
					n,
					o,
					r,
					i,
					c =
						((t = s),
						(n = u()),
						function () {
							var e,
								o = f(t)
							if (n) {
								var r = f(this).constructor
								e = Reflect.construct(o, arguments, r)
							} else e = o.apply(this, arguments)
							return l(this, e)
						})
				function s() {
					var e
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError("Cannot call a class as a function")
						})(this, s),
						((e = c.call(this)).isRender = !1),
						(e.StarClassName = "estrellafugaz"),
						e.attachShadow({ mode: "open" }),
						(e.shadowRoot.innerHTML =
							'<style>.contenedor-principal{width:100%;height:100%;max-width:100vw;overflow:hidden;padding:0}.contenedor-de-estrellafugaz{display:flex;justify-content:center;align-items:center;position:relative;background:url(./img/superficie_de_la_tierra.jpg) no-repeat;background-size:cover;background-position-x:center;background-position-y:20%;width:100%;height:100%;z-index:5;cursor:pointer;transition-duration:.5s}.contenedor-de-estrellafugaz:hover{transform:scale(1.08)}.estrellafugaz{--tamano-estrella:5px;--direccion-de-estrella:315deg;--translateX:-125px;--tamano-de-estela:0px;position:absolute;top:50%;left:50%;width:var(--tamano-estrella);height:var(--tamano-estrella);background-color:#fff;opacity:0;border-radius:50%;box-shadow:0 0 0 4px rgba(255,255,255,.1),0 0 0 8px rgba(255,255,255,.1),0 0 0 16px rgba(255,255,255,.1);animation:estrella 1s linear}.estrellafugaz::after{content:"";position:absolute;width:var(--tamano-de-estela);height:1px;top:50%;transform:translateY(-50%);background:linear-gradient(90deg,#fff,transparent)}@keyframes estrella{0%{transform:translateX(0) translateY(0) rotate(var(--direccion-de-estrella));opacity:0;--tamano-de-estela:300px}70%{opacity:1}100%{transform:translateX(var(--translateX)) translateY(125px) rotate(var(--direccion-de-estrella));opacity:0;--tamano-de-estela:300px}}.titulo{color:#fff;margin:0}</style> <div class="contenedor-principal"> <div class="contenedor-de-estrellafugaz"> <h1 class="titulo"><slot name="titulo"></slot></h1> <span class="estrellafugaz"> </span> </div> </div> '),
						(e.appearStar = function (t, n) {
							var o = [n.clientWidth, n.clientHeight],
								r = document.createElement("span"),
								i = t.offsetX,
								a = t.offsetY,
								l = 1
							i < 0.5 * o[0] &&
								((r.style =
									"\n\t\t\t\t--direccion-de-estrella: 225deg;\n\t\t\t\t--translateX:125px;\n\t\t\t\t"),
								(l = -1)),
								o[1] > a + 125
									? ((r.style.top = "".concat(a, "px")),
									  (r.style.left = "".concat(i, "px")))
									: o[0] > i + 100 && 0 < i - 100
									? ((r.style.top = "".concat(a - 100, "px")),
									  (r.style.left = "".concat(i + 100 * l, "px")))
									: ((r.style.top = "".concat(a - 150, "px")),
									  (r.style.left = "".concat(i, "px"))),
								(r.className = e.StarClassName),
								t.target.appendChild(r),
								e.removeStar(n)
						}),
						(e.removeStar = function (t) {
							setTimeout(function () {
								var n = e.shadowRoot.querySelector("span")
								t.removeChild(n)
							}, 1e3)
						}),
						e
					)
				}
				return (
					(o = s),
					(i = [
						{
							key: "observedAttributes",
							get: function () {
								return ["planeta"]
							},
						},
					]),
					(r = [
						{
							key: "connectedCallback",
							value: function () {
								var e = this
								;(this.contenedorDiv = this.shadowRoot.querySelector(
									".contenedor-de-estrellafugaz"
								)),
									this.contenedorDiv.addEventListener("click", function (t) {
										e.appearStar(t, e.contenedorDiv)
									}),
									(this.contenedorDiv.style.backgroundImage = "url(".concat(
										this.url,
										")"
									)),
									(this.isRender = !0)
							},
						},
						{
							key: "attributeChangedCallback",
							value: function (e, t, n) {
								;(this.url = n),
									this.isRender &&
										(this.contenedorDiv.style.backgroundImage = "url(".concat(
											this.url,
											")"
										))
							},
						},
					]) && a(o.prototype, r),
					i && a(o, i),
					s
				)
			})(c(HTMLElement))
			const h = new (function e() {
				var t = this
				!(function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				})(this, e),
					this.html,
					(this.cambiarUrl = function (e) {
						t.html.setAttribute("planeta", e)
					})
			})()
			function m(e) {
				return (m =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e
						  })(e)
			}
			function b(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(e, o.key, o)
				}
			}
			function y(e, t) {
				return !t || ("object" !== m(t) && "function" != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								)
							return e
					  })(e)
					: t
			}
			function g(e) {
				var t = "function" == typeof Map ? new Map() : void 0
				return (g = function (e) {
					if (
						null === e ||
						((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
					)
						return e
					var n
					if ("function" != typeof e)
						throw new TypeError("Super expression must either be null or a function")
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e)
						t.set(e, o)
					}
					function o() {
						return v(e, arguments, k(this).constructor)
					}
					return (
						(o.prototype = Object.create(e.prototype, {
							constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
						})),
						x(o, e)
					)
				})(e)
			}
			function v(e, t, n) {
				return (v = w()
					? Reflect.construct
					: function (e, t, n) {
							var o = [null]
							o.push.apply(o, t)
							var r = new (Function.bind.apply(e, o))()
							return n && x(r, n.prototype), r
					  }).apply(null, arguments)
			}
			function w() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1
				if (Reflect.construct.sham) return !1
				if ("function" == typeof Proxy) return !0
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					)
				} catch (e) {
					return !1
				}
			}
			function x(e, t) {
				return (x =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			function k(e) {
				return (k = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			var _ = (function (e) {
				!(function (e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError("Super expression must either be null or a function")
					;(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 },
					})),
						t && x(e, t)
				})(a, e)
				var t,
					n,
					o,
					r,
					i =
						((t = a),
						(n = w()),
						function () {
							var e,
								o = k(t)
							if (n) {
								var r = k(this).constructor
								e = Reflect.construct(o, arguments, r)
							} else e = o.apply(this, arguments)
							return y(this, e)
						})
				function a() {
					var e
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function")
					})(this, a),
						(e = i.call(this)).attachShadow({ mode: "open" }),
						(e.shadowRoot.innerHTML =
							'<estrella-fugaz> <span slot="titulo">Sistema solar</span> </estrella-fugaz> ')
					var t = e.shadowRoot.querySelector("estrella-fugaz")
					return (h.html = t), h.cambiarUrl("./img/superficie_de_la_tierra.jpg"), e
				}
				return (
					(o = a),
					(r = [
						{
							key: "connectedCallback",
							value: function () {
								this.isRender = !0
							},
						},
					]) && b(o.prototype, r),
					a
				)
			})(g(HTMLElement))
			function S(e) {
				return (S =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e
						  })(e)
			}
			function z(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(e, o.key, o)
				}
			}
			function O(e, t) {
				return !t || ("object" !== S(t) && "function" != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								)
							return e
					  })(e)
					: t
			}
			function j(e) {
				var t = "function" == typeof Map ? new Map() : void 0
				return (j = function (e) {
					if (
						null === e ||
						((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
					)
						return e
					var n
					if ("function" != typeof e)
						throw new TypeError("Super expression must either be null or a function")
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e)
						t.set(e, o)
					}
					function o() {
						return R(e, arguments, T(this).constructor)
					}
					return (
						(o.prototype = Object.create(e.prototype, {
							constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
						})),
						M(o, e)
					)
				})(e)
			}
			function R(e, t, n) {
				return (R = P()
					? Reflect.construct
					: function (e, t, n) {
							var o = [null]
							o.push.apply(o, t)
							var r = new (Function.bind.apply(e, o))()
							return n && M(r, n.prototype), r
					  }).apply(null, arguments)
			}
			function P() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1
				if (Reflect.construct.sham) return !1
				if ("function" == typeof Proxy) return !0
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					)
				} catch (e) {
					return !1
				}
			}
			function M(e, t) {
				return (M =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			function T(e) {
				return (T = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			var E = (function (e) {
				!(function (e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError("Super expression must either be null or a function")
					;(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 },
					})),
						t && M(e, t)
				})(a, e)
				var t,
					n,
					o,
					r,
					i =
						((t = a),
						(n = P()),
						function () {
							var e,
								o = T(t)
							if (n) {
								var r = T(this).constructor
								e = Reflect.construct(o, arguments, r)
							} else e = o.apply(this, arguments)
							return O(this, e)
						})
				function a() {
					var e
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError("Cannot call a class as a function")
						})(this, a),
						(e = i.call(this)).attachShadow({ mode: "open" }),
						(e.arrayDeInformacionDePlanetas = [
							{
								nombre: "Mercurio",
								contenido:
									"Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño.",
								img: "./img/planeta_mercurio.png",
								link: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
								superfisieplaneta: "./img/superficie_de_mercurio.jpg",
							},
							{
								nombre: "Venus",
								contenido:
									"Venus es el segundo planeta del sistema solar, tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. ",
								img: "./img/planeta_venus.png",
								link: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
								superfisieplaneta: "./img/superficie_de_venus.jpg",
								width: "100px",
							},
							{
								nombre: "Tierra",
								contenido:
									"La Tierra es un planeta del sistema solar que gira alrededor de su estrella el Sol\nen la tercera órbita más interna.",
								img: "./img/planeta_tierra.png",
								link: "https://es.wikipedia.org/wiki/Tierra",
								superfisieplaneta: "./img/superficie_de_la_tierra.jpg",
							},
							{
								nombre: "Marte",
								contenido:
									"Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.",
								img: "./img/palenta_marte.png",
								link: "https://es.wikipedia.org/wiki/Marte_(planeta)",
								superfisieplaneta: "./img/superficie_de_marte.jpg",
							},
							{
								nombre: "Júpiter",
								contenido:
									"Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.",
								img: "./img/planeta_jupiter.png",
								link: "https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
								superfisieplaneta: "./img/superficie_de_jupiter.jpg",
							},
							{
								nombre: "Saturno",
								contenido:
									"Saturno es el sexto planeta del sistema solar, el segundo en masa y el único con un sistema de anillos visible desde la Tierra.",
								img: "./img/planeta_saturno.png",
								link: "https://es.wikipedia.org/wiki/Saturno_(planeta)",
								superfisieplaneta: "./img/superficie_de_saturno.jpg",
							},
							{
								nombre: "Urano",
								contenido:
									"Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo.",
								img: "./img/planeta_urano.png",
								link: "https://es.wikipedia.org/wiki/Urano_(planeta)",
								superfisieplaneta: "./img/superficie_de_urano.jpg",
							},
							{
								nombre: "Neptuno",
								contenido:
									"Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. ",
								img: "./img/planeta_neptuno.png",
								link: "https://es.wikipedia.org/wiki/Neptuno_(planeta)",
								superfisieplaneta: "./img/superficie_de_neptuno.jpg",
							},
						]),
						(e.newStar = function (e) {
							for (
								var t = document.querySelector(".seccion-de-planetas"), n = 0;
								n < e;
								n++
							) {
								var o = document.createElement("span"),
									r = 99.5 * Math.random() + 0.5,
									i = 99.5 * Math.random() + 0.5
								;(o.className = "estrella"),
									(o.style.top = "".concat(i, "%")),
									(o.style.left = "".concat(r, "%")),
									t.appendChild(o)
							}
						}),
						(e.agregarPlanetas = function () {
							var t = e.shadowRoot.querySelector(".contenedor-grid")
							e.arrayDeInformacionDePlanetas.map(function (e) {
								var n = document.createElement("info-planeta")
								;(n.innerHTML = '\n\t\t\t\t<span slot="nombre">'
									.concat(e.nombre, '</span>\n\t\t\t\t<span slot="contenido">')
									.concat(e.contenido, "</span>")),
									n.setAttribute("img", e.img),
									n.setAttribute("link", e.link),
									n.setAttribute("superfisieplaneta", e.superfisieplaneta),
									n.setAttribute("class", "planeta"),
									e.width && n.setAttribute("width", e.width),
									n.addEventListener("mousemove", function () {
										return h.cambiarUrl(e.superfisieplaneta)
									}),
									t.appendChild(n)
							})
						}),
						e
					)
				}
				return (
					(o = a),
					(r = [
						{
							key: "connectedCallback",
							value: function () {
								;(this.shadowRoot.innerHTML =
									'<style>.contenedor-de-planetas{display:flex;flex-direction:column;align-items:center;height:100%;width:100%}.sub-titulo{margin:20px 0;z-index:5}.contenedor-grid{display:grid;grid-template-columns:repeat(3,3fr);grid-row-gap:50px;width:100%;margin-bottom:20px}.planeta{width:100%;height:auto;z-index:5}@media (max-width:1000px){.contenedor-grid{grid-template-columns:repeat(2,2fr)}}@media (max-width:600px){.contenedor-grid{grid-template-columns:repeat(1,1fr)}}</style> <div class="contenedor-de-planetas"> <h2 class="sub-titulo">Planetas del sistema solar</h2> <div class="contenedor-grid"></div> </div> '),
									this.agregarPlanetas(),
									this.newStar(300)
							},
						},
					]) && z(o.prototype, r),
					a
				)
			})(j(HTMLElement))
			function C(e) {
				return (C =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e
						  })(e)
			}
			function A(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(e, o.key, o)
				}
			}
			function L(e, t) {
				return !t || ("object" !== C(t) && "function" != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								)
							return e
					  })(e)
					: t
			}
			function D(e) {
				var t = "function" == typeof Map ? new Map() : void 0
				return (D = function (e) {
					if (
						null === e ||
						((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
					)
						return e
					var n
					if ("function" != typeof e)
						throw new TypeError("Super expression must either be null or a function")
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e)
						t.set(e, o)
					}
					function o() {
						return B(e, arguments, N(this).constructor)
					}
					return (
						(o.prototype = Object.create(e.prototype, {
							constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
						})),
						H(o, e)
					)
				})(e)
			}
			function B(e, t, n) {
				return (B = q()
					? Reflect.construct
					: function (e, t, n) {
							var o = [null]
							o.push.apply(o, t)
							var r = new (Function.bind.apply(e, o))()
							return n && H(r, n.prototype), r
					  }).apply(null, arguments)
			}
			function q() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1
				if (Reflect.construct.sham) return !1
				if ("function" == typeof Proxy) return !0
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					)
				} catch (e) {
					return !1
				}
			}
			function H(e, t) {
				return (H =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			function N(e) {
				return (N = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			var F = (function (e) {
				!(function (e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError("Super expression must either be null or a function")
					;(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 },
					})),
						t && H(e, t)
				})(l, e)
				var t,
					n,
					o,
					r,
					i,
					a =
						((t = l),
						(n = q()),
						function () {
							var e,
								o = N(t)
							if (n) {
								var r = N(this).constructor
								e = Reflect.construct(o, arguments, r)
							} else e = o.apply(this, arguments)
							return L(this, e)
						})
				function l() {
					var e
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError("Cannot call a class as a function")
						})(this, l),
						(e = a.call(this)).imgPlaneta,
						e.superfisieDelPlaneta,
						e.link,
						e.width,
						(e.isRender = !1),
						e.attachShadow({ mode: "open" }),
						(e.actualizarAtributos = function () {
							var t = e.shadowRoot.querySelector("img"),
								n = e.shadowRoot.querySelector(".boton-neon"),
								o = e.shadowRoot.querySelector("estrella-fugaz")
							e.width && t.style.setProperty("--width", e.width),
								(t.src = e.imgPlaneta),
								n.setAttribute("link", e.link),
								e.superfisieDelPlaneta &&
									o.setAttribute("planeta", e.superfisieDelPlaneta)
						}),
						e
					)
				}
				return (
					(o = l),
					(i = [
						{
							key: "observedAttributes",
							get: function () {
								return ["img", "superfisieplaneta", "link", "width"]
							},
						},
					]),
					(r = [
						{
							key: "connectedCallback",
							value: function () {
								;(this.shadowRoot.innerHTML =
									'<style>*{transition-duration:.5s;--borde:20px;--z-index:6}.contenedor-planeta{position:relative;width:80%;height:200px}.contenedor-planeta .estrella-fugaz{position:absolute;top:0;width:100%;height:100%;border-radius:var(--borde);overflow:hidden;clip-path:circle(20% at center);opacity:0}.contenedor-planeta:hover .estrella-fugaz{clip-path:circle(100% at center);opacity:1}.contenedor-planeta img{--width:210px;position:absolute;top:55%;left:50%;width:var(--width);background-size:cover;transform:translate(-50%,-50%);pointer-events:none;transition:.5s;z-index:var(--z-index)}.contenedor-planeta:hover img{width:calc(var(--width) + 50px);left:calc(100% + 30px)}.contenedor-planeta .info .contenido{position:absolute;top:0;left:10%;padding:5px 20px;margin-top:20px;color:#fff;background-color:#00000000;visibility:hidden;opacity:0;z-index:calc(var(--z-index) + 1)}.contenedor-planeta:hover .info .contenido{top:10%;left:0;background-color:#0000006e;visibility:visible;opacity:1}.contenedor-planeta .info .nombre{position:absolute;top:9%;width:100%;text-align:center;z-index:var(--z-index)}.contenedor-planeta:hover .info .nombre{top:0}.contenedor-planeta .info .boton-neon{position:absolute;bottom:5px;left:20px;opacity:0;z-index:var(--z-index)}.contenedor-planeta:hover .info .boton-neon{bottom:25px;opacity:1}@media (max-width:750px){.contenedor-planeta .info .contenido{font-size:15px}.contenedor-planeta:hover .info .boton-neon{bottom:20px;opacity:1}}@media (max-width:660px){.contenedor-planeta .info .contenido{margin-top:10px}.contenedor-planeta:hover .info .nombre{top:-5%}}@media (max-width:600px){.contenedor-planeta{width:100%}.contenedor-planeta:hover img{left:calc(100% + -40px)}.contenedor-planeta .info .contenido{font-size:17px}}@media (max-width:450px){.contenedor-planeta:hover img{width:0}}</style> <div class="contenedor-planeta"> <estrella-fugaz class="estrella-fugaz" planeta="./img/superficie_de_la_tierra.jpg"></estrella-fugaz> <div class="info"> <h3 class="nombre"> <slot name="nombre"> tierra </slot> </h3> <p class="contenido"> <slot name="contenido"> La Tierra es un planeta del sistema solar que gira alrededor de su estrella el Sol en la tercera órbita más interna. </slot> </p> <button class="boton-neon" link="#" is="boton-neon"></button> </div> <img/> </div> '),
									this.actualizarAtributos(),
									(this.isRender = !0)
							},
						},
						{
							key: "attributeChangedCallback",
							value: function (e, t, n) {
								"img" == e
									? (this.imgPlaneta = n)
									: "superfisieplaneta" == e
									? (this.superfisieDelPlaneta = n)
									: "link" == e
									? (this.link = n)
									: "width" == e && (this.width = n),
									this.isRender && this.actualizarAtributos()
							},
						},
					]) && A(o.prototype, r),
					i && A(o, i),
					l
				)
			})(D(HTMLElement))
			function I(e) {
				return (I =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e
						  })(e)
			}
			function U(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n]
					;(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(e, o.key, o)
				}
			}
			function X(e, t) {
				return !t || ("object" !== I(t) && "function" != typeof t)
					? (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								)
							return e
					  })(e)
					: t
			}
			function Z(e) {
				var t = "function" == typeof Map ? new Map() : void 0
				return (Z = function (e) {
					if (
						null === e ||
						((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
					)
						return e
					var n
					if ("function" != typeof e)
						throw new TypeError("Super expression must either be null or a function")
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e)
						t.set(e, o)
					}
					function o() {
						return J(e, arguments, W(this).constructor)
					}
					return (
						(o.prototype = Object.create(e.prototype, {
							constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
						})),
						V(o, e)
					)
				})(e)
			}
			function J(e, t, n) {
				return (J = Y()
					? Reflect.construct
					: function (e, t, n) {
							var o = [null]
							o.push.apply(o, t)
							var r = new (Function.bind.apply(e, o))()
							return n && V(r, n.prototype), r
					  }).apply(null, arguments)
			}
			function Y() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1
				if (Reflect.construct.sham) return !1
				if ("function" == typeof Proxy) return !0
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					)
				} catch (e) {
					return !1
				}
			}
			function V(e, t) {
				return (V =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			function W(e) {
				return (W = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			var G = (function (e) {
				!(function (e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError("Super expression must either be null or a function")
					;(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 },
					})),
						t && V(e, t)
				})(l, e)
				var t,
					n,
					o,
					r,
					i,
					a =
						((t = l),
						(n = Y()),
						function () {
							var e,
								o = W(t)
							if (n) {
								var r = W(this).constructor
								e = Reflect.construct(o, arguments, r)
							} else e = o.apply(this, arguments)
							return X(this, e)
						})
				function l() {
					var e
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError("Cannot call a class as a function")
						})(this, l),
						((e = a.call(this)).isRender = !1),
						e.link,
						(e.actualizarDatos = function () {
							e.querySelector("a").setAttribute("href", e.link)
						}),
						e
					)
				}
				return (
					(o = l),
					(i = [
						{
							key: "observedAttributes",
							get: function () {
								return ["link"]
							},
						},
					]),
					(r = [
						{
							key: "connectedCallback",
							value: function () {
								;(this.innerHTML =
									'<style>*{--color-1:#fff;--color-2:#000;--tiempo:0.2s}button{background-color:#00000000;outline:0;border:none;padding:0;width:auto;height:auto}a{display:flex;justify-content:center;align-items:center;position:relative;background-color:var(--color-2);width:150px;height:35px;text-decoration:none;overflow:hidden}a::after,a::before{position:absolute;content:"";top:0;width:2px;height:100%;background-color:var(--color-1);z-index:7;transition:var(--tiempo) ease-in-out;transition-delay:calc(var(--tiempo) * .5)}a:hover:after,a:hover:before{width:100%;transition-delay:calc(var(--tiempo) * .5)}a::after{left:0}a::before{right:0}span{position:absolute;width:auto;height:auto;font-size:18px}span:nth-child(1){color:var(--color-1);transform:scale(1);z-index:6;transition:var(--tiempo);transition-delay:calc(var(--tiempo) * 1)}a:hover span:nth-child(1){transform:scale(0);transition-delay:0s}span:nth-child(2){color:var(--color-2);transform:scale(2);opacity:0;z-index:8;transition:var(--tiempo);transition-delay:0s}a:hover span:nth-child(2){transform:scale(1);opacity:1;transition-delay:calc(var(--tiempo) * 1)}</style> <a> <span>Mas informacion</span> <span>Mas informacion</span> </a> '),
									this.actualizarDatos(),
									(this.isRender = !0)
							},
						},
						{
							key: "attributeChangedCallback",
							value: function (e, t, n) {
								;(this.link = n), this.isRender && this.actualizarDatos()
							},
						},
					]) && U(o.prototype, r),
					i && U(o, i),
					l
				)
			})(Z(HTMLButtonElement))
			customElements.define("estrella-fugaz", d),
				customElements.define("planeta-estrella-fugaz", _),
				customElements.define("informacion-de-planetas", E),
				customElements.define("info-planeta", F),
				customElements.define("boton-neon", G, { extends: "button" })
		})()
})()