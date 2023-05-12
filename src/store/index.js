import { createStore } from 'vuex'

const store = createStore({
	state: {
		totalCalories: 0,
		carbsCalories: 0,
		proteinsCalories: 0,
		fatsCalories: 0,
		index: 0,
		whichArray: '',
		foodArr: [],
		breakfestArr: [],
		lunchArr: [],
		dinnerArr: [],
		snacksArr: [],
		breakfestCaloriesSum: 0,
		breakfestCarbsSum: 0,
		breakfestProteinsSum: 0,
		breakfestFatsSum: 0,
		lunchCaloriesSum: 0,
		lunchCarbsSum: 0,
		lunchProteinsSum: 0,
		lunchFatsSum: 0,
		snacksCaloriesSum: 0,
		snacksCarbsSum: 0,
		snacksProteinsSum: 0,
		snacksFatsSum: 0,
		dinnerCaloriesSum: 0,
		dinnerCarbsSum: 0,
		dinnerProteinsSum: 0,
		dinnerFatsSum: 0,
	},

	getters: {},
	mutations: {
		CALC_CALORIES(state, autoCalcState) {
			if (autoCalcState.genderValue == 1) {
				state.totalCalories = parseInt(
					(655 +
						9.6 * parseFloat(autoCalcState.weightValue) +
						1.8 * parseFloat(autoCalcState.heightValue) -
						4.7 * parseFloat(autoCalcState.ageValue)) *
						parseFloat(autoCalcState.activityValue) +
						parseFloat(autoCalcState.goalValue)
				)
				state.carbsCalories = state.totalCalories * 0.45
				state.proteinsCalories = state.totalCalories * 0.35
				state.fatsCalories = state.totalCalories * 0.3
			} else {
				state.totalCalories = parseInt(
					(66 +
						13.7 * parseFloat(autoCalcState.weightValue) +
						5 * parseFloat(autoCalcState.heightValue) -
						6.8 * parseFloat(autoCalcState.ageValue)) *
						parseFloat(autoCalcState.activityValue) +
						parseFloat(autoCalcState.goalValue)
				)

				state.carbsCalories = state.totalCalories * 0.45
				state.proteinsCalories = state.totalCalories * 0.35
				state.fatsCalories = state.totalCalories * 0.3
			}
		},

		CALC_MAKROS(state) {
			state.breakfestCaloriesSum = 0
			state.breakfestCarbsSum = 0
			state.breakfestProteinsSum = 0
			state.breakfestFatsSum = 0

			state.lunchCaloriesSum = 0
			state.lunchCarbsSum = 0
			state.lunchProteinsSum = 0
			state.lunchFatsSum = 0

			state.snacksCaloriesSum = 0
			state.snacksCarbsSum = 0
			state.snacksProteinsSum = 0
			state.snacksFatsSum = 0

			state.dinnerCaloriesSum = 0
			state.dinnerCarbsSum = 0
			state.dinnerProteinsSum = 0
			state.dinnerFatsSum = 0

			state.breakfestArr.forEach(el => {
				state.breakfestCaloriesSum += el.calories
				state.breakfestCarbsSum += el.carbs
				state.breakfestProteinsSum += el.proteins
				state.breakfestFatsSum += el.fats
			})
			state.lunchArr.forEach(el => {
				state.lunchCaloriesSum += el.calories
				state.lunchCarbsSum += el.carbs
				state.lunchProteinsSum += el.proteins
				state.lunchFatsSum += el.fats
			})
			state.snacksArr.forEach(el => {
				state.snacksCaloriesSum += el.calories
				state.snacksCarbsSum += el.carbs
				state.snacksProteinsSum += el.proteins
				state.snacksFatsSum += el.fats
			})
			state.dinnerArr.forEach(el => {
				state.dinnerCaloriesSum += el.calories
				state.dinnerCarbsSum += el.carbs
				state.dinnerProteinsSum += el.proteins
				state.dinnerFatsSum += el.fats
			})
		},

		ASSIGN_CALORIES(state, selfCalcState) {
			state.totalCalories = parseInt(selfCalcState.totalCalories)
			state.carbsCalories = parseInt(selfCalcState.carbsCalories)
			state.proteinsCalories = parseInt(selfCalcState.proteinsCalories)
			state.fatsCalories = parseInt(selfCalcState.fatsCalories)
		},

		ASSIGN_WHICH_ARRAY(state, text) {
			state.whichArray = text
			localStorage.setItem('whichArray', state.whichArray)
		},

		GET_WHICH_ARRAY(state) {
			state.whichArray = localStorage.getItem('whichArray')
		},

		ASSIGN_INDEX(state, index) {
			state.index = index
		},

		PUSH_TO_ARRAY(state, newProductInfo) {
			let obj = {
				name: newProductInfo.name,
				calories: newProductInfo.calories,
				carbs: newProductInfo.carbs,
				proteins: newProductInfo.proteins,
				fats: newProductInfo.fats,
			}

			state.foodArr.push(obj)
		},

		PUSH_TO_RIGHT_ARRAY(state, productToPush) {
			switch (state.whichArray) {
				case 'Śniadanie':
					state.breakfestArr.push(productToPush)
					localStorage.setItem('breakfestArr', JSON.stringify(state.breakfestArr))
					break
				case 'Obiad':
					state.lunchArr.push(productToPush)
					localStorage.setItem('lunchArr', JSON.stringify(state.lunchArr))
					break
				case 'Kolacja':
					state.dinnerArr.push(productToPush)
					localStorage.setItem('dinnerArr', JSON.stringify(state.dinnerArr))
					break
				case 'Przekąska':
					state.snacksArr.push(productToPush)
					localStorage.setItem('snacksArr', JSON.stringify(state.snacksArr))
					break
				default:
					break
			}
		},

		STORE_FOOD_ARRAY(state) {
			localStorage.setItem('foodArr', JSON.stringify(state.foodArr))
		},

		STORE_CALORIES_AND_MAKROS(state) {
			localStorage.setItem('totalCalories', state.totalCalories)
			localStorage.setItem('carbsCalories', state.carbsCalories)
			localStorage.setItem('proteinsCalories', state.proteinsCalories)
			localStorage.setItem('fatsCalories', state.fatsCalories)
		},

		GET_FOOD_ARRAY(state) {
			state.foodArr = JSON.parse(localStorage.getItem('foodArr') || '[]')
		},

		GET_TODAYS_MEAL(state) {
			state.breakfestArr = JSON.parse(localStorage.getItem('breakfestArr') || '[]')
			state.lunchArr = JSON.parse(localStorage.getItem('lunchArr') || '[]')
			state.dinnerArr = JSON.parse(localStorage.getItem('dinnerArr') || '[]')
			state.snacksArr = JSON.parse(localStorage.getItem('snacksArr') || '[]')
		},
		GET_CALORIES_AND_MAKROS(state) {
			state.totalCalories = localStorage.getItem('totalCalories')
			if (state.totalCalories == null) {
				state.totalCalories = 0
			}
			state.carbsCalories = localStorage.getItem('carbsCalories')
			state.proteinsCalories = localStorage.getItem('proteinsCalories')
			state.fatsCalories = localStorage.getItem('fatsCalories')
		},

		REMOVE_FROM_BREAKFEAST_ARRAY(state, index) {
			state.breakfestArr.splice(index, 1)
			localStorage.setItem('breakfestArr', JSON.stringify(state.breakfestArr))
		},
		REMOVE_FROM_LUNCH_ARRAY(state, index) {
			state.lunchArr.splice(index, 1)
			localStorage.setItem('lunchArr', JSON.stringify(state.lunchArr))
		},
		REMOVE_FROM_SNACKS_ARRAY(state, index) {
			state.snacksArr.splice(index, 1)
			localStorage.setItem('snacksArr', JSON.stringify(state.snacksArr))
		},
		REMOVE_FROM_DINNER_ARRAY(state, index) {
			state.dinnerArr.splice(index, 1)
			localStorage.setItem('dinnerArr', JSON.stringify(state.dinnerArr))
		},
	},
	actions: {},
})

export default store
