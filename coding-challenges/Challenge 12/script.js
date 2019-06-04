function areAnagram(str1,str2) 
{ 
  var n1 = str1.length; 
    var  n2 = str2.length; 

 if (n1 != n2) 
        return false;

var arr1=str1.split("");
var arr2=str2.split("");
  
    arr1.sort();
    arr2.sort();
   
    for (var i = 0; i < n1; i++) 
        if (arr1[i] != arr2[i]) 
            return false; 
  
    return true; 
} 


    var  str1 = "test ram"; 
    var str2 = "ttes mar"; 
   console.log(areAnagram(str1, str2));