$(document).ready(function() {
  var lat;
  var lon;
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat + '&lon='+lon + '&appid='+key;

      $.ajax({
        url : url,
        dataType: "json",
      })
      .done(function(response) {
        $("#cityCountry").html(response.name + ", " + response.sys.country);
        var kelvinTemp = response.main.temp;
        var c = kelvinTemp - 273.15;
        var cel = Math.floor(c) + "&degC"
        var f = c * 9/5 + 32;
        var fah = Math.floor(f) + "&degF"
        var description = response.weather[0].description;
        var desc = description.charAt(0).toUpperCase() + description.slice(1);
        $("#celsius").html(cel);
        $("#fah").html(fah);
        $("#weather-description").html(desc);
      });
    });
  }
  });
  


