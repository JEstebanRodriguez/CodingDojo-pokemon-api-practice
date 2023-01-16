import React, { useState } from 'react'
import './styles/App.css'
import PokemonGrid from './components/PokemonGrid'

const App = () => {
	const [pokemons, setPokemons] = useState([])
	const [isDisabled, setIsDisabled] = useState(false)
	const handleAllPokemons = async () => {
		const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
		const { results } = await resp.json()
		setPokemons(results)
		setIsDisabled(true)
	}
	return (
		<div className='app-container'>
			<h1>Pokemons API Practice</h1>
			<p>Al precionar el siguiente botón se obtendra una lista de pokemones</p>
			<div className='action-content'>
				<button
					className='btn'
					onClick={handleAllPokemons}
					disabled={isDisabled}>
					Fetch Pokemon
				</button>
				<span>Cantidad de pokemons: {pokemons.length}</span>
			</div>
			<PokemonGrid pokemons={pokemons} />
		</div>
	)
}

export default App
