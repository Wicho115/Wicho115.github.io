export function factorial(numero){
    console.log(`Se empieza a realizar el factorial de: '${numero}'`)

    if(isNaN(numero)){
        console.error("El dato ingresado no es un número");
        return;
    }

    if(numero <= 0){
        console.error("El número ingresado no es un número positivo mayor a cero");
        return;
    }

    if(!Number.isInteger(numero)){
        console.error("El Número ingresado no es un número entero");
        return;
    }

    let result = 1;
    for (let i = 2; i <= numero; i++) {
        result *= i;
    }
    
    console.log(`${numero}! = ${result}`);
}