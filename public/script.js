//planets
var sun = document.getElementById("sun");
var mercury = document.getElementById("mercury");
var venus = document.getElementById("venus");
var earth = document.getElementById("earth");
var mars = document.getElementById("mars");
var jupiter = document.getElementById("jupiter");
var saturn = document.getElementById("saturn");
var uranus = document.getElementById("uranus");
var neptune = document.getElementById("neptune");

//close button
var close = document.getElementsByClassName("close")[0];

//modal
var modal = document.getElementsByClassName("modal")[0];
//planet title
var title = document.getElementById("planetName");
//planet image
var img = document.getElementById("planetImg");
//planet desc
var desc = document.getElementById("planetDesc");

sun.onclick = function() {
    modal.style.display = "block";
    title.textContent = "The Sun";
    desc.innerHTML = "Type of Object: A Star<br>Distance to Earth: 92.96 million miles<br>Orbital Period (around the center of the Milky Way): 225 million Earth years<br>Radius: 432,690 miles<br>Gravity: 274 m/s²<br>Mass: 1.989 x 10^30 kg<br>Temperature: 9,980°F";
}

mercury.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Mercury";
    //img.src = "";
    desc.innerHTML = "Type of Planet: Terrestrial<br>Distance from the Sun: 39.86 million miles<br>Orbital Period: 88 days<br>Radius: 1,516 miles<br>Surface Area: 28.88 million square miles<br>Length of a day: 59 days 0 hrs 0 min<br>Gravity: 3.7 m/s²<br>Mass: 3.285 x 10^23 kg<br>Temperature Range: -290°F to 800°F";
}

venus.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Venus";
    desc.innerHTML = "Type of Planet: Terrestrial<br>Distance from the Sun: 67.24 million miles<br>Orbital Period: 225 days<br>Radius: 3,760.4 miles<br>Surface Area: 177.7 million square miles<br>Length of a day: 243 days 0 hrs 0 min<br>Gravity: 8.87 m/s²<br>Mass: 4.867 x 10^24 kg<br>Temperature Range: 820°F to 900°F";
}

earth.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Earth";
    desc.innerHTML = "Type of Planet: Terrestrial<br>Distance from the Sun: 93.23 million miles<br>Orbital Period: 365 days<br>Radius: 3,958 miles<br>Surface Area: 196.9 million square miles<br>Length of a day: 1 day 0 hrs 0 min<br>Gravity: 9.8 m/s²<br>Mass: 5.972 x 10^24 kg<br>Temperature Range: -50°F to 120°F";
}

mars.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Mars";
    desc.innerHTML = "Type of Planet: Terrestrial<br>Distance from the Sun: 141.60 million miles<br>Orbital Period: 687 days<br>Radius: 2,106 miles<br>Surface Area: 55.74 million square miles<br>Length of a day: 1 day 0 hrs 37 mins<br>Gravity: 3.7 m/s²<br>Mass: 6.390 x 10^23 kg<br>Temperature Range: -225°F to 70°F";
}

jupiter.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Jupiter";
    desc.innerHTML = "Type of Planet: Gas Giant<br>Distance from the Sun: 438.8 million miles<br>Orbital Period: 4,333 days<br>Radius: 43,441 miles<br>Surface Area: 23.71 billion square miles<br>Length of a day: 0 days 9 hrs 56 mins<br>Gravity: 24.79 m/s²<br>Mass: 1.898 x 10^27 kg<br>Temperature Range: -260°F to -150°F";
}

saturn.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Saturn";
    desc.innerHTML = "Type of Planet: Gas Giant<br>Distance from the Sun: 890.80 million miles<br>Orbital Period: 10,755 days<br>Radius: 36,184 miles<br>Surface Area: 16.49 billion square miles<br>Length of a day: 10 days 0 hrs 34 mins<br>Gravity: 10.44 m/s²<br>Mass: 5.683 x 10^26 kg<br>Temperature Range: -280°F to 134°F";
}

uranus.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Uranus";
    desc.innerHTML = "Type of Planet: Ice Giant<br>Distance from the Sun: 1.784 billion miles<br>Orbital Period: 30,687 days<br>Radius: 15,759 miles<br>Surface Area: 3.121 billion square miles<br>Length of a day: 0 days 17 hrs 41 mins<br>Gravity: 8.87 m/s²<br>Mass: 8.681 x 10^25 kg<br>Temperature Range: -370°F to 116°F";
}

neptune.onclick = function() {
    modal.style.display = "block";
    title.textContent = "Neptune";
    desc.innerHTML = "Type of Planet: Ice Giant<br>Distance from the Sun: 2.793 billion miles<br>Orbital Period: 60,195 days<br>Radius: 15,299 miles<br>Surface Area: 2.941 billion square miles<br>Length of a day: 0 days 16 hrs 6 mins<br>Gravity: 11.15 m/s²<br>Mass: 1.024 x 10^26 kg<br>Temperature Range: -360°F to -328°F";
}

close.onclick = function() {
    modal.style.display = "none";
    title.textContent = "";
    desc.textContent = "";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
        title.textContent = "";
        desc.textContent = "";
    }
}