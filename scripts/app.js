// //1
// const number = prompt('Number =')
// function getFactorial (number) {
//     if (number === 1 || number === 0){
//         return 1
//     } else {
//         return number * getFactorial(number - 1)
//     }
// }
// console.log(getFactorial(number))

//2
// const number2 = parseInt(prompt('Number'))
// const degree = parseInt(prompt('Degree'))
// function pow (number2, degree){
//     if (isNaN(number2)|| isNaN(degree)){
//         alert('some error')
//     } else if(number2 === null || degree === null) {
//         alert('enter the number')
//     } else if (degree === 0) {
//         return 1
//     } else {
//             return number2 * pow(number2, degree - 1)
//         }
// }
// alert(pow(number2, degree))

//3
const a = Number(prompt("Number A"));
const b = Number(prompt("Number B"));
function sum (a, b){
    if (isNaN(a) || isNaN(b)){
        return 'some error'
    }
    if (a === 0){
        return b
    } else {
        return sum(a + 1, b - 1)
    }
}
const sumOf = sum(a, b)
alert(+sumOf)