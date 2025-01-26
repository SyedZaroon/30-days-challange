const stop = document.querySelector(".fa-stop");
const play = document.querySelector(".fa-play");
const reset = document.querySelector(".fa-arrows-rotate");
const displaytime = document.querySelector("#timer");

let [seconds, minutes, hours] = [0, 0, 0];
let stoptime; 

function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

play.addEventListener("click", () => {
    
    play.style.pointerEvents = "none";
  stoptime = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;

      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
    }

    
    displaytime.innerHTML = `${formatTime(hours)}:${formatTime(
      minutes
    )}:${formatTime(seconds)}`;
  }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(stoptime);
    play.style.pointerEvents = "auto";
});

reset.addEventListener("click", () => {
  clearInterval(stoptime); 
  [seconds, minutes, hours] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00"; 
});
