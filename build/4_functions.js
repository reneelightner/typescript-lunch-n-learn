"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _3_enumerable_1 = require("./3_enumerable");
//FUNCIONS:
// functions in JavaScript can be written different ways 
// (named or anonymous) but either way they can take Typescript
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var largerThan5 = function (x, y) {
    return x + y > 5 ? true : false;
};
//we can apply a type to a function’s parameter
//we can also define the return value of function
//adding types to the functions above:
/*function add(x: number, y: number): number {
  return x + y;
}
 
const largerThan5 = (x: number, y: number): boolean => {
  return x + y > 5 ? true : false;
}*/
// Typescript infers the return type if not specified, but can specific
// hover over mynum on line 37
function addmynums(x, y) {
    var mynum = x + y;
    return mynum;
}
// The type void can be used to indicate a function doesn't return any value
function printHello() {
    console.log('Hello!');
}
// optional parameters
// the `?` operator here marks parameter `c` as optional
function addNums(a, b, c) {
    return a + b + (c || 0);
}
//default parameters
//the default value goes after the type annotation
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
//functions can return an interface
var getInventoryItem = function (trackingnum) {
    return _3_enumerable_1.inventoryItems.find(function (i) { return i.trackingNumber === trackingnum; });
};
var myInventoryItem = getInventoryItem('1234');
console.log(myInventoryItem);
//functions can accept an interface and work with union types (startDate can be 3 different types here)
var getStartDate = function (person) {
    if (typeof person.startDate === 'number') {
        return new Date(person.startDate);
    }
    else if (typeof person.startDate === 'string') {
        return Date.parse(person.startDate);
    }
    else {
        return person.startDate;
    }
};
