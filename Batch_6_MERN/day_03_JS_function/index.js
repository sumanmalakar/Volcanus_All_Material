
// void function - not returing anything
function print(){
    console.log("Hello function")
}
// print()

// parameterize function
function sayHello(msg){
    console.log(`Hello ${msg}`)
}

// sayHello("Superman")
// sayHello("Spiderman")
// sayHello("Thor")
// sayHello(10)
// sayHello(100.30)

// function with return type
function sum(a,b){
    return a+b;
}


let result = sum(10,20)

// console.log(result)

// function without argument and return type
function test(){
    return "Hello"
}

console.log(test())

