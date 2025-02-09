function updateTime() {
  const now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getDay()],
    date = now.getDate(),
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][now.getMonth()],
    year = now.getFullYear();

    $("#time-label").textContent = ((hours < 10 ? "0" : "") + hours) + ":" + ((minutes < 10 ? "0" : "") + minutes);
    $("#date-label").textContent = day + " " + date + ", " + month + " " + year;
}

setInterval(updateTime, 500);