var citySearch = $('.city-name').attr('value');
//var citySearch = 'San Antonio'
function searchCity() {
fetch('http://api.openweathermap.org/data/2.5/weather?q='+ citySearch + '&appid=' + 'a97dec38647ca1a3f70e8d72776c1f18')
    .then(response => {return response.json()})
    .then(data => console.log(data));
};
  

$('#search').click(function (){searchCity})