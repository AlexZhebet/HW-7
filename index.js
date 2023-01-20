
// №1 
for (i = 20; i <= 30; i += 0.5) {
    console.log(i)
    continue;
}

// №2 
for (i = 10; i <= 100; i = i + 10) {
    console.log(i * 27)
}

//   №3 
let number = +prompt(`Введіть число`)
for (i = 1; i <= 100; i++) {
    if (i ** 2 <= number) {
        console.log(i)
    }
}


//   №4 
let myNumber = +prompt(`Введіть число`)
for (let i = 2; i < myNumber; i++) {
    if (myNumber % i === 0) {
        alert(`${myNumber} не просте число`);
        break;
    }
    alert(`${myNumber}  просте число`);
    break;
}

// №5 
let enterNumber = +prompt(`Введіть число`)
let number1 = +prompt(`число для зведення`, 3)
let reply = `не можливо отримати шляхом зведення числа в ${number1}  ступін`
let audit = Math.sqrt(enterNumber)
for (let i = 1; i <= audit; i++) {
    if ((Math.pow(number1, i)) === enterNumber) {
        reply = `можливо отримати шляхом зведення числа в ${number1} ступін`
        break
    }
}
alert(reply)
