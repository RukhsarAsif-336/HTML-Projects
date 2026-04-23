// 1. Say hello
console.log("Hello, welcome to JavaScript!");

// 2. A simple function
function greet(name) {
    return "Hello " + name;
}

// 3. Use the function
console.log(greet("Alex"));
console.log(greet("Sam"));

// 4. A number function
function add(a, b) {
    return a + b;
}

// 5. Test it
console.log(add(2, 3));
console.log(add(10, 5));

// 6. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 7. Test it
console.log(isEven(4)); // true
console.log(isEven(7)); // false
