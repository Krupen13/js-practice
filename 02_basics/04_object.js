//const tinderUser = new Object() // Singleton object

const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "KP"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regUser = {
    email: "k39@gmail.com",
    fullname: {
        username: {
            firstname: "Krupen",
            lastname: "Patel"
        }
    }
}

// console.log(regUser.fullname.username.lastname);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}

const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    }
]

users[0].email

// console.log(tinderUser)

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    cname: "abc",
    price: "999",
    cc: "Krupen"
}



// console.log(course["price"])

const {price: kimmat} = course
console.log(kimmat);


