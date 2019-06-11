function Binary(nmb)
{
  var i=0,a=[];
 
 while(nmb>0)
  {
   a[i]=nmb%2;
 nmb=parseInt(nmb/2) ;
 i++
}
console.log(a.reverse().join(""));
  }
  Binary(17);
