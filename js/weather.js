$(document).ready(function() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    var lat=pos.coords.latitude;
    var lon=pos.coords.longitude;
    var site = "https://api.wunderground.com/api/";
    var api = "d09806e16c9d36eb"
    var con = "/conditions/q/"
    var format = ".json"
    var url = site + api + con + lat + "," + lon + format;
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(result) {
        console.log(result);
        $(".location").append("<p class='name'>"+result.current_observation.display_location.full+"</p>");
        var icon_url=result.current_observation.icon_url;
        console.log(icon_url);
        $(".icon").append("<img src='"+icon_url+"'>");
        $(".description").append(result.current_observation.weather);
        $(".temp").append("<p>"+result.current_observation.temperature_string+ "</p>");
        var humidity = result.current_observation.relative_humidity;
        $(".humidity").append("<p>"+humidity+"</p>");
        
        // Background
        if(icon_url === "http://icons.wxug.com/i/c/k/clear.gif" || icon_url==="http://icons.wxug.com/i/c/k/sunny.gif"|| icon_url==="http://icons.wxug.com/i/c/k/mostlysunny.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/sunnyDay.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/cloudy.gif" || icon_url === "http://icons.wxug.com/i/c/k/mostlycloudy.gif" || icon_url === "http://icons.wxug.com/i/c/k/partlycloudy.gif" || icon_url === "http://icons.wxug.com/i/c/k/partlysunny.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/cloudyDay.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/rain.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/rainyDay.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/thunderstorm.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/thunderstorm.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/snow.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/snowDay.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/hazy.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/foggyDay.jpg" + '")');         
          }
        
        if(icon_url === "http://icons.wxug.com/i/c/k/nt_clear.gif" || icon_url==="http://icons.wxug.com/i/c/k/nt_sunny.gif"|| icon_url==="http://icons.wxug.com/i/c/k/nt_mostlysunny.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/clearNight.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/nt_cloudy.gif" || icon_url === "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif" || icon_url === "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif" || icon_url === "http://icons.wxug.com/i/c/k/nt_partlysunny.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/cloudyNight.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/nt_rain.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/rainyNight.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/nt_thunderstorm.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/thunderstorm.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/nt_snow.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/snowNight.jpg" + '")');
          }else if(icon_url === "http://icons.wxug.com/i/c/k/nt_hazy.gif"){
            $('body').css('background-image', 'url("' + "../img/weather/foggyNight.jpg" + '")');
          }
         
      }
    });
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  navigator.geolocation.getCurrentPosition(success, error, options);
});