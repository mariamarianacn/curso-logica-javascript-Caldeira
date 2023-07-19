const numeros = [10]

// para cada numeroContido em numeros
for (numeroContido in numeros){
    for (let numeroMultiplicador = 0; numeroMultiplicador <= 10; numeroMultiplicador++){
        let multiplicacao = numeros[numeroContido] * numeroMultiplicador
        console.log(` ${numeros[numeroContido]} * ${numeroMultiplicador} = ${multiplicacao}`)}
}
