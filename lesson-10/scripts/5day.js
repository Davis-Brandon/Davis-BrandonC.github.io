var weatherObject1 = new XMLHttpRequest();
weatherObject1.open('GET','//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=62c3675ed2bc0860bc02354541901756&units=imperial',true);

weatherObject1.send();

weatherObject1.onload = function() {
    var weatherInfo = JSON.parse(weatherObject1.responseText);
    console.log(weatherInfo);
    
  document.getElementById('conditions1').innerHTML = weatherInfo.list[6].weather[0].main;
  document.getElementById('high1').innerHTML = weatherInfo.list[6].main.temp_max;
  document.getElementById('low1').innerHTML = weatherInfo.list[6].main.temp_min;
  document.getElementById('wind1').innerHTML = weatherInfo.list[6].wind.speed;
    
  document.getElementById('conditions2').innerHTML = weatherInfo.list[14].weather[0].main;
  document.getElementById('high2').innerHTML = weatherInfo.list[14].main.temp_max;
  document.getElementById('low2').innerHTML = weatherInfo.list[14].main.temp_min;
  document.getElementById('wind2').innerHTML = weatherInfo.list[14].wind.speed;
    
  document.getElementById('conditions3').innerHTML = weatherInfo.list[22].weather[0].main;
  document.getElementById('high3').innerHTML = weatherInfo.list[22].main.temp_max;
  document.getElementById('low3').innerHTML = weatherInfo.list[22].main.temp_min;
  document.getElementById('wind3').innerHTML = weatherInfo.list[22].wind.speed;
    
  document.getElementById('conditions4').innerHTML = weatherInfo.list[30].weather[0].main;
  document.getElementById('high4').innerHTML = weatherInfo.list[30].main.temp_max;
  document.getElementById('low4').innerHTML = weatherInfo.list[30].main.temp_min;
  document.getElementById('wind4').innerHTML = weatherInfo.list[30].wind.speed;
    
  document.getElementById('conditions5').innerHTML = weatherInfo.list[38].weather[0].main;
  document.getElementById('high5').innerHTML = weatherInfo.list[38].main.temp_max;
  document.getElementById('low5').innerHTML = weatherInfo.list[38].main.temp_min;
  document.getElementById('wind5').innerHTML = weatherInfo.list[38].wind.speed;
       
}