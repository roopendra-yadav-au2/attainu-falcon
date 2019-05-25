var ch="M";
$.ajax({
    url:'https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/cities.json',
    dataType:"json",
    
    success:function(data)
{
for(var i=0;i<data.length;i++)
{
  if(data[i].name[0]==ch)
  {
    console.log(data[i].name);
  }
}
},
statusCode:{
  404:function()
  {
    alert("Page Not Found");
  }
}
});
