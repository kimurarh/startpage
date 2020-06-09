var today = new Date()
var time = today.getHours()

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

document.getElementById("calendar").innerHTML = week[today.getDay()] + ", " + month[today.getMonth()] + " " + today.getDate()

if (time >= 6 && time < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning, Kimura"
} else if (time >= 12 && time < 17) {
    document.getElementById("greeting").innerHTML = "Good Afternoon, Kimura"
} else {
    document.getElementById("greeting").innerHTML = "Good Evening, Kimura"
}