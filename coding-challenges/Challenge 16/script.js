function extractQuery(url)
{
var i, keys=[],values=[];
var startIndex=url.indexOf('?');

if(startIndex == -1)
{
   console.log("Missing Query!");
   return;
}
for(i=startIndex;i<url.length;i++)
{
  if(url.charAt(i)=='=')
  {
keys.push(url.substring(startIndex+1,i));
startIndex=i;
  }
  else if(url.charAt(i)=='&' || i == url.length-1)
  {
values.push(url.substring(startIndex+1,i));
startIndex=i;
}
}
values[values.length-1]=url.charAt(url.length-1);

var object={};
for(i=0;i<keys.length;i++)
{
  object[keys[i]]=values[i];
}
console.log(object);
}
extractQuery("http://localhost:3000/add");