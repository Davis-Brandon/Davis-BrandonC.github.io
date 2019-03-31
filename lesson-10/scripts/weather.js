var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=62c3675ed2bc0860bc02354541901756&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
document.getElementById('currentconditions').innerHTML = weatherInfo.weather[0].main;
document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
document.getElementById('currentlow').innerHTML = weatherInfo.main.temp_min;
document.getElementById('currenthigh').innerHTML = weatherInfo.main.temp_max;
document.getElementById('currentwind').innerHTML = weatherInfo.wind.speed;

var iconcode = weatherInfo.weather[0].icon;
var icon_path="http://openweathermap.org/img/w/"+ iconcode +".png";
document.getElementById('weather_icon').src = icon_path;
}
