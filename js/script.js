var today = new Date();
var time = today.getHours();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$("#calendar").html(week[today.getDay()] + ", " + month[today.getMonth()] + " " + today.getDate());

if (time >= 6 && time < 12) {
    $("#greeting").html("Good Morning, Kimura!");
} else if (time >= 12 && time < 17) {
    $("#greeting").html("Good Afternoon, Kimura!");
} else {
    $("#greeting").html("Good Evening, Kimura!");
}