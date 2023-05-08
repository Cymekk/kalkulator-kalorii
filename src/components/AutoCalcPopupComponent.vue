<template>
	<div class="popup">
		<div class="popup-body">
			<h2>Wpisz swoje dane</h2>

			<select>
				<option value="0" selected disabled>Wybierz płeć</option>
				<option value="1">Kobieta</option>
				<option value="2">Mężczyzna</option>
			</select>

			<input type="text" placeholder="Podaj swoją wagę w kg" />
			<input type="text" placeholder="Podaj swój wzrost w cm" />
			<input type="text" placeholder="Podaj swój wiek" />

			<select>
				<option value="0" selected disabled>Wybierz poziom aktywności</option>
				<option value="1.2">Siedzący</option>
				<option value="1.375">Lekko aktywny</option>
				<option value="1.55">Umiarkowanie aktywny</option>
				<option value="1.725">Bardzo aktywny</option>
				<option value="1.9">Ekstra aktywny</option>
			</select>

			<select>
				<option value="0" selected disabled>Wybierz cel</option>
				<option value="-500">Utrata wagi</option>
				<option value="1">Utrzymanie wagi</option>
				<option value="500">Przybranie wagi</option>
			</select>
			<button>Oblicz zapotrzebowanie</button>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.popup {
	width: 100%;
	height: 100svh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: tomato;

	&-body {
		padding: 1em;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h2 {
			font-size: 1.4rem;
			text-align: center;
			margin-bottom: 2em;
		}

		select,
		input {
			width: 80%;
			background: none;
			border: none;
			margin: 1em;
			padding: 1em;
			outline: none;
			border-bottom: 2px solid lightgray;
		}

		select {
			option {
				background: #11436b;
				color: #fff;
			}
		}

		button {
			width: 60%;
			padding: 1em;
			background: none;
			border: none;
			background-color: greenyellow;
			border-radius: 10px;
			margin-top: 1em;
		}
	}
}
</style>
