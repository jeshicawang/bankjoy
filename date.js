var now = new Date();
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
var today =  months[now.getMonth()] + " " + date;
document.write(today);
