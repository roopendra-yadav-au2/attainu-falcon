
function fibo(n)
{
  var n1=0;
  var n2=1;
   var nextnum;
   console.log(n1);
    console.log(n2);
  for(var i=2;i<n;i++)
  {
    
   nextnum=n1+n2;
        n1 = n2;
        n2 =nextnum;

   
  console.log(nextnum);
  }
}
fibo(10);