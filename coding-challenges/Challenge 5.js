var a=8;
function starprint(x)
{
for(var i=0;i<x;i++)
{
  for(var j=0;j<=i;j++)
{
document.write("*");
}
document.write("<br>");
}

for(var i=1;i<x;i++)
{
  for(var j=x-1;j>=i;j--)
{
  document.write("*");
}
document.write("<br>");

}
}
starprint(a);