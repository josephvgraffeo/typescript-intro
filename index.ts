
let myName: string = "Joe"
let age: number = 25
let teaching: boolean = false

let classes: string[] = ["typescript", "c#", "python"]

// console.log(myName, age, teaching)
// console.table(classes)

enum TaxForms {
    standardTaxes = 1040,
    childCredit = 647,
    cryptoCredit = 2055,
}

// console.log(TaxForms.cryptoCredit)

let code: string | number = "11"

code = 11

// console.log(code);

let cars: string[] = ["durango", "tesla", "BMW", "Mercedes", "Audi"]

// returns value of element in array at position index
function findValue(index: number, array: string[]) : string {
    return array[index];
}

// doesn't return anything, so use void
function findValue2(index: number, array: string[]) : void {
    console.log(array[index]);
}

// console.log(findValue(0,cars))
// findValue2(0,cars)

// let classroom: any = {
//     name: "typescript",
//     duration: 6,
//     boring: false
// }

interface classroom {
    name: string, // required
    duration: number, // required
    boring: boolean, // required
    room?: string // optional
}

let thisClassroom: classroom = {
    name: "typescript",
    duration: 6,
    boring: false,
    room: "boca code classroom"
}

// console.log(thisClassroom)

let thatClassroom: classroom = {
    name: "more typescript",
    duration: 2,
    boring: true
}