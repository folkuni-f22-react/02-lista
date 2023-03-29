

const Orderly = ({ value }) => {
	// Två sätt att räkna ut suffixet
	let suffix = (
		value === 1 ? 'st' :
		value === 2 ? 'nd' :
		value === 3 ? 'rd' :
		'th'
	)
	// let suffix = 'th'
	// if( value === 1 ) {
	// 	suffix = 'st'
	// } else if( value === 2 ) {
	// 	suffix = 'nd'
	// } else if( value === 3 ) {
	// 	suffix = 'rd'
	// }
	return (
		<span> {value + suffix} </span>
	)
}

export default Orderly
