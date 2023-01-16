// to see error window in sublime text: command+Shft+P -> Typescript: ShowErrorList
import {Person} from './2_interface'
import {InventoryItem, inventoryItems} from './3_enumerable'

//FUNCIONS:

// functions in JavaScript can be written different ways 
// (named or anonymous) but either way they can take Typescript

// Named function
function add(x, y) {
  return x + y;
}
 
// Anonymous function
const largerThan5 = (x, y) => {
  return x + y > 5 ? true : false;
}

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
function addmynums(x: number, y: number) {
	const mynum = x + y
	return mynum
}

// The type void can be used to indicate a function doesn't return any value
function printHello(): void {
  console.log('Hello!');
}

// optional parameters
// the `?` operator here marks parameter `c` as optional
function addNums(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

//default parameters
//the default value goes after the type annotation
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

//functions can return an interface
const getInventoryItem = (trackingnum:string):InventoryItem => {
	return inventoryItems.find(i => i.trackingNumber === trackingnum)
}

const myInventoryItem = getInventoryItem('1234');
console.log(myInventoryItem);

//functions can accept an interface and work with union types (startDate can be 3 different types here)
const getStartDate = (person:Person) => {

 	if (typeof person.startDate === 'number') {

 		return new Date(person.startDate);

 	} else if (typeof person.startDate === 'string') {

 		return Date.parse(person.startDate);

 	} else {

 		return person.startDate;

 	}
}
