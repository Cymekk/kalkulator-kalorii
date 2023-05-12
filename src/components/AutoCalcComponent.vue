<template>
	<div class="popup">
		<div class="popup-body">
			<h2>Wpisz swoje dane</h2>

			<select @change="onGenderChange($event)">
				<option value="0" selected disabled>Wybierz płeć</option>
				<option value="1">Kobieta</option>
				<option value="2">Mężczyzna</option>
			</select>

			<input type="text" placeholder="Podaj swoją wagę w kg" @input="weightValue = $event.target.value" />
			<input type="text" placeholder="Podaj swój wzrost w cm" @input="heightValue = $event.target.value" />
			<input type="text" placeholder="Podaj swój wiek" @input="ageValue = $event.target.value" />

			<select @change="onActivityLevelChange($event)">
				<option value="0" selected disabled>Wybierz poziom aktywności</option>
				<option value="1.2">Siedzący</option>
				<option value="1.375">Lekko aktywny</option>
				<option value="1.55">Umiarkowanie aktywny</option>
				<option value="1.725">Bardzo aktywny</option>
				<option value="1.9">Ekstra aktywny</option>
			</select>

			<select @change="onGoalChange($event)">
				<option value="0" selected disabled>Wybierz cel</option>
				<option value="-500">Utrata wagi</option>
				<option value="1">Utrzymanie wagi</option>
				<option value="500">Przybranie wagi</option>
			</select>

			<button @click="validateForm">
				<router-link to="/" class="link" :class="{ disabled: !isDisabled }">Oblicz zapotrzebowanie</router-link>
			</button>

			<p class="error" v-if="isError">Wszystkie pola muszą być wypełnione!</p>
		</div>
	</div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()
		let isDisabled = ref(false)
		let isError = ref(false)

		let autoCalcState = reactive({
			genderValue: 0,
			weightValue: 0,
			heightValue: 0,
			ageValue: 0,
			activityValue: 0,
			goalValue: 0,
		})
		function onGenderChange(e) {
			autoCalcState.genderValue = e.target.value
		}
		function onActivityLevelChange(e) {
			autoCalcState.activityValue = e.target.value
		}
		function onGoalChange(e) {
			autoCalcState.goalValue = e.target.value
		}

		function validateForm() {
			if (
				autoCalcState.genderValue !== 0 &&
				autoCalcState.weightValue !== 0 &&
				autoCalcState.heightValue !== 0 &&
				autoCalcState.ageValue !== 0 &&
				autoCalcState.activityValue !== 0 &&
				autoCalcState.goalValue !== 0
			) {
				isError.value = false
				isDisabled.value = true
				let link = document.querySelector('.link')
				link.click()
				store.commit('CALC_CALORIES', autoCalcState)
				store.commit('STORE_CALORIES_AND_MAKROS')
			} else {
				isError.value = true
				isDisabled.value = false
			}
		}

		return {
			isDisabled,
			isError,
			...toRefs(autoCalcState),
			onGenderChange,
			onActivityLevelChange,
			onGoalChange,
			validateForm,
		}
	},
}
</script>
<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 100svh;
	background-color: rgba(0, 0, 0, 0.5);

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
			font-size: 1.3rem;
		}

		select,
		input {
			width: 80%;
			padding: 0.5em;
			background: none;
			border: none;
			outline: none;
			border-bottom: 2px solid greenyellow;
		}

		select {
			option {
				background-color: aquamarine;
			}
		}

		button {
			position: relative;
			background: none;
			border: none;
			padding: 1em;
			background-color: greenyellow;
			border-radius: 8px;
			font-weight: bold;

			.link {
				text-decoration: none;
				color: #000;
			}
		}

		.error {
			font-weight: bold;
			font-size: 0.9rem;
			color: red;
		}

		.disabled {
			pointer-events: none;
		}
	}
}
</style>
