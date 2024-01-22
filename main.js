const planetUrl = [
    "https://swapi.dev/api/planets/1/",
    "https://swapi.dev/api/planets/2/",
    "https://swapi.dev/api/planets/3/",
    "https://swapi.dev/api/planets/4/",
    "https://swapi.dev/api/planets/5/"
]
const rotationPeriode = document.getElementById("rotation-periode");
const orbitalPeriod  = document.getElementById("orbital-period");
const diameter = document.getElementById("diameter");
const climate = document.getElementById("climate");
const gravity = document.getElementById("gravity");
const terrain = document.getElementById("terrain");
const surfaceWater = document.getElementById("surface-water");
const population = document.getElementById("population");
const arrowLeft = document.getElementById("arrow-left")
const arrowRight = document.getElementById("arrow-right")


async function getPlanetApi(ref) {
    const url = await fetch(planetUrl)
    const data = await url.json()
    console.log(data.ref)
}


const array = [1,2,3]

let arrayValue = 0

function changeIndex() {
    rotationPeriode.textContent = array[arrayValue]
}

changeIndex()

arrowRight.addEventListener('click',() => {
    arrayValue = arrayValue +1
    console.log("hello")
})

