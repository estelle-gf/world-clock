function updateTime() {
let londonElement=document.querySelector("#london");
let londonDateElement= londonElement.querySelector(".date");    
let londonTimeElement= londonElement.querySelector(".time");
let londonTime =moment().tz("Europe/London");
londonDateElement.innerHTML= moment().format("MMMM do YYYY");
londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");

let parisElement=document.querySelector("#paris");
let parisDateElement= parisElement.querySelector(".date");    
let parisTimeElement= parisElement.querySelector(".time");
let parisTime =moment().tz("Europe/Paris");
parisDateElement.innerHTML= moment().format("MMMM do YYYY");
parisTimeElement.innerHTML=parisTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = city.options[city.selectedIndex].text;
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =`
    <div class="city">
     <div>
      <h2>${cityName}</h2>
      
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
     <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
`}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
