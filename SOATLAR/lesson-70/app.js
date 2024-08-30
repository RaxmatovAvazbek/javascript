// BU ORQA FONNING RANGINI O'ZGARTIRISH UCHUN KODLAR

const body = document.body,
  darModeBtn = document.querySelector("#dark-mode-toggle");

darModeBtn.addEventListener("click", () => {
  if (body.classList == "dark-mode") {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
});

// BU ORQA FONNING RANGINI O'ZGARTIRISH UCHUN KODLAR

const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick() {
  const date = new Date();
  const seconds = date.getSeconds() / 60; //soniya
  const minutes = (seconds + date.getMinutes()) / 60; //minut
  const hours = (minutes + date.getHours()) / 12; // 12 soat

  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(clockTick, 1000);

function changeWatchColor() {
  let myClock = (document.querySelector(".clock").style.backroundColor =
    "#F138D8");
}
setInterval(changeWatchColor, 5000);

let digitalClock = document.querySelector(".digital-clock");

function digiClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  if (hours > 12) {
    session = "PM";
    hours = hours - 12;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  digitalClock.innerHTML =
    hours + " : " + minutes + " : " + seconds + " : " + session;
}
setInterval(digiClock, 1000);

let colors = [
  "#8c0606",
  "#213702",
  "#04562D",
  "#10DEDB",
  "#083E66",
  "#3254F4",
  "#040F43",
  "#7B45EB",
  "#0000",
  "#29096D",
  "#BD0FB7",
  "#FC0920",
];

let index = 0;

function changeBgColor() {
  digitalClock.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeBgColor, 5000);
