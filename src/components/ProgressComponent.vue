<template>
	<div class="progress-box">
		<div class="container">
			<div class="total" :class="{ error: todaysCalories > totalCalories }">
				<progress class="progress" :max="totalCalories" :value="todaysCalories"></progress>
				<label>KCAL: {{ todaysCalories }}/{{ totalCalories }}</label>
			</div>

			<div class="macros-box">
				<div class="small-box" :class="{ error: todaysCarbs > carbs }">
					<progress class="progress carbs" :max="carbs" :value="todaysCarbs"></progress>
					<label>W: {{ todaysCarbs }}/{{ carbs }}g</label>
				</div>

				<div class="small-box" :class="{ error: todaysProteins > proteins }">
					<progress class="progress proteins" :max="proteins" :value="todaysProteins"></progress>
					<label>B: {{ todaysProteins }}/{{ proteins }}g</label>
				</div>

				<div class="small-box" :class="{ error: todaysFats > fats }">
					<progress class="progress fats" :max="fats" :value="todaysFats"></progress>
					<label>T: {{ todaysFats }}/{{ fats }}g</label>
				</div>
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
	padding: 1em;
	bottom: 0;
	width: 100%;
	left: 50%;
	transform: translateX(-50%);
	background-color: rgba(255, 255, 255, 0.6);

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		.progress {
			height: 15px;
		}

		.total {
			display: flex;
			justify-content: space-between;

			label {
				font-size: 0.8rem;
				width: 25%;
				text-align: right;
			}

			.progress {
				width: 70%;
				accent-color: coral;
			}
		}

		.macros-box {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 1em;

			.small-box {
				width: 30%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				progress {
					width: 40%;
				}

				label {
					text-align: center;
					width: 55%;
					font-weight: bold;
				}

				.carbs {
					accent-color: rgb(255, 194, 102);
				}

				.proteins {
					accent-color: greenyellow;
				}

				.fats {
					accent-color: aquamarine;
				}
			}
		}

		.error {
			label {
				color: red;
				font-weight: bold;
			}

			.progress,
			.carbs,
			.proteins,
			.fats {
				accent-color: red;
			}
		}
	}
}

@media (min-width: 576px) {
	.progress-box {
		padding: 1.5em;

		.container {
			width: 90%;
			.progress {
				height: 15px;
			}

			.total {
				align-items: center;
				label {
					font-size: 0.9rem;
					width: 25%;
					text-align: right;
				}

				.progress {
					width: 70%;
					accent-color: coral;
				}
			}

			.macros-box {
				.small-box {
					progress {
						width: 40%;
					}

					label {
						width: 55%;
						font-size: 0.7rem;
						text-align: center;
					}
				}
			}
		}
	}
}

@media (min-width: 768px) {
	.progress-box {
		padding: 2em;

		.container {
			width: 80%;
			.progress {
				height: 20px;
			}

			.total {
				label {
					width: 20%;
					text-align: right;
				}

				.progress {
					width: 85%;
				}
			}

			.macros-box {
				.small-box {
					progress {
						width: 60%;
					}

					label {
						text-align: right;
						width: 45%;
					}
				}
			}
		}
	}
}

@media (min-width: 992px) {
	.progress-box {
		.container {
			width: 70%;
		}
	}
}
@media (min-width: 1200px) {
	.progress-box {
		.container {
			width: 60%;
		}
	}
}
</style>
