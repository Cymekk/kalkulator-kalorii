<template>
	<div class="wrapper">
		<router-view />
	</div>
</template>

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
	background-color: #802201;
	background-image: linear-gradient(326deg, #802201 0%, #210d10 74%);
}

.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
