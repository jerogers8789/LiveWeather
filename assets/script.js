
// var citySearch = $('#city').val()

// //var citySearch = 'San Antonio'
// function searchCity() {
// fetch('http://api.openweathermap.org/data/2.5/weather?q='+ citySearch + '&appid=' + 'a97dec38647ca1a3f70e8d72776c1f18')
//     .then(response => {return response.json()})
//     .then(data => console.log(data));
// };
  

// $('#search').click(console.log(searchCity()))



var cityName = 'San Antonio'
function weatherTrack (cityName)  {
  var key = 'a97dec38647ca1a3f70e8d72776c1f18';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
  .then( response => { return response.json() }) 
  .then((data => console.log(data)))
  function pullWeather( q ) {
    var fahrenheit = Math.round(((parseFloat(q.main.temp)-273.15)*1.8)+32); 
      
    $('#description').innerHTML = q.weather[0].description;
    $('#temp').innerHTML = fahrenheit + '&deg;';
    $('#location').innerHTML = q.cityName;
  }
}
// function pullWeather( q ) {
//   var fahrenheit = Math.round(((parseFloat(q.main.temp)-273.15)*1.8)+32); 
    
//   $('#description').innerHTML = q.weather[0].description;
//   $('#temp').innerHTML = fahrenheit + '&deg;';
//   $('#location').innerHTML = q.name;
// }
window.onload = function() {
  console.log(weatherTrack( cityName ));
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