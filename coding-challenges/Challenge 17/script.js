function factorial(nmb)
{
var i, fact=1;
for(var i=1;i<=nmb;i++)
{
fact=fact*i;
}
return fact;
}
var facto=factorial(7);
console.log(facto);