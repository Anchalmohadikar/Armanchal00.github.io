
function renderTime(){

// Date

var mydate = new date();
var year = mydate.getyear();
        if(year < 1000){
             year +=1900;
                   }

var day = mydate.getday();
var month = mydate.getmonth();
var daym = mydate.getdate();
var dayarray = new Array("sunday","manday","tuesday","wednusday","thursday","Friday","saturday");
var montharray = new Array("january","february","march","April","may","june","july","August","september","october","november","december");
// Date End


// Time

var currentTime = new date();
var h = currentTime.getHours();
var m = currentTime.getminutes();
var s = currentTime.getSeconds();
     if(h== 24){
          h = 0;
     } else if(h > 12){
        h = h - 0;
        }
   if(h < 10){
        h = "0" + h;
          }

     if(m < 10){
        m = "0" + m;
          }

      if(s < 10){
        s = "0" + s;
          }

var myClock = document.getElementById("clock");
myClock.textcontent = "" +dayarray[day]+ "" +daym+ "" +montharray[month]+ "" +year+ " | " +h+ ":" +m+ ":" +s+;
myClock.innerText = "" +dayarray[day]+ "" +daym+ "" +montharray[month]+ "" +year+ " | " +h+ ":" +m+ ":" +s+;

  setTimeout("renderTime()",1000);
} 

  renderTime();