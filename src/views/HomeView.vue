<template>
	<ProgressComponent />
	<MainComponent />
	<teleport to="#auto-calc">
		<PopupComponent :class="{ active: isPopupVisible }" />
	</teleport>
</template>

<script>
import PopupComponent from '@/components/PopupComponent.vue'
import ProgressComponent from '@/components/ProgressComponent.vue'
import MainComponent from '@/components/MainComponent.vue'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
// @ is an alias to /src

export default {
	name: 'HomeView',
	components: { PopupComponent, ProgressComponent, MainComponent },

	setup() {
		const store = useStore()
		const isPopupVisible = ref(false)
		const totalCalories = computed(() => store.state.TotalCalories)
		if (totalCalories.value == 0) {
			isPopupVisible.value = true
		} else {
			isPopupVisible.value = false
		}

		return {
			isPopupVisible,
		}
	},
}
</script>

<style lang="scss"></style>
