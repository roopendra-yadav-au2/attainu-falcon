function Pallindrome(str1)
{
var flag=1;
var len=str1.length;
  for(var i=0;i<len;i++)
  {
    if(str1[i]!=str1[len-1-i])
    {
              flag=0;
              break;
    }
  }
  if(flag==0)
{
  console.log("NOt Pallindrome");
  
}
else
{
  console.log("Pallindrome");
}
}
Pallindrome("mama");