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
  

    //   var url = "http://api.wunderground.com/api/6332d877d6cddbf5/conditions/q/CA/San_Francisco.json";
    //     // var key = "6332d877d6cddbf5"; // don't forget to hide it
    //     // var url = "http://api.wunderground.com/api/" + key + "/conditions/q/" + lat + "," + lon + ".json";
    //   $.ajax({
    //     url: url,
    //     dataType: "jsonp",
    //     success: function(response){
    //       $("#cityName").html(response.current_observation.display_location.full);
    //       $("#temp").html(response.current_observation.temperature_string);
    //       $("#weather-description").html(response.current_observation.weather);
    //     }
    //   });
    // }
    // };
//Different way of writing the success function
    //   success: function(parsed_json){
    //     var location = parsed_json['location']['city'];
    //     var temp_f = parsed_json['current_observation']['temp_f'];
    //     alert("Current temperature in " + location + " is: " + temp_f);
    // });
