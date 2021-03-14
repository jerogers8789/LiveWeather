
var citySearch = $('#city').val()

//var citySearch = 'San Antonio'
function searchCity() {
fetch('http://api.openweathermap.org/data/2.5/weather?q='+ citySearch + '&appid=' + 'a97dec38647ca1a3f70e8d72776c1f18')
    .then(response => {return response.json()})
    .then(data => console.log(data));
};
  

$('#search').click(console.log(searchCity()))



//$('#search').on('click',function(){console.log(this button clicked)})