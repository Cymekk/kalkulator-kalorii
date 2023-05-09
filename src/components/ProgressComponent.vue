<template>
	<div class="progress-box">
		<div class="total">
			<progress class="progress" :max="totalCalories" :value="250"></progress>
			<label>KCAL: /{{ totalCalories }}</label>
		</div>

		<div class="macros-box">
			<div class="small-box">
				<progress class="progress carbs" :max="carbs" value="15"></progress>
				<label>W: /{{ carbs }}g</label>
			</div>

			<div class="small-box">
				<progress class="progress proteins" :max="proteins" value="20"></progress>
				<label>B: /{{ proteins }}g</label>
			</div>

			<div class="small-box">
				<progress class="progress fats" :max="fats" value="35"></progress>
				<label>T: /{{ fats }}g</label>
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
		const totalCalories = computed(() => store.state.TotalCalories)
		const carbs = computed(() => parseInt(store.state.CarbsCalories / 4))
		const proteins = computed(() => parseInt(store.state.ProteinsCalories / 4))
		const fats = computed(() => parseInt(store.state.FatsCalories / 9))
		console.log(totalCalories.value)

		return { totalCalories, carbs, proteins, fats }
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
			width: 20%;
			color: #fff;
		}

		progress {
			width: 75%;
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

			progress,
			label {
				width: 45%;
			}

			label {
				text-align: right;
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
