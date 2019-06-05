function Time(sec)
{
  var min,hour;
hour=parseInt(sec/3600);
rem1= sec%3600;
var xyz=parseInt(rem1/60);
min=parseInt(sec/60);

rem=sec%60;
  if(sec<60)
  {
    console.log("output is :"+"00"+":"+"00"+":"+sec);
  }
  else if(sec>=60 && sec<3600 )
  {
    console.log("output is :"+"00"+":"+ min +":"+rem);
  }
  else if(sec>=3600)
  {
    console.log("output is :"+ hour +":"+ xyz +":"+rem);
  }

}
Time(37000);