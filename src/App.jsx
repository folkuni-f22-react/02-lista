import { useState } from 'react'
import ViewUser from './components/ViewUser'
import NumberList from './components/NumberList'
import Orderly from './components/Orderly'
import ProductList from './components/ProductList'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	const orderlyList = [1, 2, 3, 4, 5]

	let data = [
		{ name: 'David', email: 'test@test.se' },
		{ name: 'Greta', email: 'greta@test.se' }
	]

	return (
		<div className="App">
			<ProductList />

			{orderlyList.map(n => (
				<Orderly key={n} value={n} />
			))}

			<NumberList />

			{data.map(user => (
				<ViewUser key={user.email} name={user.name} email={user.email} />
			))}
		</div>
	)
}



export default App
