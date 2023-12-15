function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let amPM = "AM";
  if (hours >= 12) {
    hours = hours - 12;
    amPM = "PM";
  }
  if (hours == 0) {
    hours = 12;
    amPM = "AM";
  }

  if (hours <= 9) {
    hours = "0" + hours;
  }

  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  document.getElementById("am-pm").innerHTML = amPM;
  document.getElementById("date").innerHTML = date.toDateString();
}

setInterval(clock, 1000);
