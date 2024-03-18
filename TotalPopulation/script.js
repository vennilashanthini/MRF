let vsm = new XMLHttpRequest();
vsm.open("GET","https://restcountries.com/v3.1/all");
vsm.send();

vsm.onload=function(){
    var result=JSON.parse(vsm.response);
    var total = result.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}