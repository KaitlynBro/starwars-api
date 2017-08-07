const starwars = {}

starwars.init = function(){
	starwars.getStarwars();
	starwars.getPlanets();
	starwars.getStarships();
	starwars.getFilms();
}

//on click of search button, make ajax request to access Starwars API data for people
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
			//console.log(res)
			starwars.display(res.results)
		});
	})
};


starwars.display = function(data) {
	$.each(data, function(index, object) {
		console.log('menu loop function');
		let $this = this;
		if(data.length === 0) {
			document.getElementById('resultsContainer').style.backgroundColor = 'white';
	        document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
            const character = object.name;
            document.getElementById('resultsContainer').style.backgroundColor = 'white';
            document.getElementById('resultsContainer').style.border = '30px solid #f8d731';
            $('#resultsContainer').append(`
            	<div class="queryResults">
	            	<h2>${character}</h2> 
	            	<ul><li><a href="#" class="clickMe"><em><strong>Birth Year:</strong></em> ${object.birth_year}</a></li> 
	            	<a href="#" class="clickMe"><li><em><strong>Eye Color:</strong></em> ${object.eye_color}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Films:</strong></em> ${object.films}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Gender:</strong></em> ${object.gender}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Hair Colour:</strong></em> ${object.hair_color}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Height:</strong></em> ${object.height}"</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Homeworld:</strong></em> ${object.homeworld}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Mass:</strong></em> ${object.mass}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Skin Color:</strong></em> ${object.skin_color}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Species:</strong></em> ${object.species}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Starships:</strong></em> ${object.starships}</a></li> 
	            	<li><a href="#" class="clickMe"><em><strong>Vehicles:</strong></em> ${object.vehicles}</a></li></ul></div>`);
	        $('.clickMe').on('click', function() {
	        	let $this = this;
	        	$('#resultsContainer').empty();
	        	$('#resultsContainer').append($this);
	        }) 
		}
	});
}

//on click of search button, make ajax request to access Starwars API data for planets
starwars.getPlanets = function(){
	$('#go').on('click', function() {
		//document.getElementById('#searchInputs').style.display = 'none';
		$('#resultsContainer').empty();
		const usersInput = document.getElementById("searchMe").value;
		const planets = document.getElementById('planets');
		$.ajax({
		  url: `https://swapi.co/api/planets/?search=${usersInput}`,
		  method: 'GET',
		  dataType: 'json',
		  //once I have data, then display results with starwars.display function
		}).then(function(res) {
			//console.log(res)
			starwars.displayPlanets(res.results)
		});
	})
};


starwars.displayPlanets = function(data) {
	//console.log(data)
	$.each(data, function(index, object) {
		let $this = this;
		//let planet = Object.homeworld;
		if(data.length === 0) {
			document.getElementById('resultsContainer').style.backgroundColor = 'white';
	            document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
	       // $.each(data, function(index, results) {
	            //const planet = results.name;
	            document.getElementById('resultsContainer').style.backgroundColor = 'white';
	            document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
	            $('#resultsContainer').append(`
	            	<div class="queryResults"> 
	            		<ul>
		            		<h2>${object.name}</h2> 
		            		<li><a href="#" class="clickMe"><em><strong>Climate:</strong></em> ${object.climate}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Created:</strong></em> ${object.created}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Diameter:</strong></em> ${object.diameter}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Edited:</strong></em> ${object.edited}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Films:</strong></em> ${object.films}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Gravity:</strong></em> ${object.gravity}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Rotation Period:</strong></em> ${object.rotation_period}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Surface Water:</strong></em> ${object.surface_water}</a></li> 
		            		<li><a href="#" class="clickMe"><em><strong>Terrain:</strong></em> ${object.terrain}</a></li>
		            	</ul>
		            </div>`);
	            $('.clickMe').on('click', function() {
		        	let $this = this;
		        	$('#resultsContainer').empty();
		        	$('#resultsContainer').append($this);
		        }) 
	        //});
		}
	});
}

