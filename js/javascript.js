// stampare in console numeri da 1 a 100

console.log("FIZZBUZZ")

for (i = 1; i <= 100; i++) {

    const resto3 = i % 3
    const resto5 = i % 5
    const resto15 = i % 15

    if (resto15 === 0) {

        console.log(i, "FizzBuzz")

    } else if (resto3 === 0) {

        console.log(i, "Fizz")

    } else if (resto5 === 0) {

        console.log(i, "Buzz")

    } else {

        console.log(i)
    }
}

// voglio farlo funzionare anche in un altro ordine

console.log("FIZZBUZZ 2")

for (i = 1; i <= 100; i++) {

    const resto3 = i % 3
    const resto5 = i % 5


    if (resto3 === 0 && resto5 != 0 ) {

        console.log(i, "Fizz")

    } else if (resto5 === 0 && resto3 != 0 ) {

        console.log(i, "Buzz")

    } else if (resto3 === 0 && resto5 === 0) {

        console.log(i, "FizzBuzz")
    } else {

        console.log(i)
    }
}

// il modo per scrivere meno codice e meno variabili?

console.log("FIZZBUZZ 3")

for (i = 1; i <= 100; i++) {

    const resto3 = i % 3
    const resto5 = i % 5
    

    if (resto3 === 0 && resto5 === 0) {

        console.log(i, "FizzBuzz")

    } else if (resto3 === 0) {

        console.log(i, "Fizz")

    } else if (resto5 === 0) {

        console.log(i, "Buzz")

    } else {

        console.log(i)
    }
}

