$(document).ready(function() {
  $("#submitLocation").click(function(){

    var location = $("#location").val();

    if(location != ''){
      $.ajax({

        url:'http://api.openweathermap.org/data/2.5/weather?q=' + location + "&units=metric"
         + "&APPID=d71c0afbac91d440c41cf58a585d7ece",
        type:"GET",
        dataType:"jsonp",
        success: function(data) {
          var widget =show(data);

          $("#show").html(widget);

          $("#location").val('');
        }

      });
    } else {
      alert("Field can't be empty.");
    }
  });
});

function show(data) {
  return    "<h2 style='font-size:40px;font-weight:bold;'>Current Weather for "+data.name+","+data.sys.country+"</h2>"+
            "<h3><strong>Weather</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+ data.weather[0].main +"</h3>" +
            "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>"+
            "<h3><strong>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>"+
            "<h3><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h3>"+
            "<h3><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>"+
            "<h3><strong>Min. Temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>"+
            "<h3><strong>Max. Temperature</strong>: "+ data.main.temp_max +"&deg;C</h3>"+
            "<h3><strong>Wind Speed</strong>: "+ data.wind.speed +" m/s</h3>"+
            "<h3><strong>Wind Direction</strong>: "+ data.wind.deg +"&deg;</h3>";

}
