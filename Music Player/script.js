let range = document.querySelector("#range");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");


song.onloadedmetadata = function () {
  range.max = song.duration; 
  range.value = song.currentTime; 
};


song.ontimeupdate = function () {
  range.value = song.currentTime; 
};


function playPause() {
  if (song.paused) {
    song.play(); 
    ctrlIcon.classList.remove("fa-play"); 
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause"); 
    ctrlIcon.classList.add("fa-play");
  }
}


range.oninput = function () {
  song.currentTime = range.value;
};
