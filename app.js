const starwars = {}

starwars.init = function(){
	starwars.getStarwars();
	starwars.getPlanets();
	starwars.getStarships();
}

//on click of search button, make ajax request to access Starwars API data
starwars.getStarwars = function(){
	$('#go').on('click', function() {
		//document.getElementById('searchInputs').style.display = 'none';
		const usersInput = document.getElementById("searchMe").value;
		const people = document.getElementById('people');
		$.ajax({
		  url: `https://swapi.co/api/people/?search=${usersInput}`,
		  method: 'GET',
		  dataType: 'json',
		  //once I have data, then display results with starwars.display function
		}).then(function(res) {
			console.log(res)
			starwars.display(res.results)
		});
	})
};


starwars.display = function(data) {
	$.each(data, function(index, Object) {
		let $this = this;
		let character = Object.name;
		if(data.length === 0) {
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
	        $.each(data, function(index, object) {
	            const character = object.name;
	            $('#resultsContainer').append(`
	            	<h2>${character}</h2> 
	            	<li><em><strong>Birth Year:</strong></em> ${object.birth_year}</li> 
	            	<li><em><strong>Eye Color:</strong></em> ${object.eye_color}</li> 
	            	<li><em><strong>Films:</strong></em> ${object.films}</li> 
	            	<li><em><strong>Gender:</strong></em> ${object.gender}</li> 
	            	<li><em><strong>Hair Colour:</strong></em> ${object.hair_color}</li> 
	            	<li><em><strong>Height:</strong></em> ${object.height}</li> 
	            	<li><em><strong>Homeworld:</strong></em> ${object.homeworld}</li> 
	            	<li><em><strong>Mass:</strong></em> ${object.mass}</li> 
	            	<li><em><strong>Skin Color:</strong></em> ${object.skin_color}</li> 
	            	<li><em><strong>Species:</strong></em> ${object.species}</li> 
	            	<li><em><strong>Starships:</strong></em> ${object.starships}</li> 
	            	<li><em><strong>Vehicles:</strong></em> ${object.vehicles}</li>`); 

	            //I think this is more what they're looking for - just a list of categories which will then direct you to the info of the category you click on in a new pge - if i can figure that out, use below list - if not, use above list

	            // $('#resultsContainer').append(`<h2>${character}</h2> <li>Birth Year</li> <li>Eye Colour</li> <li>Films</li> <li>Gender</li> <li>Hair Colour</li> <li>Height</li> <li>Homeworld</li> <li>Mass</li> <li>Skin Colour</li> <li>Species</li> <li>Species</li> <li>Starships</li> <li>Vehicles</li>`)   
	        });
		}
	});
}

//on click of search button, make ajax request to access Starwars API data
starwars.getPlanets = function(){
	$('#go').on('click', function() {
		$('#resultsContainer').empty();
		const usersInput = document.getElementById("searchMe").value;
		const planets = document.getElementById('planets');
		$.ajax({
		  url: `https://swapi.co/api/planets/?search=${usersInput}`,
		  method: 'GET',
		  dataType: 'json',
		  //once I have data, then display results with starwars.display function
		}).then(function(res) {
			console.log(res)
			starwars.displayPlanets(res.results)
		});
	})
};


starwars.displayPlanets = function(data) {
	$.each(data, function(index, Object) {
		let $this = this;
		//let planet = Object.homeworld;
		if(data.length === 0) {
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
	        $.each(data, function(index, results) {
	            const planet = results.name;
	            $('#resultsContainer').append(`
	            	<div> 
	            		<h2>${planet}</h2> 
	            		<li><em><strong>Climate:</strong></em> ${results.climate}</li> 
	            		<li><em><strong>Created:</strong></em> ${results.created}</li> 
	            		<li><em><strong>Diameter:</strong></em> ${results.diameter}</li> 
	            		<li><em><strong>Edited:</strong></em> ${results.edited}</li> 
	            		<li><em><strong>Films:</strong></em> ${results.films}</li> 
	            		<li><em><strong>Gravity:</strong></em> ${results.gravity}</li> 
	            		<li><em><strong>Rotation Period:</strong></em> ${results.rotation_period}</li> 
	            		<li><em><strong>Surface Water:</strong></em> ${results.surface_water}</li> 
	            		<li><em><strong>Terrain:</strong></em> ${results.terrain}</li></div>`);
	            //I think this is more what they're looking for - just a list of categories which will then direct you to the info of the category you click on in a new pge - if i can figure that out, use below list - if not, use above list

	            // $('#resultsContainer').append(`<div> <h2>${planet}</h2> <li>Climate</li> <li>Creation</li> <li>Diamater</li> <li>Edited</li> <li>Films Planet Was In</li> <li>Gravity of Planet</li> <li>Rotation Period</li> <li>Surface Water</li> <li>Terrain</li> </div>`)    
	        });
		}
	});
}

