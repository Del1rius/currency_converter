let currency = document.getElementById("currency")
let currency2 = document.getElementById("currency2")
let result = document.getElementById("result")
let result2 = document.getElementById("result2")


function forwardConverter () {
    
    let zar = (parseFloat(result.value)*19.23)
    result2.value = parseFloat(zar)

}

function reverseConverter () {
    let usd = (parseFloat(result2.value)/19.23)
    result.value = parseFloat(usd.toFixed(2))

}
