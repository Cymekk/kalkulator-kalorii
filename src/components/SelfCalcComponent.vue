<template>
	<div class="popup">
		<div class="popup-body">
			<h2>Uzupełnij wszystkie pola</h2>
			<input
				type="number"
				placeholder="Wyporadź ilość KCAL jaką chcesz spożywać"
				@input="totalCalories = $event.target.value"
			/>
			<input
				type="number"
				placeholder="Wprowadź ilość kalorii z węglowodanów"
				@input="carbsCalories = $event.target.value"
			/>
			<input
				type="number"
				placeholder="Wprowadź ilość kalorii z białka"
				@input="proteinsCalories = $event.target.value"
			/>
			<input
				type="number"
				placeholder="Wprowadź ilość kalorii z tłuszczy"
				@input="fatsCalories = $event.target.value"
			/>

			<div class="buttons-box">
				<router-link to="/"><button>Powrót</button></router-link>
				<button @click="validateForm">
					<router-link to="/" :class="{ disabled: isDisabled }">Zapisz</router-link>
				</button>
			</div>
			<p class="error"></p>
		</div>
	</div>
</template>
<script>
import { useStore } from 'vuex'
import { ref, reactive, toRefs } from 'vue'
import router from '@/router'

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
					isDisabled.value = false
					error.textContent = ''
					store.commit('ASSIGN_CALORIES', selfCalcState)
					store.commit('STORE_CALORIES_AND_MAKROS')
					router.push({ name: 'home' })
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
	&-body {
		h2 {
			font-size: 1.3rem;
			margin-bottom: 1em;
		}

		input {
			width: 90%;
			background: none;
			border: none;
			outline: none;
			padding: 1em;
			border-bottom: 2px solid greenyellow;
		}

		input::placeholder {
			font-size: 0.7rem;
		}

		.buttons-box {
			a {
				width: 35%;

				button {
					width: 100%;
				}
			}
		}
		.error {
			color: red;
			font-weight: bold;
			font-size: 0.9rem;
			text-align: center;
		}
		.disabled {
			pointer-events: none;
		}
	}
}
</style>
