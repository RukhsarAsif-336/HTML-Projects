// Variables
var myVar = "This is a var variable";
let myLet = 42;
const myConst = [1, 2, 3];

// Named function
function namedFunction() {
    return "This is a named function.";
}

// Anonymous function
let anonymousFunction = function() {
    return "This is an anonymous function.";
};

// Built-in function
let numberString = "123";
let parsedNumber = parseInt(numberString);

// Conditional
let condition = true;
let conditionText = condition ? "Condition is true." : "Condition is false.";

// Switch statement
let day = 3;
let dayText;

switch (day) {
    case 1: dayText = "Monday"; break;
    case 2: dayText = "Tuesday"; break;
    case 3: dayText = "Wednesday"; break;
    case 4: dayText = "Thursday"; break;
    case 5: dayText = "Friday"; break;
    default: dayText = "Weekend";
}

// Arrays
let stringArray = ["apple", "banana", "cherry"];

// Object
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Output to webpage
let output = document.getElementById("output");

output.innerHTML = `
    <div class="box"><div class="title">Var</div>${myVar}</div>
    <div class="box"><div class="title">Let</div>${myLet}</div>
    <div class="box"><div class="title">Const Array</div>${myConst}</div>

    <div class="box"><div class="title">Named Function</div>${namedFunction()}</div>
    <div class="box"><div class="title">Anonymous Function</div>${anonymousFunction()}</div>

    <div class="box"><div class="title">parseInt</div>${parsedNumber}</div>

    <div class="box"><div class="title">If/Else</div>${conditionText}</div>
    <div class="box"><div class="title">Switch</div>${dayText}</div>

    <div class="box"><div class="title">Array</div>${stringArray.join(", ")}</div>

    <div class="box"><div class="title">Object Method</div>${person.fullName()}</div>
`;
