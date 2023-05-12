<template>
	<div class="header">
		<i class="fa-solid fa-calculator" @click="goToMainPage"></i>
		<div class="text">
			<h1>Kalkulator Kalorii</h1>
			<p>Zacznij budować formę na lata już dziś!</p>
		</div>
	</div>
</template>
<script>
import router from '@/router'

export default {
	setup() {
		function goToMainPage() {
			router.push({ name: 'home' })
		}

		return { goToMainPage }
	},
}
</script>

<style lang="scss">
.header {
	min-height: 10svh;
	color: #fff;
	display: flex;
	justify-content: space-evenly;

	i {
		font-size: 5rem;
	}

	.text {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;

		h1 {
			font-size: 1.4rem;
		}

		p {
			font-size: 0.8rem;
		}
	}
}
</style>
