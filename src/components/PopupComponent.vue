<template>
	<div class="popup">
		<div class="popup-body">
			<img src="../assets/alert-triangle.svg" alt="" />
			<h2>UUPS, nie obliczyłeś jeszcze swojego zapotrzebowania kalorycznego, zrób to teraz!</h2>

			<div class="buttons-box">
				<router-link to="/autocalc"><button>Oblicz automatycznie</button></router-link>
				<router-link to="/selfcalc"><button>Wpisz samodzielnie</button></router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.popup {
	top: -150%;
	&-body {
		img {
			width: 150px;
		}

		h2 {
			font-size: 1.2rem;
			text-align: center;
		}

		.buttons-box {
			a {
				width: 45%;

				button {
					width: 100%;
					height: 100%;
					padding: 1em;
					background: none;
					border: none;
					font-weight: bold;
					font-size: 0.8rem;
					background-color: greenyellow;
					border-radius: 8px;
				}
			}
		}
	}
}
.active {
	top: 0;
}

@media (min-width: 576px) {
	.popup {
		&-body {
			.buttons-box {
				a {
					width: 35%;
					button {
						&:hover {
							background-color: green;
							color: #fff;
						}
					}
				}
			}
		}
	}
	.active {
		top: 0;
	}
}

@media (min-width: 768px) {
	.popup {
		&-body {
			padding: 2em;
			img {
				height: 200px;
				width: 200px;
			}

			h2 {
				font-size: 1.4rem;
			}
			.buttons-box {
				a {
					width: 30%;
				}
			}
		}
	}
	.active {
		top: 0;
	}
}

@media (min-width: 992px) {
	.popup {
		&-body {
			padding: 4em;
			img {
				height: 200px;
				width: 200px;
			}

			h2 {
				font-size: 1.6rem;
			}
			.buttons-box {
				a {
					width: 25%;
				}
			}
		}
	}
	.active {
		top: 0;
	}
}
@media (min-width: 1200px) {
	.popup {
		&-body {
			img {
				height: 150px;
				width: 150px;
			}

			h2 {
				font-size: 1.4rem;
			}
			.buttons-box {
				a {
					width: 30%;
				}
			}
		}
	}
	.active {
		top: 0;
	}
}
</style>
