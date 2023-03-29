import { useState } from 'react'
import ViewUser from './components/ViewUser'
import NumberList from './components/NumberList'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	let data = [
		{ name: 'David', email: 'test@test.se' },
		{ name: 'Greta', email: 'greta@test.se' }
	]

	return (
		<div className="App">
		<NumberList />
		{data.map(user => (
			<ViewUser key={user.email} name={user.name} email={user.email} />
		))}
		</div>
	)
}



export default App
