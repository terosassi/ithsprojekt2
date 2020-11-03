class People
{
  constructor(name, height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld) {
    this.name = name;
    this.height = height;
	this.mass = mass;
	this.hair_color = hair_color;
	this.skin_color = skin_color;
	this.eye_color = eye_color;
	this.birth_year = birth_year;
	this.gender = gender;
	this.homeworld = homeworld;
  }
}

class Data {
  constructor(next, peoples =[People],previous,count) {
    this.next = next;
    this.peoples = peoples;
	this.previous = previous;
	this.count = count;
  }
}

class Planet {
  constructor(name, rotation_period,orbital_period,diameter,climate, gravity, terrain) {
    this.name = name;
    this.rotation_period = rotation_period;
	this.orbital_period = orbital_period;
	this.diameter = diameter;
	this.climate = climate;
    this.gravity = gravity;
	this.terrain = terrain;
  }
}

var page = 1;
let dataa = Data;
var loaderCharacterDetails; 
var loaderCharacter; 
var loaderCharacterPlanet; 

var characterDetails; 
var character; 
var characterPlanet; 

loaderCharacter = document.getElementById('loader');
loaderCharacterDetails = document.getElementById('loader1');
loaderCharacterPlanet = document.getElementById('loader2');

characterDetails = document.getElementById('DetailsDiv');
character = document.getElementById('charactersDiv');
characterPlanet = document.getElementById('PlanetDiv');

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextBtnClick);

let tableTr = document.querySelector('table tr');

let previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', previousBtnClick);

function nextBtnClick()
{
	if(dataa.next != null && page<Math.ceil( dataa.count/10 ))
	{
		page = page + 1;
		getPeopleData(page);
	}
}

function previousBtnClick()
{
	if(dataa.previous != null && page!=1)
	{
		page = page - 1;
		getPeopleData(page);
	}
}


function tableTrClick()
{
	loaderCharacterDetails.style.display = "block";
	characterDetails.style.display = "none";
	let index = this.id;
	setTimeout(function() {
	 loadCharacterInformation(index);
	}, 500);
	getPlanetInformation(index);
}
	

function loadCharacterInformation(index)
{

	let name = document.getElementById("character_name");
	let Details = document.getElementById("details");
	name.innerHTML = dataa.peoples[index].name;
	let detailsTxt = "Height: "+ dataa.peoples[index].height + "<br>" + 
	"Mass: "+ dataa.peoples[index].mass + "<br>" + 
	"Hair Color: "+ dataa.peoples[index].hair_color + "<br>" + 
	"Skin Color: "+ dataa.peoples[index].skin_color + "<br>" + 
	"Eye Color: "+ dataa.peoples[index].eye_color + "<br>" + 
	"Birthyear: "+ dataa.peoples[index].birth_year + "<br>" + 
	"Gender: "+ dataa.peoples[index].gender;
	Details.innerHTML = detailsTxt;
	
	loaderCharacterDetails.style.display = "none";
	characterDetails.style.display = "block";
}

function loadPlanetInformation(planet)
{
	let name = document.getElementById("planet_name");
	let Details = document.getElementById("planet_details");
	name.innerHTML = planet.name;
	let detailsTxt = "Rotation Period: "+ planet.rotation_period + "<br>" + 
	"Orbital Period: "+ planet.orbital_period + "<br>" + 
	"Diameter: "+ planet.diameter + "<br>" + 
	"Climate: "+ planet.climate + "<br>" + 
	"Gravity: "+ planet.gravity + "<br>" + 
	"Terrain: "+ planet.terrain;
	Details.innerHTML = detailsTxt;
	
	loaderCharacterPlanet.style.display = "none";
	characterPlanet.style.display = "block";
}

function getPlanetInformation(index)
{
	loaderCharacterPlanet.style.display = "block";
	characterPlanet.style.display = "none";
	let link = dataa.peoples[index].homeworld;
	if(!link.includes("https")){
		link = link.replace("http", "https");
	}
	
	fetch(link)
	.then(response => response.json())
	.then(data =>
		{
			let planet = new Planet(data['name'],data['rotation_period'],data['orbital_period'],data['diameter'],data['climate'],data['gravity'],data['terrain']);
			 loadPlanetInformation(planet);
		});
}

function getPeopleData(page)
{
	loaderCharacter.style.display = "block";
	character.style.display = "none";
	
	fetch("https://swapi.dev/api/people/?page="+page)
	.then(response => response.json())
	.then(data =>
		{
			let peoples = [People];
			peoples = []
			for (i = 0; i < data['results'].length; i++) {
				let people = new People(data['results'][i].name,data['results'][i].height,data['results'][i].mass,data['results'][i].hair_color,data['results'][i].skin_color,
				data['results'][i].eye_color,data['results'][i].birth_year,data['results'][i].gender,data['results'][i].homeworld);
				peoples.push(people);
			}
			dataa = new Data(data['next'],peoples,data['previous'],data['count']);
			manageData();
		});
	
}

function manageData()
{
	var table_data = document.getElementById('table_data');
	table_data.innerHTML = "";
	for (i = 0; i < dataa.peoples.length; i++) {
		let row = '<tr id= "'+i+'" class="table_row"><td>'+dataa.peoples[i].name+'</td></tr>'
		let html = table_data.innerHTML + row;
		table_data.innerHTML = html;
	}
	let count = dataa.count/10;
	count = Math.ceil( count );
	document.getElementById('padination_text').textContent = page + " / " + count;
	
	loaderCharacter.style.display = "none";
	character.style.display = "block";
	loaderCharacterDetails.style.display = "none";
	loaderCharacterPlanet.style.display = "none";
	
	var row = table_data.rows;
	for (var i = 0; i < row.length; i++) {
        row[i].addEventListener('click', tableTrClick);
    }
	
}

getPeopleData(page);