//on click of search button, make ajax request to access Starwars API data
starwars.getStarships = function(){
	$('#go').on('click', function() {
		$('#resultsContainer').empty();
		const usersInput = document.getElementById("searchMe").value;
		const starships = document.getElementById('starships');
		$.ajax({
		  url: `https://swapi.co/api/starships/?search=${usersInput}`,
		  method: 'GET',
		  dataType: 'json',
		  //once I have data, then display results with starwars.display function
		}).then(function(res) {
			console.log(res)
			starwars.displayStarships(res.results)
		});
	})
};


starwars.displayStarships = function(data) {
	$.each(data, function(index, Object) {
		let $this = this;
		//let planet = Object.homeworld;
		if(data.length === 0) {
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
	        $.each(data, function(index, results) {
	            const starships = results.name;
	            $('#resultsContainer').append(`
	            	<div> 
	            		<h2>${starships}</h2> 
	            		<li><em><strong>MGLT:</strong></em> ${results.MGLT}</li> 
	            		<li><em><strong>Cargo Capacity:</strong></em> ${results.cargo_capacity}</li> 
	            		<li><em><strong>Consumables:</strong></em> ${results.consumables}</li> 
	            		<li><em><strong>Cost in Credits:</strong></em> ${results.cost_in_credits}</li> 
	            		<li><em><strong>Crew:</strong></em> ${results.crew}</li> 
	            		<li><em><strong>Films:</strong></em> ${results.films}</li> 
	            		<li><em><strong>Hyperdrive Rating:</strong></em> ${results.hyperdrive_rating}</li> 
	            		<li><em><strong>Length:</strong></em> ${results.length}</li> 
	            		<li><em><strong>Manufacturer:</strong></em> ${results.manufacturer}</li>
	            		<li><em><strong>Max Atmosphering Speed:</strong></em> ${results.max_atmosphering_speed}</li>
	            		<li><em><strong>Model:</strong></em> ${results.model}</li>
	            		<li><em><strong>Passengers:</strong></em> ${results.passengers}</li>
	            		<li><em><strong>Pilots:</strong></em> ${results.pilots}</li>
	            		<li><em><strong>Starship Class:</strong></em> ${results.starship_class}</li>
	            		</div>`);
	            //I think this is more what they're looking for - just a list of categories which will then direct you to the info of the category you click on in a new pge - if i can figure that out, use below list - if not, use above list

	            // $('#resultsContainer').append(`<div> <h2>${planet}</h2> <li>Climate</li> <li>Creation</li> <li>Diamater</li> <li>Edited</li> <li>Films Planet Was In</li> <li>Gravity of Planet</li> <li>Rotation Period</li> <li>Surface Water</li> <li>Terrain</li> </div>`)    
	        });
		}
	});
}

$(function(){
	starwars.init();
});

//give user option to refresh page 
$('#refresh').on('click', function(){
	console.log(this)
	location.href = location.href;
});

//smooth scroll so results display on screen in a more obvious manner
// $("#submitButton").on('click', function() {
//     $('html,body').animate({
//         scrollTop: $("#resultsContainer").offset().top},
//         'slow');
// });

//problems:
//1. people and planets both coming up even when only clicking on one radio button
//2. need to figure out how to empty container wen new option is pressed
//3. need to figure out how to stop user from being able to press 2 radio bttons
//4, need to turn data that is in arrays (like in 'films') into actual film titles, not the url
//5 get refresh button to work