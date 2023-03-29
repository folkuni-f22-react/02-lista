
const NumberList = () => {
	let list = [7, 9, 35]

	// Key måste vara något som är unikt för varje element i listan
	// Talen är unika, de skulle fungera
	// Id är bäst - om det finns
	// Index är okej
	let jsxList = list.map((number, index) => (
		<li key={index}> {number} </li>
	))

	return (
		<ul>
			{jsxList}
		</ul>
	)
}

export default NumberList
