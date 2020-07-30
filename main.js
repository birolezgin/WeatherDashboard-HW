// Things to accomplish:
$(document).ready(function(){
    $("#submit").click(function(){
    //got an API Key from openweathermap API
    const key = '55a9a2fa8b4b56e5c718c504b82e3c5c';
  
    var city= $("#city").val();
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }`;
    
    //console.log(url);
    //ajax call for the desired data
    $.ajax({
      url: url,
      method: 'GET'
    }).then(function(response) {
      //console.log(url);
      //console.log(response);
      //return the html string of all the desired data
      $('.city').html(`<h1>${ response.name } Weather Data</h1>`);
      $('.wind').html(`<p>Wind speed: ${ response.wind.speed } m/sec </p>`);
      $('.humidity').html(`<p>Humidity: ${ response.main.humidity } % </p>`);
      $('.temp').html(`<p>Current temp: ${ ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) } F </p>`);
      
      
      var lat=response.coord.lat;
      var lon=response.coord.lon;
    
      //console.log(lat);
    
    url = `https://api.openweathermap.org/data/2.5/uvi?appid=${key}&lat=${lat}&lon=${lon}`;

    $.ajax({
      url: url,
      method: 'GET'
    }).then(function(response) {
      //console.log(url);
      //console.log(response);
      $('.uvIndex').html(`<p>UV index: ${ response.value }</p>`)

      //weather forecast here
  
    
         });
       });
     });
   });

   

