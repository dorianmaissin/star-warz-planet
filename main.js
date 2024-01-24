const planetUrl = [
    "https://swapi.dev/api/planets/1/",
    "https://swapi.dev/api/planets/2/",
    "https://swapi.dev/api/planets/3/",
    "https://swapi.dev/api/planets/4/",
    "https://swapi.dev/api/planets/5/"
]
const planetImg = [
    "./img/tatouine3.jpeg",
    "./img/Alderaan.jpg",
    "./img/YavinIV.jpeg",
    "./img/Hoth.jpg",
    "./img/Dagobah.webp",

]
const loader = document.querySelector(".loader-container")
const background = document.querySelector(".background");
const planetTitle = document.getElementById("planet-title");
const rotationPeriode = document.getElementById("rotation-periode");
const orbitalPeriod  = document.getElementById("orbital-period");
const diameter = document.getElementById("diameter");
const climate = document.getElementById("climate");
const gravity = document.getElementById("gravity");
const terrain = document.getElementById("terrain");
const surfaceWater = document.getElementById("surface-water");
const population = document.getElementById("population");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

let planetUrlArray = []
loader.hidden = false
const promise = async () => {    
    for await (const url of planetUrl) {
        let data =  await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData)
        planetUrlArray.push(jsonData);    
        } 
}

const changeBackground = (index) => {
    background.style.backgroundImage = `url(${planetImg[index]})`
}

const textContentFunction = (variable,index,objPropretie) => {
    variable.textContent = planetUrlArray[index][objPropretie]
}

const planetUrlTextContent = (index) => {
    textContentFunction(planetTitle, index, 'name')
    textContentFunction(rotationPeriode, index, 'rotation_period');
    textContentFunction(orbitalPeriod, index, 'orbital_period');
    textContentFunction(diameter, index, 'diameter');
    textContentFunction(climate, index, 'climate');
    textContentFunction(gravity, index, 'gravity');
    textContentFunction(terrain, index , 'terrain');
    textContentFunction(terrain, index, 'surface_water');
    textContentFunction(population, index, 'population');

}

async function displayUrlPlanetUrl() {
    await promise()
    if(planetUrlArray.length === planetUrl.length ) {
        loader.hidden = true
    }
    changeBackground(0)
    planetUrlTextContent(0)

}

displayUrlPlanetUrl()

indexOfPlanetUrl = 0

arrowRight.addEventListener('click',() => {
    indexOfPlanetUrl++
    if(indexOfPlanetUrl > 4) {
        indexOfPlanetUrl = 0
        changeBackground(indexOfPlanetUrl)
        planetUrlTextContent(indexOfPlanetUrl)
    }else {
        changeBackground(indexOfPlanetUrl)
        planetUrlTextContent(indexOfPlanetUrl)
    }
})

arrowLeft.addEventListener('click', () => {
    indexOfPlanetUrl--;
    console.log(indexOfPlanetUrl)
    if (indexOfPlanetUrl < 0) {
        indexOfPlanetUrl = 4;  // Set it to the last index
    }
    changeBackground(indexOfPlanetUrl);
    planetUrlTextContent(indexOfPlanetUrl);
});

