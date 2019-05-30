//document.querySelector('id').addEventListener('click',

function myfunction(n){
    // var n= document.getElementById("myText").value = //"Johnny Bravo";
  var initials=n.charAt(0);
  for(var i=0;i<n.length;i++)
  {
    if(n[i]==" ")
    {
      initials=initials+n.charAt(i+1);
    }
  }
  console.log(initials);
  }
  
  myfunction("Johny Bravo");
  myfunction("Mahendra Singh Dhoni");