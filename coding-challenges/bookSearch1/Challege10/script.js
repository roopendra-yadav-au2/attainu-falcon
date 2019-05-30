var a="Karolin000";
var b="kathrin";
var i;
var count =0;
for(i=0;i<(Math.max(a.length,b.length));i++)
{
if(a[i]!=b[i])
{
  count++;
}
}
console.log(count);