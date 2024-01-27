// HERO BANNER JS 

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
const residentBox =document.getElementById('resident');
const loaderTwo = document.getElementById('loader-2')
let planetUrlArray = [];
let residentArray = [];


const promise = async () => {    
    for (const url of planetUrl) {
        let data =  await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData)
        planetUrlArray.push(jsonData);    
        } 
};

const planetResidentUrl = async () => {
    loaderTwo.hidden = false
    let planetResidentUrl = await planetUrlArray[indexOfPlanetUrl].residents;
    residentArray = [];
    const resident = document.querySelectorAll('.residentCard');
    const residentTitle = document.getElementById('residentTitle')
    for (const items of resident) {
        items.remove()
    } 
    if(planetUrlArray[indexOfPlanetUrl].residents.length === 0) {
        residentTitle.textContent = "No resident for this planet"
    }
    else {
    residentTitle.textContent = "resident of the planet"
    };
    for (const url of planetResidentUrl) {
        let data = await fetch(url);
        let jsonData = await data.json()
        console.log(jsonData)
        residentArray.push(jsonData)
    }
    if(planetUrlArray[indexOfPlanetUrl].residents.length === residentArray.length) {
        loaderTwo.hidden = true;
    }
    for (let i = 0; i < residentArray.length; i++){
        residentCard(i)
    };    
}

const changeBackground = (index) => {
    background.style.backgroundImage = `url(${planetImg[index]})`
};

const textContentFunction = (variable,index,objPropretie) => {
    variable.textContent = planetUrlArray[index][objPropretie]
};

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

const createCardAttribute = (attribute, index, objPropretie) => {
    let h3 = document.createElement("h3");
    h3.textContent = attribute;
    let span = document.createElement("span");
    span.setAttribute("class", "resident-attribute")
    span.textContent = residentArray[index][objPropretie];
    h3.appendChild(span);
    return h3;
}

const residentCard = (index) => {
    let attribute = []
    let residentContainer = document.createElement("div");
    residentContainer.setAttribute("class", "residentCard");
    let name = createCardAttribute("name:", index, 'name');
    attribute.push(name);
    let height = createCardAttribute("height:", index, 'height');
    attribute.push(height);
    let mass = createCardAttribute('mass:', index, 'mass')
    attribute.push(mass);
    let hairColor = createCardAttribute('hair color:', index, 'hair_color');
    attribute.push(hairColor);
    let skinColor = createCardAttribute('skin color:', index, 'skin_color');
    attribute.push(skinColor);
    let gender = createCardAttribute('gender:', index, 'gender');
    attribute.push(gender);
    attribute.forEach(items => {
        residentContainer.appendChild(items)
    });
    residentBox.appendChild(residentContainer)
}

async function displayUrlPlanetUrl() {
    await promise();  
    if (planetUrlArray.length === planetUrl.length ) {
        loader.hidden = true;
    }
    changeBackground(0);
    planetUrlTextContent(0);
    planetResidentUrl()
    
};

displayUrlPlanetUrl();

indexOfPlanetUrl = 0;

arrowRight.addEventListener('click',() => {
    indexOfPlanetUrl++
    if(indexOfPlanetUrl > 4) {
        indexOfPlanetUrl = 0
        changeBackground(indexOfPlanetUrl);
        planetUrlTextContent(indexOfPlanetUrl);
        planetResidentUrl(indexOfPlanetUrl);
    }else {
        changeBackground(indexOfPlanetUrl)
        planetUrlTextContent(indexOfPlanetUrl);
        planetResidentUrl(indexOfPlanetUrl);
    }
})

arrowLeft.addEventListener('click', () => {
    indexOfPlanetUrl--;
  
    if (indexOfPlanetUrl < 0) {
        indexOfPlanetUrl = 4;  // Set it to the last index
    }
      console.log(indexOfPlanetUrl)
    changeBackground(indexOfPlanetUrl);
    planetUrlTextContent(indexOfPlanetUrl);
    planetResidentUrl(indexOfPlanetUrl);
});



