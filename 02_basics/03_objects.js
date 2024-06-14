//Singleton

//Objects -> Key, Value

//Object literals

//Object.create

const mySym = Symbol("k1")

const jsUser = {
    name: "Krupen",
    age: "25",
    gender: "Male",
    [mySym]: "key1"
}

//console.log(jsUser.age);

//console.log(jsUser["name"])

//console.log(jsUser[mySym])


jsUser.age = "26"

//Object.freeze(jsUser)
jsUser.age = "30"

console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello")
}

jsUser.greeting2 = function() {
    console.log(`Hello, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())