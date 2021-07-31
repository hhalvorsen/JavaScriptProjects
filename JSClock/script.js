var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // Hent id til clock-element
    const clock = document.getElementById('clock');

    // Legg inn tiden
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Legger på 0 hvis ikke to siffer
    if (hours < 10)
    {
        hours = "0" + hours;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    clock.innerText = hours + ":" + minutes + ":" + seconds;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
    var time = new Date().getHours();
    var messageText;
    var image = "Ronja Generell.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partytime)
    {
        messageText = "Let's party";
        image = "Ronja Party.jpg";
    }
    else if (time == wakeuptime)
    {
        messageText = "Wake up!";
        image = "Ronja Wake Up.jpg";
    }
    else if (time == lunchtime)
    {
        messageText = "Hike time";
        image = "Ronja Tur.jpg";
    }
    else if (time == naptime)
    {
        messageText = "Time for a nap";
        image = "Ronja Sleep.jpg";
    }
    else if (time < noon)
    {
        messageText = "Good morning"
    }
    else if (time >= evening)
    {
        messageText = "Good evening"
    }
    else
    {
        messageText = "Good afternoon"
    }

    timeEventJS.innerText = messageText;
    lolcatImageJS.src = image;
    console.log(messageText)

    showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);