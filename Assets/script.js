
let weather ={
fetchWeather: function (cityName) {
  var apikey = 'b1136f4aae466f3754122cd9e8150449';
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName+ '&appid=' + apikey)  
  .then(function(resp) { return resp.json() }) 
  .then((data) => console.log(data));
},
},
displayWeather:function (data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText =
    temp  + "°C";
    document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " km/h";

}
function search () {
  this.fetchWeather(document.querySelector(".search-bar").value);
},


  