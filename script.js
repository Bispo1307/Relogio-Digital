const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

function dateToday() {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    let formattedHours = hours < 10 ? "0" + hours : hours
    let formattedMinutes = minutes < 10 ? "0" + minutes : String(minutes)
    let formattedSeconds = seconds < 10 ? "0" + seconds : String(seconds)

    hoursElement.innerHTML = formattedHours
    minutesElement.innerHTML = formattedMinutes
    secondsElement.innerHTML = formattedSeconds
}

setInterval(dateToday, 1000)
dateToday()