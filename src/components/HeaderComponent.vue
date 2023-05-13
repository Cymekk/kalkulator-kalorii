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

@media (min-width: 572px) {
	.header {
		i {
			font-size: 7rem;
		}

		.text {
			h1 {
				font-size: 1.6rem;
			}

			p {
				font-size: 1rem;
			}
		}
	}
}

@media (min-width: 768px) {
	.header {
		i {
			font-size: 9rem;
		}

		.text {
			h1 {
				font-size: 1.8rem;
			}

			p {
				font-size: 1.2rem;
			}
		}
	}
}

@media (min-width: 992px) {
	.header {
		i {
			font-size: 11rem;
		}

		.text {
			h1 {
				font-size: 2rem;
			}

			p {
				font-size: 1.3rem;
			}
		}
	}
}
@media (min-width: 1200px) {
	.header {
		i {
			font-size: 11rem;
		}

		.text {
			text-align: left;
			h1 {
				font-size: 2rem;
			}

			p {
				font-size: 1.3rem;
			}
		}
	}
}
</style>
