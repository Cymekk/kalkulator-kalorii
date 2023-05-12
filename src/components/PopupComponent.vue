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
	position: fixed;
	display: flex;
	align-items: center;
	top: 150%;
	left: 0;
	width: 100%;
	min-height: 100svh;
	background-color: rgba(0, 0, 0, 0.5);

	&-body {
		padding: 2em;
		width: 90%;
		min-height: 50svh;
		background-color: lightblue;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		img {
			width: 150px;
		}

		h2 {
			font-size: 1.2rem;
			text-align: center;
		}

		.buttons-box {
			width: 100%;
			display: flex;
			justify-content: space-between;

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
</style>
