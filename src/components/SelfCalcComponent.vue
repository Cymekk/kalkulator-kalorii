<template>
	<div class="popup">
		<div class="popup-body">
			<h2>Uzupełnij wszystkie pola</h2>
			<input type="number" placeholder="Ilość kalorii" @input="totalCalories = $event.target.value" />
			<input type="number" placeholder="Ilość kalori z węglowodanów" @input="carbsCalories = $event.target.value" />
			<input type="number" placeholder="Ilość kalori z białka" @input="proteinsCalories = $event.target.value" />
			<input type="number" placeholder="Ilość kalori z tłuszczy" @input="fatsCalories = $event.target.value" />
			<button @click="validateForm">
				<router-link to="/" class="link" :class="{ disabled: isDisabled }">Zapisz</router-link>
			</button>
			<p class="error"></p>
		</div>
	</div>
</template>
<script>
import { useStore } from 'vuex'
import { ref, reactive, toRefs } from 'vue'

export default {
	setup() {
		const store = useStore()
		let isDisabled = ref(true)
		let selfCalcState = reactive({
			totalCalories: '',
			carbsCalories: '',
			proteinsCalories: '',
			fatsCalories: '',
		})

		function validateForm() {
			let error = document.querySelector('.error')

			if (
				selfCalcState.totalCalories !== '' &&
				selfCalcState.carbsCalories !== '' &&
				selfCalcState.proteinsCalories !== '' &&
				selfCalcState.fatsCalories !== ''
			) {
				if (
					parseInt(selfCalcState.totalCalories) !==
					parseInt(selfCalcState.carbsCalories) +
						parseInt(selfCalcState.proteinsCalories) +
						parseInt(selfCalcState.fatsCalories)
				) {
					error.textContent = 'Ilość wprowadzonych kalorii jest różna od sumy kalorii makroskładników'
				} else {
					let link = document.querySelector('.link')
					isDisabled.value = false
					error.textContent = ''
					store.commit('ASSIGN_CALORIES', selfCalcState)
					store.commit('STORE_CALORIES_AND_MAKROS')
					link.click()
				}
			} else {
				error.textContent = 'Wszystkie pola muszą być uzupełnione'
			}
		}

		return { store, isDisabled, ...toRefs(selfCalcState), validateForm }
	},
}
</script>
<style lang="scss" scoped>
.popup {
	width: 100%;
	min-height: 100svh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;

	&-body {
		padding: 1em;
		width: 80%;
		min-height: 50svh;
		background-color: lightblue;
		margin: 0 auto;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		h2 {
			font-size: 1.4rem;
		}

		input {
			width: 60%;
			background: none;
			border: none;
			outline: none;
			padding: 1em;
			border-bottom: 2px solid greenyellow;
		}

		input::placeholder {
			font-size: 0.75rem;
		}

		button {
			width: 60%;
			padding: 1em;
			background: none;
			border: none;
			background-color: greenyellow;
			border-radius: 8px;
			font-weight: bold;
		}

		.error {
			color: red;
			font-weight: bold;
			font-size: 0.9rem;
			text-align: center;
		}

		.link {
			text-decoration: none;
			color: #000;
		}
		.disabled {
			pointer-events: none;
		}
	}
}
</style>
