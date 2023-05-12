<template>
	<main class="products">
		<button class="add-btn" @click="handlePopup">Dodaj produkt</button>
		<h2>Ostatnio dodane produkty</h2>
		<div class="products-container">
			<div class="error-box" v-if="isEmpty">
				<p class="error">Brak produktów w bazie dodaj produkt do bazy</p>
			</div>

			<div v-else class="box" v-for="(item, index) in foodArr" :key="index">
				<div class="name-and-button">
					<p>{{ item.name }}</p>
					<router-link to="/pushtoarray" @click="returnIndex(index)"><button></button></router-link>
				</div>

				<div class="macros">
					<p>KCAL: {{ item.calories }}</p>
					<p>W: {{ item.carbs }}</p>
					<p>B: {{ item.proteins }}</p>
					<p>T: {{ item.fats }}</p>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
	emits: [['handle-popup'], { 'push-to-right-array': index => typeof index === Number }],

	setup(props, { emit }) {
		const store = useStore()
		store.commit('GET_FOOD_ARRAY')
		let isEmpty = ref(false)
		const foodArr = computed(() => store.state.foodArr)

		if (foodArr.value.length == 0) {
			isEmpty.value = true
		} else {
			isEmpty.value = false
		}

		function handlePopup() {
			emit('handle-popup')
		}

		function returnIndex(index) {
			store.commit('ASSIGN_INDEX', index)
		}
		return { isEmpty, foodArr, handlePopup, returnIndex }
	},
}
</script>
<style lang="scss">
.products {
	h2 {
		margin: 2em 0;
		text-align: center;
		color: #fff;
		font-size: 1.5rem;
	}

	.add-btn {
		display: block;
		margin: 2em auto 2em auto;
		padding: 1em 2em;
		border: none;
		background: none;
		outline: none;
		background-color: greenyellow;
		border-radius: 8px;
		font-weight: bold;
	}

	&-container {
		margin-top: 2em;

		.error-box {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.error {
				margin-top: 1.5em;
				color: rgb(255, 79, 35);
				font-size: 1rem;
				font-weight: bold;
				text-align: center;
			}
		}

		.box {
			width: 100%;
			min-height: 10svh;
			background-color: rgba(255, 255, 255, 0.65);
			border-bottom: 2px solid greenyellow;
			padding: 1em;

			&:first-child {
				border-radius: 10px 10px 0 0;
			}

			&:last-child {
				border-radius: 0 0 10px 10px;
			}

			.name-and-button {
				display: flex;
				width: 100%;
				margin: 0 auto;
				justify-content: space-between;
				align-items: center;

				p {
					width: 80%;
					text-align: center;
					font-weight: bold;
					font-size: 1rem;
				}

				button {
					width: 40px;
					height: 40px;
					background: none;
					border: none;
					border-radius: 50%;
					background-image: url('../assets/plus.svg');
					background-repeat: no-repeat;
					background-position: center;
					background-color: green;
				}
			}

			.macros {
				min-height: 5svh;
				font-size: 1rem;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
}
</style>
