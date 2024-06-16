


function sayName () {
    console.log("K");
    console.log("r");
    console.log("u");
    console.log("p");
    console.log("e");
    console.log("n");
}

// sayName()

function addTwoNums(number1, number2) {
    // let result = number1 + number2
    // return result;
    return number1 + number2
}

const result = addTwoNums(10,1)

// console.log(result)


function loginUser(username = "Krupen") {

    if(!username) {
console.log("Please enter username");
return
    } else {
return `${username} has just Logged In`
}
}

// console.log(loginUser())

function calculateCart(v1,...num1) {
return num1
}

// console.log(calculateCart(200,300,400))

const user = {
    username: "Krupen",
    age: 25
}

function handleObject(anyOb) {
    console.log(`Username is ${anyOb.username} and age is ${anyOb.age}`);
}

// handleObject(user)

handleObject({
    username: "Kru",
    age: 26
})

const myNewArray = [2,4,6,8]

function retSecVal(getArray) {
    return getArray[2]
}
// console.log(retSecVal(myNewArray));

console.log(retSecVal([1,3,5,7]))