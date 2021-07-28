function numPrimo(input) {
    if(input === 1) return -1
    const result =  []
    const esPrimo = (n) => {
        if(n < 2) return false
        var q = Math.floor(Math.sqrt(n)); //Comprobamos solo hasta la raiz para ver si son primos o no
        for (var i = 2; i <= q; i++)
        {
            if(n % i === 0) {
                return false;
            }
        }
        return true
    }
    

    for(let i = 0; i <= input; i++){
        if(esPrimo(i)){
            result.push(i)
        }
    }
    
    return result;
}

module.exports = numPrimo;
