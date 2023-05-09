<template>
	<main class="main">
		<button class="add-btn"></button>
	</main>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()

		const totalCalories = computed(() => store.state.TotalCalories)

		return { totalCalories }
	},
}
</script>
<style lang="scss">
.main {
	position: relative;
	min-height: 20svh;

	.add-btn {
		position: absolute;
		right: 0;
		top: 0;
		width: 35px;
		height: 35px;
		background: none;
		border: none;
		background-image: url('../assets/plus.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-color: green;
		border-radius: 50%;
	}

	.text {
		color: #fff;
	}
}
</style>
