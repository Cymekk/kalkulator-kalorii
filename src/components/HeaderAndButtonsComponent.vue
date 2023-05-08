<template>
	<div class="header">
		<i class="fa-solid fa-calculator"></i>
		<div class="text">
			<h1>Kalkulator Kalorii</h1>
			<p>Zacznij budować formę na lata już teraz</p>
		</div>
	</div>

	<div class="buttons-box">
		<button>Oblicz zapotrzebowanie kaloryczne</button>
		<button>Wpisz samodzielnie zapotrzebowanie kaloryczne</button>
	</div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.header {
	padding: 0 1em;
	min-height: 30svh;
	width: 100%;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	i {
		font-size: 10rem;
	}

	.text {
		padding-left: 1em;
		text-align: center;
		h1 {
			text-transform: uppercase;
			font-size: 1.4rem;
		}

		p {
			width: 100%;
			display: block;
			margin-top: 1em;
			font-size: 1rem;
		}
	}
}

.buttons-box {
	min-height: 70svh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	button {
		width: 80%;
		padding: 1em 2em;
		margin: 2em;
		background: none;
		border: none;
		background-color: #f79540;
		border-radius: 10px;
		font-weight: bold;
	}
}
</style>
