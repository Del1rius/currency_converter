let currency = document.getElementById("currency").value
let currency2 = document.getElementById("currency2").value
let result = document.getElementById("result")
let result2 = document.getElementById("result2")


function forwardConverter () {
    if (document.getElementById("zar") === document.getElementById("usd")) {
        let zar = (parseFloat(result.value)*19.23)
        result2.value = parseFloat(zar)
    } 
    else if (currency.document.getElementById("zar") === currency2.document.getElementById("eur")) {
            let zarToEur = (parseFloat(result.value)*20.73)
            result2.value = parseFloat(zarToEur)
    }
    else if (currency.document.getElementById("zar") === currency2.document.getElementById("gbp")) {
            let zarToPound = (parseFloat(result.value)*24.02)
            result2.value = parseFloat(zarToPound)
    }false;

}

function reverseConverter () {
    let usd = (parseFloat(result2.value)/19.23)
    result.value = parseFloat(usd.toFixed(2))

}

// function allCalcs() {
//     switch(currency===currency2){
//         case 1:
//             let zarToUsd = (parseFloat(result.value)*19.23)
//             result2.value = parseFloat(zarToUsd)
//             break;
//         case 2: 
            
//             break;
//         case 3:
            
//             break;
//         default: 
//             text = "Enter a value! "
//     }


// }
