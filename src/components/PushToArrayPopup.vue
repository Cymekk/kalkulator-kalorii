<template>
	<main class="popup">
		<div class="popup-body">
			<h2>Podaj wagę produktu</h2>
			<p>
				<span>Nazwa produktu: {{ foodArr.name }}</span>
			</p>
			<div class="macros">
				<p>
					<span>KCAL: {{ foodArr.calories }}</span>
				</p>
				<p>
					<span>W: {{ foodArr.carbs }}</span>
				</p>
				<p>
					<span>B: {{ foodArr.proteins }}</span>
				</p>
				<p>
					<span>T: {{ foodArr.fats }}</span>
				</p>
			</div>
			<input
				type="number"
				placeholder="Podaj wagę produktu w g"
				@input="productWeight = $event.target.value"
				:value="productWeight"
			/>
			<div class="buttons-box">
				<button @click="goBack">Powrót</button>
				<button @click="validateForm">
					<router-link to="/" class="link" :class="{ disabled: isDisabled }">Dodaj</router-link>
				</button>
			</div>
			<p v-if="errorVisbile" class="error">Waga produktu musi być większa od 0</p>
		</div>
	</main>
</template>
<script>
import router from '@/router'
import { ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default {
	name: 'PushToArrayPopup',

	setup() {
		let errorVisbile = ref(false)
		let isDisabled = ref(true)
		let productWeight = ref('')
		let productToPush = reactive({
			name: '',
			calories: 0,
			proteins: 0,
			fats: 0,
		})
		const store = useStore()
		const index = computed(() => store.state.index)
		const foodArr = computed(() => store.state.foodArr[index.value])

		function validateForm() {
			if (productWeight.value !== '') {
				productToPush.name = foodArr.value.name
				productToPush.calories = (parseInt(foodArr.value.calories) * parseFloat(productWeight.value)) / 100
				productToPush.carbs = (parseInt(foodArr.value.carbs) * parseFloat(productWeight.value)) / 100
				productToPush.proteins = (parseInt(foodArr.value.proteins) * parseFloat(productWeight.value)) / 100
				productToPush.fats = (parseInt(foodArr.value.fats) * parseFloat(productWeight.value)) / 100

				errorVisbile.value = false
				isDisabled.value = false
				store.commit('PUSH_TO_RIGHT_ARRAY', productToPush)
				router.push({ name: 'home' })
			} else {
				errorVisbile.value = true
				isDisabled.value = true
			}
		}

		function goBack() {
			router.push({ name: 'addproductview' })
		}

		return { productWeight, errorVisbile, isDisabled, foodArr, ...toRefs(productToPush), validateForm, goBack }
	},
}
</script>
<style lang="scss">
.popup {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.45);

	&-body {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		min-height: 50svh;
		width: 80%;
		background-color: lightblue;
		border-radius: 15px;

		.macros {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
		}

		h2 {
			font-size: 1.4rem;
		}

		p {
			font-size: 1rem;
			span {
				font-weight: bold;
			}
		}

		input,
		button {
			padding: 1em;
			border: none;
			background: none;
			outline: none;
		}

		input {
			border-bottom: 2px solid greenyellow;

			&::placeholder {
				color: #000;
			}
		}

		.buttons-box {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			button {
				background-color: greenyellow;
				width: 35%;
				font-weight: bold;
				border-radius: 8px;

				&:first-child {
					background-color: rgb(241, 146, 109);
				}

				.link {
					text-decoration: none;
					color: #000;
				}
			}
		}

		.error {
			font-weight: bold;
			color: red;
		}
	}

	.disabled {
		pointer-events: none;
	}
}

.active {
	top: 0;
}
</style>
