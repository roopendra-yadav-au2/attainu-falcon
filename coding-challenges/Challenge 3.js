var a = [1,2,3,4,5];
var b = [1,2,3,4,5,9];
var l = a.length;
var l1 = b.length;
var flag=0;

/*if(l1!=l)
{
  //console.log("Arrys are not equal");
  break;
}*/


for(var i=0;i<Math.max(l,l1);i++)
{
  if(a[i]==b[i])
  {
    flag=1;
  }
  else{
    flag=0;
  }
}

if(flag==1)
{
  console.log("Arrays are equal");
}
  else
  {
    console.log("Arrys are not equal");
  }
