

var request = new XMLHttpRequest()

let input = document.getElementById("inputValue");
let output = document.getElementById("output");
let currency = document.getElementById("currency");
let symbol = document.getElementById("symbol");

request.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json", true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {

     let UsRate = data.bpi.USD.rate_float;
     let UeropeRate = data.bpi.EUR.rate_float;
     let BritishPoundRate = data.bpi.GBP.rate_float;


     let submitButton = document.getElementById("submitButton");


     currency.addEventListener("change", (e)=> {
             e.preventDefault();

             if(currency.value === "USD"){

                symbol.src = "us.png";
        }else if(currency.value === "EUR"){
                
                symbol.src = "europe.png";
        }else{
                chosenCurrency = BritishPoundRate;
                symbol.src = "British.png";
        }

     })

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
                        symbol.src = "us.png";
                        monetarySymbol="$";
                }else if(currency.value === "EUR"){
                        chosenCurrency = UeropeRate;
                        symbol.src = "europe.png";
                        monetarySymbol = "&euro";
                }else{
                        chosenCurrency = BritishPoundRate;
                        symbol.src = "British.png";
                        monetarySymbol = "&#163"
                }
                input.style.border = "  1px solid rgba(206, 205, 205, 0.322)"
         
                  
                output.innerHTML = monetarySymbol + " " + input.value + " = "  +  (input.value / chosenCurrency) + " &#8383"; 
   
               
                     
             }

           

     })
    




  } else {
    console.log('error')
  }

  
}




request.send()



