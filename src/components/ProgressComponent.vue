<template>
	<div class="progress-box">
		<div class="total">
			<progress class="progress" :max="totalCalories" :value="todaysCalories"></progress>
			<label>KCAL: {{ todaysCalories }}/{{ totalCalories }}</label>
		</div>

		<div class="macros-box">
			<div class="small-box">
				<progress class="progress carbs" :max="carbs" :value="todaysCarbs"></progress>
				<label>W: {{ todaysCarbs }}/{{ carbs }}g</label>
			</div>

			<div class="small-box">
				<progress class="progress proteins" :max="proteins" :value="todaysProteins"></progress>
				<label>B: {{ todaysProteins }}/{{ proteins }}g</label>
			</div>

			<div class="small-box">
				<progress class="progress fats" :max="fats" :value="todaysFats"></progress>
				<label>T: {{ todaysFats }}/{{ fats }}g</label>
			</div>
		</div>
	</div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()

		const totalCalories = computed(() => store.state.totalCalories)
		const carbs = computed(() => parseInt(store.state.carbsCalories / 4))
		const proteins = computed(() => parseInt(store.state.proteinsCalories / 4))
		const fats = computed(() => parseInt(store.state.fatsCalories / 9))

		const todaysCalories = computed(
			() =>
				store.state.breakfestCaloriesSum +
				store.state.lunchCaloriesSum +
				store.state.snacksCaloriesSum +
				store.state.dinnerCaloriesSum
		)
		const todaysCarbs = computed(
			() =>
				store.state.breakfestCarbsSum +
				store.state.lunchCarbsSum +
				store.state.snacksCarbsSum +
				store.state.dinnerCarbsSum
		)
		const todaysProteins = computed(
			() =>
				store.state.breakfestProteinsSum +
				store.state.lunchProteinsSum +
				store.state.snacksProteinsSum +
				store.state.dinnerProteinsSum
		)
		const todaysFats = computed(
			() =>
				store.state.breakfestFatsSum + store.state.lunchFatsSum + store.state.snacksFatsSum + store.state.dinnerFatsSum
		)

		return { totalCalories, carbs, proteins, fats, todaysCalories, todaysCarbs, todaysProteins, todaysFats }
	},
}
</script>
<style lang="scss">
.progress-box {
	position: fixed;
	bottom: 0;
	width: 90%;
	left: 50%;
	transform: translateX(-50%);

	.total {
		display: flex;
		justify-content: space-between;

		label {
			font-size: 0.8rem;
			width: 30%;
			color: #fff;
		}

		progress {
			width: 65%;
			accent-color: coral;
		}
	}

	.progress {
		height: 15px;
	}

	.macros-box {
		color: #fff;
		width: 100%;
		display: flex;
		justify-content: space-between;

		.small-box {
			width: 30%;
			display: flex;
			justify-content: space-between;

			progress {
				width: 35%;
			}

			label {
				text-align: right;
				width: 60%;
			}

			.carbs {
				accent-color: red;
			}

			.proteins {
				accent-color: greenyellow;
			}

			.fats {
				accent-color: aquamarine;
			}
		}
	}
}
</style>
