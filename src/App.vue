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

.buttons-box {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

	button {
		background-color: greenyellow;
		width: 40%;
		border-radius: 8px;
		font-weight: bold;

		a {
			text-decoration: none;
			color: #000;
			transition: color 0.3s;
			width: 100%;
			height: 100%;
		}
		&:hover {
			background-color: green;

			a {
				color: #fff;
			}
		}

		&:hover:first-child {
			background-color: rgb(148, 16, 16);
			color: #fff;
		}

		&:first-child {
			background-color: rgb(241, 146, 109);
		}
	}
}

.popup {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 100svh;
	background-color: rgba(0, 0, 0, 0.5);

	&-body {
		padding: 1em;
		width: 80%;
		min-height: 50svh;
		background-color: lightblue;
		margin: 0 auto;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
}

button {
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

@media (min-width: 576px) {
	.popup {
		&-body {
			width: 70%;
		}
	}
}
@media (min-width: 768px) {
	.popup {
		&-body {
			width: 60%;
		}
	}
}
@media (min-width: 992px) {
	.popup {
		&-body {
			width: 50%;
		}
	}
}

@media (min-width: 1200px) {
	.popup {
		&-body {
			width: 40%;
		}
	}
}
</style>
