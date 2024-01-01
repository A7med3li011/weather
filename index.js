
// /https://api.weatherapi.com/v1/search.json?key=193352df6dd14f3e97603515233112&q=lond/    


let inp = document.querySelector("#inp")
let btn = document.querySelector("#btn")
let firstBox = document.querySelector("#firstBox")
let secBox = document.querySelector("#secBox")
let lastBox = document.querySelector("#lastBox")
async function getWeather(key = "cairo") {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    let dateNow = new Date()



    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${key}&days=3&key=193352df6dd14f3e97603515233112`);
    let result = await data.json();

    let currentWeather = result.current

    let updateHtmlbox1 = `<div class="header d-flex justify-content-between py-1 px-2 ">
    <div class="day">${dayOfWeek[dateNow.getDay()]}</div>
    <div class="date">${dateNow.getDate()} ${months[dateNow.getMonth()]}</div>
  </div>
  <div class="content">
    <div class="location">${result.location.name}</div>
    <div class="degree d-md-flex d-lg-block gap-5 d-sm-flex">
      <div class="num ">
        ${currentWeather.temp_c}
        <sup>o</sup>
        c
      </div>
      <div class="icon">
        <img src="${currentWeather.condition.icon}">
      </div>
    </div>
    <div class="custom mb-4">${currentWeather.condition.text}</div>
    <span>
      <img src="imges/icon-umberella@2x.png" alt="">
      20%
    </span>
    <span>
      <img src="imges/icon-wind@2x.png" alt="">
      18km/h
    </span>
    <span>
      <img src="imges/icon-compass@2x.png" alt="">
      East
    </span>
  </div>`

    firstBox.innerHTML = updateHtmlbox1


    let nextWeather = result.forecast.forecastday[1]

    let updateHtmlbox2 = `<div class="header">${dayOfWeek[dateNow.getDay() + 1]}</div>
  <div class="content">
    <img  class="mb-3" src="${nextWeather.day.condition.icon}">
    <div class="degree fs-4 fw-bold">${nextWeather.day.maxtemp_c}<sup>o</sup>c</div>
    <small class="" >${nextWeather.day.mintemp_c}<sup>o</sup></small>
    <div class="custom mt-3">${nextWeather.day.condition.text}</div>
  </div>`
    secBox.innerHTML = updateHtmlbox2;

    let afterNextWeather = result.forecast.forecastday[2]

    
    let updateHtmlbox3 = `<div class="header">${dayOfWeek[dateNow.getDay() + 2]}</div>
  <div class="content">
    <img  class="mb-3" src="${afterNextWeather.day.condition.icon}">
    <div class="degree fs-4 fw-bold">${afterNextWeather.day.maxtemp_c}<sup>o</sup>c</div>
    <small class="" >${afterNextWeather.day.mintemp_c}<sup>o</sup></small>
    <div class="custom mt-3">${afterNextWeather.day.condition.text}</div>
  </div>`

    lastBox.innerHTML = updateHtmlbox3;




}


getWeather()

btn.addEventListener("click",(e)=>{
    e.preventDefault()
        if(inp.value !==""){
              getWeather(inp.value)
        }else{
             getWeather()
        }
       
   
})

inp.addEventListener("keyup",(e)=>{
    console.log(e.target.value)
    getWeather(e.target.value)
})