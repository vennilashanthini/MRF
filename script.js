let vsm = new XMLHttpRequest();
vsm.open("GET","https://restcountries.com/v3.1/all");
vsm.send();
vsm.onload = function(){
    var result = JSON.parse(vsm.response);
    
        result.filter((countries) => {
            return countries.region ==="Asia";
      })
      console.log(result);
 
    
}


vsm.onload = function(){
    var result = JSON.parse(vsm.response);
    
        result.filter((countries) => {
            return countries.population<200000;
      })
      console.log(result);
 
    
}

vsm.onload = function(){
var result=JSON.parse(vsm.response);
result.forEach(element => {
 console.log(element.name);
     console.log(element.capital);
     console.log(element.flag); 

});
}


vsm.onload=function(){
    var result=JSON.parse(vsm.response);
    var total = result.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}

vsm.onload=function(){
    var result=JSON.parse(vsm.response);
   var currency = result.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }





    