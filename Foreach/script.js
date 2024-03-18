let vsm = new XMLHttpRequest();
vsm.open("GET","https://restcountries.com/v3.1/all");
vsm.send();
vsm.onload = function(){
    var result=JSON.parse(vsm.response);
    result.forEach(element => {
     console.log(element.name);
         console.log(element.capital);
         console.log(element.flag); 
    
    });
    }
    