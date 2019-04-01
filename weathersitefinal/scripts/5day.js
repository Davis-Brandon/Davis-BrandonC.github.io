var weatherObject1 = new XMLHttpRequest();
weatherObject1.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=62c3675ed2bc0860bc02354541901756&units=imperial',true);

weatherObject1.send();

weatherObject1.onload = function() {
    var weatherInfo = JSON.parse(weatherObject1.responseText);
    console.log(weatherInfo);
    
  document.getElementById('conditions1').innerHTML = weatherInfo.list[2].weather[0].main;
  document.getElementById('high1').innerHTML = weatherInfo.list[2].main.temp_max;
  document.getElementById('low1').innerHTML = weatherInfo.list[2].main.temp_min;
  document.getElementById('wind1').innerHTML = weatherInfo.list[2].wind.speed;
    
  document.getElementById('conditions2').innerHTML = weatherInfo.list[10].weather[0].main;
  document.getElementById('high2').innerHTML = weatherInfo.list[10].main.temp_max;
  document.getElementById('low2').innerHTML = weatherInfo.list[10].main.temp_min;
  document.getElementById('wind2').innerHTML = weatherInfo.list[10].wind.speed;
    
  document.getElementById('conditions3').innerHTML = weatherInfo.list[18].weather[0].main;
  document.getElementById('high3').innerHTML = weatherInfo.list[18].main.temp_max;
  document.getElementById('low3').innerHTML = weatherInfo.list[18].main.temp_min;
  document.getElementById('wind3').innerHTML = weatherInfo.list[18].wind.speed;
    
  document.getElementById('conditions4').innerHTML = weatherInfo.list[26].weather[0].main;
  document.getElementById('high4').innerHTML = weatherInfo.list[26].main.temp_max;
  document.getElementById('low4').innerHTML = weatherInfo.list[26].main.temp_min;
  document.getElementById('wind4').innerHTML = weatherInfo.list[26].wind.speed;
    
  document.getElementById('conditions5').innerHTML = weatherInfo.list[34].weather[0].main;
  document.getElementById('high5').innerHTML = weatherInfo.list[34].main.temp_max;
  document.getElementById('low5').innerHTML = weatherInfo.list[34].main.temp_min;
  document.getElementById('wind5').innerHTML = weatherInfo.list[34].wind.speed;
       
}


