function formatDate(date) {
    let hours = date.getHours();
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function displayWeatherCondition(response) {
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.name;
  }
  
  function searchCity(city) {
    let apiKey = "258c033354102e13c47d9106aea3e3f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-search").value;
    searchCity(city);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(search);
  }
  
  function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let weather = response.data.weather[0].description;
  
    let degrees = document.querySelector("#current-temperature");
    degrees.innerHTML = `${temperature}°C`;
    let location = document.querySelector("#current-location");
    location.innerHTML = `${city}`;
  }
  
  //function convertToFahrenheit(event) {
  // event.preventDefault();
  //let temperatureElement = document.querySelector("#temperature");
  //temperatureElement.innerHTML = 66;
  //}
  //let fahrenheitLink = document.querySelector("#fahrenheit-link");
  //fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
  }
  //let celsiusLink = document.querySelector("#celsius-link");
  //celsiusLink.addEventListener("click", convertToCelsius);
  
  function currentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "258c033354102e13c47d9106aea3e3f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
    let units = "metrics";
  }
  let dateElement = document.querySelector("#current-time");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  function handleSubmitCity(event) {
    event.preventDefault();
    let city = document.querySelector("#city-search").value;
    searchCity(city);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  //let currentLocation = document.querySelector("#current-location");
  //location.addEventListener(getCurrentLocation);
  
  searchCity("Kyiv");
  
