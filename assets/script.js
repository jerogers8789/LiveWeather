
// var citySearch = $('#city').val()

// //var citySearch = 'San Antonio'
// function searchCity() {
// fetch('http://api.openweathermap.org/data/2.5/weather?q='+ citySearch + '&appid=' + 'a97dec38647ca1a3f70e8d72776c1f18')
//     .then(response => {return response.json()})
//     .then(data => console.log(data));
// };
  

// $('#search').click(console.log(searchCity()))



//$('#search').on('click',function(){console.log(this button clicked)})
function weatherTrack (cityName)  {
  var key = 'a97dec38647ca1a3f70e8d72776c1f18';
  //var citySearch = $('#city').val()
  var cityName = 'San Antonio'
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    pullWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
  function pullWeather( q ) {
	var celcius = Math.round(parseFloat(q.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(q.main.temp)-273.15)*1.8)+32); 
	
	$('#description').innerHTML = q.weather[0].description;
	$('#temp').innerHTML = celcius + '&deg;';
    $('#location').innerHTML = q.name;
    
    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
}}



window.onload = function() {
  weatherTrack( 'San Antonio' );
}

// function drawWeather( q ) {
// 	var celcius = Math.round(parseFloat(q.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(q.main.temp)-273.15)*1.8)+32); 
	
// 	$('#description').innerHTML = q.weather[0].description;
// 	$('#temp').innerHTML = celcius + '&deg;';
//     $('#location').innerHTML = q.name;

//     if( description.indexOf('rain') > 0 ) {
//         document.body.className = 'rainy';
//     } else if( description.indexOf('cloud') > 0 ) {
//         document.body.className = 'cloudy';
//     } else if( description.indexOf('sunny') > 0 ) {
//         document.body.className = 'sunny';
//     }
// }