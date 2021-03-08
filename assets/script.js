var citySearch = $('#city')

function searchCity() {
fetch('https://api.openweathermap.org/data/2.5/weather?q'+ citySearch + '&appid' + a97dec38647ca1a3f70e8d72776c1f18)
};
  

$('#search').onclick = searchCity