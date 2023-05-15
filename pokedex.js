const getPokemon = async () => {
	event.preventDefault();
	const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  
	try {
	  const response = await fetch(url);
	  const data = await response.json();
  
	  const resultsDiv = document.getElementById("results");
	  resultsDiv.innerHTML = `
		<div class="card mb-3">
		  <h5 class="card-header" id="name"> ${data.name}</h5>
		  <div class="card-body">
			<img class="card-img-top" src="${data.sprites.front_default}" alt="${data.name}" />
			<p class="card-text"><strong>HP:</strong> ${data.stats.find(stat => stat.stat.name === "hp").base_stat}</p>
			<p class="card-text"><strong>Attack:</strong> ${data.stats.find(stat => stat.stat.name === "attack").base_stat}</p>
			<p class="card-text"><strong>Defense:</strong> ${data.stats.find(stat => stat.stat.name === "defense").base_stat}</p>
			<p class="card-text"><strong>Type:</strong> ${data.types.map(type => type.type.name).join(", ")}</p>
			<p class="card-text"><strong>Abilities:</strong></p>
			<ul class="list-group list-group-flush">
			  ${data.abilities.map(ability => `<li class="list-group-item">${ability.ability.name}</li>`).join("")}
			</ul>
		  </div>
		</div>
	  `;
	} catch (error) {
	  console.error(`There was an error: ${error.message}`);
	}
  };