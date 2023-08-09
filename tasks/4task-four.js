
const locate = document.getElementById('inputText')
const weatherData = document.getElementById('weatherData')

const btn = document.getElementById('submit')
btn.addEventListener('click' ,weatherD =>{
  locate.value=""
})
locate.addEventListener('keypress', event =>{
  if(event.key === 'Enter'){
    weatherD()
    locate.value = ""
  }
})

const apiKey = '2adc4cd2679f4f0edbc92e8b08f5ecd6';

async function weatherD (){
  try{
    const locationP = locate.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationP}&APPID=${apiKey}`;
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const temperature = data.main.temp;
      const cityName = data.name
      const country = data.sys.country
      const description = data.weather[0].description
  
      weatherData.innerHTML = `<h2>CITY: ${cityName}</h2><h6>COUNTRY CODE: ${country}</h6><p>TEMPERATURE: ${temperature} °C</p>
        <p>Description: ${description}</p>`
      
    }
    else{
      alert('enter correct location')
    }

  }
  catch(error){
    weatherData.innerText = alert('error')
   
  }
}


