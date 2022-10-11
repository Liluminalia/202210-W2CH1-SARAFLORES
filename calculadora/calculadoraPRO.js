function calculadoraPRO() {
    let numbers = [];
    let num;
    function ask() {
        while (num !== null) {
            num = prompt('introduce un numero: ');

            if (isNaN(num)) {
                while (isNaN(num)) {
                    if (isNaN(num)) {
                        num = prompt(
                            'ey, eso no es un numero! intentalo de nuevo: '
                        );
                    } else {
                        break;
                    }
                }
            } else {
            }

            if (num !== null) {
                if (isFinite(num)) {
                    num = parseFloat(num);
                    numbers.push(Number(num));
                } else {
                }
            } else {
                break;
            }
        }
    }

    //calculadora

    function calculator() {
        if (numbers[1] === null) {
            console.log(
                'La raiz cuadrada de ' +
                    numbers[0] +
                    ' es ' +
                    Math.sqrt(numbers[0]).toFixed(3)
            );
        } else if (numbers[0] === null) {
            console.log('no ingresaste ningun numero... BYE!');
        } else {
            let sum = numbers[0];
            let subtraction = numbers[0];
            let mult = numbers[0];
            let div = numbers[0];

            for (x = 0; x + 1 < numbers.length; x++) {
                sum += numbers[x + 1];
                subtraction -= numbers[x + 1];
                mult *= numbers[x + 1];
                div /= numbers[x + 1];
            }
            let results = [sum, subtraction, mult, div];
            let integers = [];
            let decimals = [];

            for (i = 0; i < results.length; i++) {
                if (Number.isInteger(results[i])) {
                    integers.push(results[i]);
                } else {
                    decimals.push(results[i]);
                }
            }
            for (j = 0; j < integers.length; j++) {
                if (integers[j] === sum) {
                    console.log(
                        'La suma de los numeros introducidos es: ' + sum
                    );
                } else if (integers[j] === subtraction) {
                    console.log(
                        'La resta de los numeros introducidos es: ' +
                            subtraction
                    );
                } else if (integers[j] === mult) {
                    console.log(
                        'La multiplicación de los numeros introducidos es: ' +
                            mult
                    );
                } else if (integers[j] === div) {
                    console.log(
                        'La division de los numeros introducidos es: ' + div
                    );
                    console.log(
                        '---------------------------------------------------------------------'
                    );
                }
            }
            for (k = 0; k < decimals.length; k++) {
                if (decimals[k] === sum) {
                    console.log(
                        'La suma de los numeros introducidos es: ' +
                            sum.toFixed(3)
                    );
                } else if (decimals[k] === subtraction) {
                    console.log(
                        'La resta de los numeros introducidos es: ' +
                            subtraction.toFixed(3)
                    );
                } else if (decimals[k] === mult) {
                    console.log(
                        'La multiplicación de los numeros introducidos es: ' +
                            mult.toFixed(3)
                    );
                } else if (decimals[k] === div) {
                    console.log(
                        'La division de los numeros introducidos es: ' +
                            div.toFixed(3)
                    );
                    console.log(
                        '---------------------------------------------------------------------'
                    );
                }
            }
        }
    }

    let again;
    function askagain() {
        num = prompt('¿desea hacer alguna operacion más? Y/N');
        while (num === 'y') {
            if (num === 'y') {
                numbers = [];
                ask();
                calculator();
                askagain();
            } else {
                break;
            }
        }
    }

    ask();
    calculator();
    askagain();
    if (num === 'n') {
        console.log('BYE!!');
    } else {
    }
}
