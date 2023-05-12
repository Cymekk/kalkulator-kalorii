<template>
	<div class="add-product-popup">
		<div class="add-product-popup-body">
			<h2>Dodaj nowy produkt do bazy</h2>
			<input type="text" placeholder="Podaj nazwę produktu" @input="name = $event.target.value" :value="name" />
			<input
				type="number"
				placeholder="Podaj ilość węglowodanów na 100g"
				@input="carbs = $event.target.value"
				:value="carbs"
			/>
			<input
				type="number"
				placeholder="Podaj ilość białka na 100g"
				@input="proteins = $event.target.value"
				:value="proteins"
			/>
			<input
				type="number"
				placeholder="Podaj ilość tłuszczy na 100g"
				@input="fats = $event.target.value"
				:value="fats"
			/>
			<button @click="validateForm">Dodaj</button>
			<p class="add-product-error"></p>
		</div>
	</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
	setup() {
		const store = useStore()
		let newProductInfo = reactive({
			name: '',
			calories: '',
			carbs: '',
			proteins: '',
			fats: '',
		})
		function validateForm() {
			let error = document.querySelector('.add-product-error')
			if (
				newProductInfo.name !== '' &&
				newProductInfo.carbs !== '' &&
				newProductInfo.proteins !== '' &&
				newProductInfo.fats !== ''
			) {
				{
					newProductInfo.calories = parseInt(
						parseFloat(newProductInfo.carbs * 4) +
							parseFloat(newProductInfo.proteins * 4) +
							parseFloat(newProductInfo.fats * 9)
					)
					store.commit('PUSH_TO_ARRAY', newProductInfo)
					error.textContent = ''
					let addProductPopup = document.querySelector('.add-product-popup')
					addProductPopup.classList.remove('active')
					newProductInfo.name = ''
					newProductInfo.calories = ''
					newProductInfo.carbs = ''
					newProductInfo.proteins = ''
					newProductInfo.fats = ''
					store.commit('STORE_FOOD_ARRAY')
					store.commit('GET_FOOD_ARRAY')
				}
			} else {
				error.textContent = 'Wszystkie pola muszą być uzupełnione'
			}
		}

		return { ...toRefs(newProductInfo), validateForm }
	},
}
</script>
<style lang="scss">
.add-product-popup {
	display: flex;
	align-items: center;
	position: fixed;
	top: -150%;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	transition: top 0.3s;

	&-body {
		padding: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		margin: 0 auto;
		width: 80%;
		min-height: 50svh;
		background-color: lightblue;
		border-radius: 25px;

		h2 {
			font-size: 1.3rem;
			text-align: center;
		}

		input,
		button {
			border: none;
			background: none;
			outline: none;
			padding: 1em;
			width: 80%;
		}

		input {
			border-bottom: 2px solid greenyellow;

			&::placeholder {
				font-size: 0.8rem;
			}
		}

		button {
			background-color: greenyellow;
			width: 50%;
			border-radius: 8px;
			font-weight: bold;
		}

		.add-product-error {
			font-size: 1rem;
			font-weight: bold;
			color: red;
		}
	}
}

.active {
	top: 0;
}
</style>
