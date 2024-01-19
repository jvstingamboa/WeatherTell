const apiKey = 'bed3320aabb362038d66fb38d8b2804d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const search = document.getElementById('search');
const locationElement = document.getElementById('location');
const temp = document.getElementById('temp');
const description = document.getElementById('description')


search.addEventListener('click', () => {
    const location = locationInput.value;
    if (location){
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(respose => respose.json())
        .then(data => {
            locationElement.innerHTML = data.name;
            temp.innerHTML = `${data.main.temp}°C`;
            description.innerHTML = data.weather[0].description;
        })
        .catch(error =>{
            console.log('error fetching weather data;', error);
        });

}