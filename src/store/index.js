import { createStore } from 'vuex'

const store = createStore({
	state: {
		TotalCalories: 0,
		CarbsCalories: 0,
		ProteinsCalories: 0,
		FatsCalories: 0,
	},

	getters: {},
	mutations: {
		CALC_CALORIES(state, autoCalcState) {
			if (autoCalcState.genderValue == 1) {
				state.TotalCalories = parseInt(
					(655 +
						9.6 * parseFloat(autoCalcState.weightValue) +
						1.8 * parseFloat(autoCalcState.heightValue) -
						4.7 * parseFloat(autoCalcState.ageValue)) *
						parseFloat(autoCalcState.activityValue) +
						parseFloat(autoCalcState.goalValue)
				)

				state.CarbsCalories = state.TotalCalories * 0.45
				state.ProteinsCalories = state.TotalCalories * 0.35
				state.FatsCalories = state.TotalCalories * 0.3
			} else {
				state.TotalCalories = parseInt(
					(66 +
						13.7 * parseFloat(autoCalcState.weightValue) +
						5 * parseFloat(autoCalcState.heightValue) -
						6.8 * parseFloat(autoCalcState.ageValue)) *
						parseFloat(autoCalcState.activityValue) +
						parseFloat(autoCalcState.goalValue)
				)

				state.CarbsCalories = state.TotalCalories * 0.45
				state.ProteinsCalories = state.TotalCalories * 0.35
				state.FatsCalories = state.TotalCalories * 0.3
			}
		},
	},
	actions: {},
})

export default store
