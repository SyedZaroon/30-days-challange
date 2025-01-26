
    var countDownDate = new Date("Oct 16, 2024 00:00:00").getTime();

    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "Countdown Over!";
        return;
      }

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("hours").innerHTML = hours;
      document.getElementById("miniutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
  