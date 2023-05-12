<template>
	<ProductsComponent @handle-popup="handlePopup" @push-to-right-array="pushToRightArray" />
	<AddProductPopup :class="{ active: isActive }" />
</template>
<script>
import AddProductPopup from '@/components/AddProductPopup.vue'
import ProductsComponent from '@/components/ProductsComponent.vue'
import { ref, onUpdated } from 'vue'
import { useStore } from 'vuex'

export default {
	components: { ProductsComponent, AddProductPopup },
	setup() {
		const store = useStore()

		store.commit('GET_WHICH_ARRAY')

		let isActive = ref(false)
		let pushToArray = ref(false)
		let number = ref()
		function handlePopup() {
			if (isActive.value == true) {
				isActive.value = false
			} else {
				isActive.value = true
			}
		}

		function pushToRightArray(index) {
			if (pushToArray.value == false) {
				pushToArray.value = true
			} else {
				pushToArray.value = false
			}

			number.value = index
			return number
		}

		onUpdated(() => {
			store.commit('GET_FOOD_ARRAY')
		})

		return {
			isActive,
			number,
			pushToArray,
			handlePopup,
			pushToRightArray,
		}
	},
}
</script>
<style lang="scss">
.add-product {
	min-height: 10svh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 3em 0;

	.search-bar {
		width: 100%;
		display: flex;
		justify-content: space-evenly;

		input,
		button {
			padding: 1em;
			border: none;
			background: none;
			outline: none;
		}

		input {
			border-bottom: 2px solid greenyellow;
			width: 50%;
			color: #fff;

			&::placeholder {
				color: #fff;
			}
		}

		button {
			background-color: greenyellow;
			width: 30%;
			border-radius: 8px;
			font-weight: bold;
		}
	}
}
</style>
