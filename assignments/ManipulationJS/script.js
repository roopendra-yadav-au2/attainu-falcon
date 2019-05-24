function printSquares()
{
  var i;
  var table = document.createElement('table');
  document.querySelector('body').appendChild(table);
  table.style.border="1px solid darkblue";


  for(i=0;i<=10;i++)
  {
    var row=document.createElement('tr');
    table.appendChild(row);
    var number,square;

    if(i==0)
    {
      number = document.createElement('th');
      number.style.backgroundColor="skyblue";
      number.style.color="white";
     number.textContent="Numbers";
     
    square=document.createElement('th');
      square.style.backgroundColor="skyblue";
      square.style.color="white";
     square.textContent="Squares";
    }
else
    {
       number = document.createElement('td');
      number.style.backgroundColor= (i%2==0) ? "skyblue" :"whitesmoke";
      number.style.width="100px";
      number.style.textAlign="center";
     number.textContent=i;

     square=document.createElement('td');
     square.style.backgroundColor= (i%2==0) ? "skyblue" :"whitesmoke";
      square.style.width="100px";
      square.textContent=i*i;
     square.style.textAlign="center";
 }
      
     
 row.appendChild(number);
 row.appendChild(square);
  }
}
printSquares();