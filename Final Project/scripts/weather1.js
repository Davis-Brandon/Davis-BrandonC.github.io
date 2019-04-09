var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=98007,us&appid=62c3675ed2bc0860bc02354541901756&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
document.getElementById('bellevuecurrentconditions').innerHTML = weatherInfo.weather[0].main;
document.getElementById('bellevuecurrentTemp').innerHTML = weatherInfo.main.temp;
document.getElementById('bellevuecurrentlow').innerHTML = weatherInfo.main.temp_min;
document.getElementById('bellevuecurrenthigh').innerHTML = weatherInfo.main.temp_max;
document.getElementById('bellevuecurrentwind').innerHTML = weatherInfo.wind.speed;

var iconcode = weatherInfo.weather[0].icon;
var icon_path="https://openweathermap.org/img/w/"+ iconcode +".png";
document.getElementById('weather_icon').src = icon_path;
 }