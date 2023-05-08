<template>
	<HeaderAndButtonsComponent />
	<teleport to="#auto-calc">
		<AutoCalcPopupComponent />
	</teleport>
</template>

<script>
import HeaderAndButtonsComponent from '@/components/HeaderAndButtonsComponent.vue'
import AutoCalcPopupComponent from '../components/AutoCalcPopupComponent.vue'

// @ is an alias to /src

export default {
	name: 'HomeView',
	components: { HeaderAndButtonsComponent, AutoCalcPopupComponent },
}
</script>

<style lang="scss"></style>
