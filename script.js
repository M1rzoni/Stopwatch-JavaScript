"use strict";

const vrijemeEl = document.querySelector(".sat .vrijeme");
const startBtn = document.getElementById("pocetak");
const stopBtn = document.getElementById("zaustavi");
const restartBtn = document.getElementById("restartuj");

let sekunde = 0;
let interval = null;

//liseneri za klik

startBtn.addEventListener("click", pocetak);
stopBtn.addEventListener("click", zaustavi);
restartBtn.addEventListener("click", restartuj);

//tajmer

function timer() {
  sekunde++; // sekunde izdu za +1.. 1.2.3.4.5

  //formatiranje

  let sati = Math.floor(sekunde / 3600); //sati
  let mins = Math.floor((sekunde - sati * 3600) / 60); //minute
  let seconds = sekunde % 60;

  if (seconds < 10) seconds = "0" + seconds;
  if (mins < 10) mins = "0" + mins;
  if (sati < 10) sati = "0" + sati;

  vrijemeEl.innerText = `${sati}:${mins}:${seconds}`;
}

function pocetak() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function zaustavi() {
  clearInterval(interval);
  interval = null;
}

function restartuj() {
  stop();
  sekunde = 0;
  vrijemeEl.innerText = "00:00:00";
}
