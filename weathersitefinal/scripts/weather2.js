var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=62c3675ed2bc0860bc02354541901756&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
document.getElementById('currentconditionsfish').innerHTML = weatherInfo.weather[0].main;
document.getElementById('currentTempfish').innerHTML = weatherInfo.main.temp;
document.getElementById('currentlowfish').innerHTML = weatherInfo.main.temp_min;
document.getElementById('currenthighfish').innerHTML = weatherInfo.main.temp_max;
document.getElementById('currentwindfish').innerHTML = weatherInfo.wind.speed;

var iconcode = weatherInfo.weather[0].icon;
var icon_path="//openweathermap.org/img/w/"+ iconcode +".png";
document.getElementById('weather_icon').src = icon_path;
 }