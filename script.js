//ÉLÉMENT DE RECHERCHES
const searchinput = document.querySelector('.city-name-search')
const searchBar = document.getElementById('search-bar');


//ÉLÉMENTS D'AFFICHAGE DES INFOS FETCHÉ
const cityname = document.querySelector('.city-name')
const img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const minTempicon = document.querySelector('.mintemp-icon')
const minTemp = document.querySelector('.min-temp');
const maxTempicon = document.querySelector('.maxtemp-icon')
const maxTemp = document.querySelector('.max-temp')
const windicon = document.querySelector('.wind-icon')
const wind = document.querySelector('.wind-details');
const humidity = document.querySelector('.humidity');
const humidityicon = document.querySelector('.humidity-icon')


// DÉCLENCHEMENT AU PRESS ENTER ET FETCH
searchinput.addEventListener('keypress', function (e) {
if (e.key === 'Enter') {
      
const APIKEY = `57ce68c4b5f57e5cd6fa25c07a7a3120`;
const city = document.querySelector('#city-name-search').value;
if (city === '') return;


document.body.classList.add('new-background');
let bigcontainer = document.getElementById('big-container');
bigcontainer.classList.add("newborder");


let allweatherinfos = [];

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
.then((res) =>res.json())
.then ((data)=> { allweatherinfos = data.results;
    console.log(data)
    hidden.classList.remove('hidden')

    // GESTION DES AFFICHAGES DES ÉLÉMENTS
    temperature.innerHTML=`${(data.main.temp).toFixed(1)}°`
    description.innerHTML = (str => str.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase()))(data.weather[0].description);
    minTempicon.innerHTML=`<img src="./images/temperature-quarter-svgrepo-com (1).svg" alt="minTempicon">    `
    minTemp.innerHTML=`${data.main.temp_min}°`.toUpperCase()
    maxTempicon.innerHTML=`<img src="./images/temperature-high-svgrepo-com (1).svg" alt="maxtemp-icon">`
    maxTemp.innerHTML=`${data.main.temp_max}°`.toUpperCase()
    windicon.innerHTML=`<img src="./images/wind-svgrepo-com (1).svg" alt="windicon">`
    wind.innerHTML=` ${data.wind.speed}km/h`.toUpperCase()
    humidityicon.innerHTML=`<img src="./images/humidity-svgrepo-com.svg" alt="humidityicon">`
    humidity.innerHTML = `${data.main.humidity}%`.toUpperCase();

    //GESTION DES AFFICHAGES DE FONDS SELON LE TYPE DE MÉTÉO
    if(data.weather[0].main==='Clouds'){
        let bigcontainer = document.getElementById('big-container');
        bigcontainer.style.backgroundImage = 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTY4aHp4cnpqZW1odWYxdHhtd2Nrc2hlcHBudnNkNWZ0cDhqajc1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5HK4TiiBeLSZq/giphy.gif")'
    }
    else if (data.weather[0].main==='Clear'){
        let bigcontainer = document.getElementById('big-container');
        bigcontainer.style.backgroundImage = 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW50MmxnaGRiYXh6Ym50NnlqZnFreDVlZXB4dHRqZHJhc3l3MHhzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Styincf6K2tvfjb5Q/giphy.gif")'
    }
    else if (data.weather[0].main==='Mist'){
        let bigcontainer = document.getElementById('big-container');
        bigcontainer.style.backgroundImage = 'url("https://media1.tenor.com/m/vkkw89Nki3kAAAAC/london-fog.gif")'       
    }
    else if(data.weather[0].main==='Snow'){
        let bigcontainer = document.getElementById('big-container');
        bigcontainer.style.backgroundImage = 'url("https://media1.tenor.com/m/RcyUi6w0Pf0AAAAC/good-morning.gif")'        
    }
    else if (data.weather[0].main==='Rain'){
        let bigcontainer = document.getElementById('big-container');
        bigcontainer.style.backgroundImage = 'url("https://media1.tenor.com/m/icL9gvrOtaAAAAAC/sad-cat-looks-out-window.gif")'
    }
    else if (data.weather[0].main==='Drizzle'){
        let bigcontainer = document.getElementById('big-container');
        bigcontainer.style.backgroundImage = 'url("https://media1.tenor.com/m/bOH_7el7JJEAAAAC/rain-raining.gif")'
    }
    
    });
    }});
