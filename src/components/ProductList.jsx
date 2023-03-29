import { useState } from 'react'
import { data } from '../data/products.js'
import './ProductList.css'

const ProductList = () => {
	const [products, setProducts] = useState(data)
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)

	const addProduct = () => {
		let newProduct = {
			id: 1337,  // TODO
			name: name,  // går också att bara skriva:  name,
			price: price
		}
		let copy = [ ...products, newProduct ]
		setProducts(copy)
	}

	return (
		<>
		<div>
			<input onChange={event => { setName(event.target.value) }} type="text" placeholder="Produktnamn" />
			<input onChange={event => { setPrice(event.target.value) }}  type="text" placeholder="Pris" />
			<button onClick={addProduct}> Lägg till produkt </button>
		</div>
		<ul className="product-list">
			{products.map(({ id, name, price }) => (
				<li key={id}>
					<h3> {name} </h3>
					<span> {price} kr </span>
				</li>
			))}
		</ul>
		</>
	)
}

export default ProductList
