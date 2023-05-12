<template>
	<div class="wrapper">
		<HeaderComponent />
		<router-view />
	</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
	components: { HeaderComponent },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;
	min-height: 100svh;
	background-image: url('./assets/warzywa-small.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&::after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.45);
		z-index: -1;
	}
}

.wrapper {
	padding: 2em 1em;
	max-width: 1200px;
	margin: 0 auto;
}
</style>
