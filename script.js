///Document Objects
let image = document.getElementById("pokemonImage")
let number = document.getElementById("pokemonNumber")
let pokeName = document.getElementById("pokemonName")
let types = document.getElementById("pokemonType")

let baseHp = document.getElementById("baseHp")
let baseAttack = document.getElementById("baseAttack")
let baseDefense = document.getElementById("baseDefense")
let baseSpAttack = document.getElementById("baseSpAttack")
let baseSpDefense = document.getElementById("baseSpDefense")
let baseSpeed = document.getElementById("baseSpeed")

let search = document.getElementById("search")
let searchBtn = document.getElementById("searchBtn")

// VARIABLES
let currentPokemon;


//EVENT LISTENER
searchBtn.addEventListener("click", () => {
	fetchPokemonByName(search.value.toLowerCase())
})

////FUNCTIONS
function fetchPokemonByName(name) {
	fetch("https://pokeapi.co/api/v2/pokemon/" + name)
		.then((response) => response.json())
		.then((data) => createPokemon(data))
	
}

function fetchPokemonById(number) {
	fetch("https://pokeapi.co/api/v2/pokemon/" + number)
		.then((response) => response.json())
		.then((data) => createPokemon(data))
}

function createPokemon(data) {
	currentPokemon = new Pokemon(data.id,
						  data.name, 
						  data.types, 
						  data.stats[0].base_stat, 
						  data.stats[1].base_stat,
						  data.stats[2].base_stat,
						  data.stats[3].base_stat,
						  data.stats[4].base_stat,
						  data.stats[5].base_stat,
						  data.sprites.other["official-artwork"].front_default)
	printPokemon(currentPokemon)
	
	image.src = currentPokemon.url
	//append not ideal her because it does not remove with every use
	//number.append(currentPokemon.id)
	//pokeName.append(currentPokemon.name)
	//types.append(currentPokemon.types[0].type.name)
	number.innerHTML = `<strong>ID:</strong> ${currentPokemon.id}`
	pokeName.innerHTML = `<strong>Name:</strong> ${currentPokemon.name}` 
	types.innerHTML = `<strong>Primary Type:</strong> ${currentPokemon.types[0].type.name}`
	
	baseHp.innerHTML = currentPokemon.hp
	baseAttack.innerHTML = currentPokemon.attack
	baseDefense.innerHTML = currentPokemon.defense
	baseSpAttack.innerHTML = currentPokemon.spAttack
	baseSpDefense.innerHTML = currentPokemon.spDefense
	baseSpeed.innerHTML = currentPokemon.speed
}

let printPokemon = (poketMonster) => {
	console.log(poketMonster)
}


////CLASSES
class Pokemon {
	constructor(id, name, types, hp, attack, defense, spDefense, spAttack, speed, url) {
		this.id = id,
		this.name = name,
		this.types = types,
		this.hp = hp,
		this.attack = attack,
		this.defense = defense,
		this.spDefense = spDefense,
		this.spAttack = spAttack,
		this.speed = speed
		this.url = url
	}	
}