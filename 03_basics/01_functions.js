


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

console.log(result)


function loginUser(username = "Krupen") {

    if(!username) {
console.log("Please enter username");
return
    } else {
return `${username} has just Logged In`
}
}

console.log(loginUser())