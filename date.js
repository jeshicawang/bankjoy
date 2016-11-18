var date = new Date();
var futureDate = new Date().setDate(date.getDate()+30);
date = new Date(futureDate);
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var today =  months[date.getMonth()] + " " + date.getDate();
document.write(today);
