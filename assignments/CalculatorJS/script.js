var buttonList=document.querySelectorAll('button');

var i;
var display=document.querySelector('#result');


for(i=0;i<buttonList.length;i++)
{
  buttonList[i].addEventListener('click',calculate);
}
function calculate()
{
  var a=parseFloat(document.getElementById('a').value);
  var b=parseFloat(document.getElementById('b').value);

   var operator=this.innerText;
   switch(operator)
   {
     case '+':display.innerText=a+b;
     break;
     case '-':display.innerText=a-b;
     break;
     case '*':display.innerText=a*b;
     break;
     case '/':display.innerText=a/b;
     break;
   }
}