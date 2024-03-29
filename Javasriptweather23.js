function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `Weather in ${cityInput}: ${temperature}°C, ${description}`;
            } else {
                weatherInfo.innerHTML = 'City not found. Please try again.';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