//on click of search button, make ajax request to access Starwars API data for starships
starwars.getStarships = function(){
	$('#go').on('click', function() {
		//document.getElementById('#searchInputs').style.display = 'none';
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
	$.each(data, function(index, object) {
		console.log('menu loop function');
		let $this = this;
		if(data.length === 0) {
			document.getElementById('resultsContainer').style.backgroundColor = 'white';
	        document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
        	$('#searchInputs').hide();
            document.getElementById('resultsContainer').style.backgroundColor = 'white';
            document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
            $('#resultsContainer').append(`<div class="queryResults"> 
            		<ul>
	            		<h2>${object.name}</h2> 
	            		<li><a href="#" class="clickMe"><em><strong>MGLT:</strong></em> ${object.MGLT}</a></li> 
	            		<li><a href="#" class="clickMe"><em><strong>Cargo Capacity:</strong></em> ${object.cargo_capacity}</a></li> 
	            		<li><a href="#" class="clickMe"><em><strong>Consumables:</strong></em> ${object.consumables}</a></li> 
	            		<li><a href="#" class="clickMe"><em><strong>Cost in Credits:</strong></em> ${object.cost_in_credits}</a></li> 
	            		<li><a object="#" class="clickMe"><em><strong>Crew:</strong></em> ${object.crew}</a></li>  
	            		<li><a href="#" class="clickMe"><em><strong>Hyperdrive Rating:</strong></em> ${object.hyperdrive_rating}</a></li> 
	            		<li><a href="#" class="clickMe"><em><strong>Length:</strong></em> ${object.length}</a></li> 
	            		<li><a href="#" class="clickMe"><em><strong>Manufacturer:</strong></em> ${object.manufacturer}</a></li>
	            		<li><a href="#" class="clickMe"><em><strong>Max Atmosphering Speed:</strong></em> ${object.max_atmosphering_speed}</a></li>
	            		<li><a href="#" class="clickMe"><em><strong>Model:</strong></em> ${object.model}</a></li>
	            		<li><a href="#" class="clickMe"><em><strong>Passengers:</strong></em> ${object.passengers}</a></li>
	            		<li><a href="#" class="clickMe"><em><strong>Pilots:</strong></em> ${object.pilots}</a></li>
	            		<li><a href="#" class="clickMe"><em><strong>Starship Class:</strong></em> ${object.starship_class}</a></li>
	            	</ul>
            	</div>`); 
            	$('.clickMe').on('click', function() {
		        	let $this = this;
		        	$('#resultsContainer').empty();
		        	$('#resultsContainer').append(`<li>${$this}</li>`);
	        	})   
		}
	});
}


starwars.getFilms = function(){
	$('#go').on('click', function() {
		//document.getElementById('searchInputs').style.display = 'none';
		const usersInput = document.getElementById("searchMe").value;
		const films = document.getElementById('films');
		$.ajax({
		  url: `https://swapi.co/api/films/?search=${usersInput}`,
		  method: 'GET',
		  dataType: 'json',
		  //once I have data, then display results with starwars.display function
		}).then(function(res) {
			console.log(res)
			starwars.displayFilms(res.results)
		});
	})
};

starwars.displayFilms = function(data) {
	console.log(this)
	$.each(data, function(index, object) {
		let $this = this;
		console.log(object)
		if(data.length === 0) {
			document.getElementById('resultsContainer').style.backgroundColor = 'white';
	        document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
		    $('#resultsContainer').append(`<p>Sorry, no results found!</p>`);
		} else {
            document.getElementById('resultsContainer').style.backgroundColor = 'white';
            document.getElementById('resultsContainer').style.border = '30px solid #f8d731'
            $('#resultsContainer').append(` <div class="queryResults"> 
            		<ul>
	            		<h2>${object.title}</h2> 
	            		<li>${object.opening_crawl}</li>
	            		<li>${object.director}</li>
	            		<li>Director: ${object.director}</li>
	            		<li>Producer: ${object.producer}</li>
	            		<li>Characters: ${object.characters}</li>
	            		<li>Planets: ${object.planets}</li>
	            		<li>Species: ${object.species}</li>
	            		<li>Starships: ${object.starships}</li>
	            		<li>Vehicles: ${object.vehicles}</li>
	            	</ul>
	            </div>`);
            $('.clickMe').on('click',  function() {
	        	let $this = this;
	        	$('#resultsContainer').empty();
	        	$('#resultsContainer').append($this);
	        }) 
		}
	});
}


$('#refresh').on('click', function() {
	$('#resultsContainer').empty();
	location.href = location.href;
})

//smooth scroll so results display on screen in a more obvious manner
$(".fa").on('click', function() {
    $('html,body').animate({
        scrollTop: $("#resultsContainer").offset().top},
        'slow');
});

$(function(){
	starwars.init();
});



//problems:
//1. people and planets both coming up even when only clicking on one radio button
//2. need to figure out how to empty container wen new option is pressed
//4, need to turn data that is in arrays (like in 'films') into actual film titles, not the url
//5. i have users input at end of url of each ajax call but dont think ive actually created usersinput var yet
