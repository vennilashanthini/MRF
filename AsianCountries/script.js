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