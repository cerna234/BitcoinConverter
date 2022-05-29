

///////////////////

let input = document.getElementById("inputValue");
let output = document.getElementById("output");
let currency = document.getElementById("currency");
let symbol = document.getElementById("symbol");
let Switch = document.getElementById("Switch");

let trigger = true;


const price = async () => {


        try{
                const config = {headers: {Accept: `application/json`}}
                const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json", config);
                const data = res.data.bpi;
            
                let UsRate = data.USD.rate_float;
                let UeropeRate = data.EUR.rate_float;
                let BritishPoundRate = data.GBP.rate_float;
                

                let submitButton = document.getElementById("submitButton");
               


                

                submitButton.addEventListener("click", (e) => {
                        e.preventDefault();
           
                      
           
                        let chosenCurrency;
                        let monetarySymbol;
           
                        if(input.value === ""){
                                console.log("wrong");
                                input.style.border ="2px solid red";
                                output.innerHTML = "Enter Value"
                        }else{
           
                           input.style.border ="none";
                           if(currency.value === "USD"){
                                   chosenCurrency = UsRate;
                                   
                                   monetarySymbol="$";
                           }else if(currency.value === "EUR"){
                                   chosenCurrency = UeropeRate;
                                  
                                   monetarySymbol = "&#x20AC";
                           }else if(currency.value === "GBP" ){
                                   chosenCurrency = BritishPoundRate;
                                   
                                   monetarySymbol = "&#163"
                           }
                           input.style.border = "  1px solid rgba(206, 205, 205, 0.322)"
                    
                             
                           output.innerHTML = monetarySymbol + " " + input.value + "   =  "  + "  " + (input.value / chosenCurrency) + " &#8383"; 
                          
                          
                                
                        }
           
                      
           
                })
                
               
        }catch(e){
                console.log(e)
        }
      
       

}

currency.addEventListener("change", (e)=> {
        e.preventDefault();

        if(currency.value === "USD"){

                symbol.src = "us.png";
        }else if(currency.value === "EUR"){
                
                symbol.src = "europe.png";

        }else{
                
                symbol.src = "British.png";
        }

})





price();
