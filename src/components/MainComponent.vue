<template>
	<main class="main">
		<div class="box" :class="{ active: isActive }">
			<button class="button chevron"></button>
			<h2>Śniadanie</h2>
			<router-link to="/addproduct" @click="whichArray($event)"><button class="button add-btn"></button></router-link>
		</div>
		<div class="food-box">
			<div class="food-container" v-for="(item, index) in breakfestArr" :key="index">
				<div class="name">
					<p>{{ item.name }}</p>
					<button @click="removeFromBreakfestArray(index)"></button>
				</div>

				<div class="macros">
					<p>KCAL: {{ item.calories }}</p>
					<p>W: {{ item.carbs }}</p>
					<p>B: {{ item.proteins }}</p>
					<p>T: {{ item.fats }}</p>
				</div>
			</div>
			<p v-if="breakfestArr.length == 0" class="error">Brak wpisów do sekcji śniadanie</p>
		</div>

		<div class="box" :class="{ active: isActive }">
			<button class="button chevron"></button>
			<h2>Obiad</h2>
			<router-link to="/addproduct" @click="whichArray($event)"><button class="button add-btn"></button></router-link>
		</div>
		<div class="food-box">
			<div class="food-container" v-for="(item, index) in lunchArr" :key="index">
				<div class="name">
					<p>{{ item.name }}</p>
					<button @click="removeFromLunchArray(index)"></button>
				</div>

				<div class="macros">
					<p>KCAL: {{ item.calories }}</p>
					<p>W: {{ item.carbs }}</p>
					<p>B: {{ item.proteins }}</p>
					<p>T: {{ item.fats }}</p>
				</div>
			</div>
			<p v-if="lunchArr.length == 0" class="error">Brak wpisów do sekcji obiad</p>
		</div>

		<div class="box" :class="{ active: isActive }">
			<button class="button chevron"></button>
			<h2>Przekąska</h2>
			<router-link to="/addproduct" @click="whichArray($event)"><button class="button add-btn"></button></router-link>
		</div>
		<div class="food-box">
			<div class="food-container" v-for="(item, index) in snacksArr" :key="index">
				<div class="name">
					<p>{{ item.name }}</p>
					<button @click="removeFromSnacksArray(index)"></button>
				</div>

				<div class="macros">
					<p>KCAL: {{ item.calories }}</p>
					<p>W: {{ item.carbs }}</p>
					<p>B: {{ item.proteins }}</p>
					<p>T: {{ item.fats }}</p>
				</div>
			</div>
			<p v-if="snacksArr.length == 0" class="error">Brak wpisów do sekcji przekąski</p>
		</div>

		<div class="box" :class="{ active: isActive }">
			<button class="button chevron"></button>
			<h2>Kolacja</h2>
			<router-link to="/addproduct" @click="whichArray($event)"><button class="button add-btn"></button></router-link>
		</div>
		<div class="food-box">
			<div class="food-container" v-for="(item, index) in dinnerArr" :key="index">
				<div class="name">
					<p>{{ item.name }}</p>
					<button @click="removeFromDinnerArray(index)"></button>
				</div>

				<div class="macros">
					<p>KCAL: {{ item.calories }}</p>
					<p>W: {{ item.carbs }}</p>
					<p>B: {{ item.proteins }}</p>
					<p>T: {{ item.fats }}</p>
				</div>
			</div>
			<p v-if="dinnerArr.length == 0" class="error">Brak wpisów do sekcji kolacja</p>
		</div>
	</main>
</template>
<script>
import { useStore } from 'vuex'
import { ref, onMounted, computed } from 'vue'

export default {
	setup() {
		const store = useStore()
		const breakfestArr = computed(() => store.state.breakfestArr)
		const lunchArr = computed(() => store.state.lunchArr)
		const dinnerArr = computed(() => store.state.dinnerArr)
		const snacksArr = computed(() => store.state.snacksArr)
		let isActive = ref(false)
		function handleActive() {
			if (isActive.value == true) {
				isActive.value = false
			} else {
				isActive.value = true
			}
		}

		onMounted(() => {
			const allChevronBtns = document.querySelectorAll('.chevron')
			const allFoodbox = document.querySelectorAll('.food-box')
			allChevronBtns.forEach((el, index) => {
				el.addEventListener('click', () => {
					el.classList.toggle('rotate')
					allFoodbox[index].classList.toggle('active')
				})
			})
		})

		store.commit('GET_TODAYS_MEAL')

		function whichArray(e) {
			let text = e.target.parentElement.parentElement.querySelector('h2').textContent
			store.commit('ASSIGN_WHICH_ARRAY', text)
		}

		function removeFromBreakfestArray(index) {
			store.commit('REMOVE_FROM_BREAKFEAST_ARRAY', index)
			store.commit('CALC_MAKROS')
		}
		function removeFromLunchArray(index) {
			store.commit('REMOVE_FROM_LUNCH_ARRAY', index)
			store.commit('CALC_MAKROS')
		}
		function removeFromSnacksArray(index) {
			store.commit('REMOVE_FROM_SNACKS_ARRAY', index)
			store.commit('CALC_MAKROS')
		}
		function removeFromDinnerArray(index) {
			store.commit('REMOVE_FROM_DINNER_ARRAY', index)
			store.commit('CALC_MAKROS')
		}

		return {
			isActive,
			breakfestArr,
			lunchArr,
			dinnerArr,
			snacksArr,
			handleActive,
			whichArray,
			removeFromBreakfestArray,
			removeFromLunchArray,
			removeFromSnacksArray,
			removeFromDinnerArray,
		}
	},
}
</script>
<style lang="scss">
.main {
	margin-top: 2em;
	min-height: 20svh;
	background-color: rgba(255, 255, 255, 0.65);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.box {
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 1em;

		.button {
			width: 35px;
			height: 35px;
			border: none;
			background: none;
			outline: none;
			background-color: green;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 10px;
		}

		.chevron {
			background-image: url('../assets/chevron-down.svg');
			transition: transform 0.3s;
		}

		.add-btn {
			background-image: url('../assets/plus.svg');
		}
		h2 {
			font-size: 1.2rem;
		}
	}

	.food-box {
		padding: 0.5em;
		display: none;
		opacity: 0;
		width: 80%;

		.food-container {
			margin-top: 2em;
			padding: 1em;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2px solid greenyellow;

			.name {
				width: 80%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				p {
					font-size: 1rem;
					font-weight: bold;
				}

				button {
					width: 25px;
					height: 25px;
					background: none;
					outline: none;
					border: none;
					background-image: url('../assets/x.svg');
					background-repeat: no-repeat;
					background-position: center;
					border-radius: 5px;
				}
			}

			.macros {
				margin-top: 1em;
				width: 80%;
				display: flex;
				justify-content: space-between;

				p {
					font-size: 1rem;
				}
			}
		}

		.error {
			text-align: center;
			font-size: 1rem;
			font-weight: bold;
			color: red;
		}
	}

	.rotate {
		transform: rotate(180deg);
	}

	.active {
		display: block;
		min-height: 1vh;
		opacity: 1;
	}
}
</style>
