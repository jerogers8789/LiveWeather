var citySearch = document.getElementById('#city')

$('#search').onclick = fetch('https://api.openweathermap.org/data/2.5/weather?q={$(#city).value}&appid={a97dec38647ca1a3f70e8d72776c1f18}')
  .then(response => response.json())
  .then(data => console.log(data));