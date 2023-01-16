// to see error window in sublime text: command+Shft+P -> Typescript: ShowErrorList
//TYPESCRIPT IS DESIGNED TO CATCH BUGS IN YOUR CODE
// normally this is allowed in plain JavaScript (ie: w/o TypeScript) since JavaScript is forgiving
var myvar = 'renee'; // declare and assign variable as a string
myvar = { name: 'renee' }; // then reassign it to an object
myvar['location'] = 'nyc'; // then add properies to it
//...This is a good thing (allow you to do anything you want) and a bad thing (you can make all the mistakes you want)
//TypeScript is good at catching erros before runtime, for example:
var message = "Hello World!";
// this works fine
message.toLowerCase();
// Running this with TypeScript will give us an error message before we run the code in the first place
message();
var user = {
    name: "Daniel",
    age: 26,
};
// this would log undefined at runtime but instead TypeScript reports the error: Property 'location' does not exist...
console.log(user.location);
// How quickly can you spot the typos? TypeScript did
message.toLocaleLowercase();
message.toLocalLowerCase();
// TypeScript will cath this logic error:
var value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
}
else if (value === "b") {
}
// Consider this function..
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
//...TypeScript reminds us that we forgot to pass the second argument
greet("Brendan");
// FYI: to see the error window in sublime text: command+Shft+P -> Typescript: ShowErrorList
// BASIC TYPESCRIPT SYNTAX
// this is TypeScript's main syntax: declare variable + : + type
var a;
var b;
var c;
var d; // array of strings
var e;
// the 'any' type (opts out of type safety)
var f;
// without the syntax, typescript infers string as the type
// hover over g to see that TypeScript infers this as a string
var g = 'something';
//if you try to assign to antother type you'll get an error
// but then if you change that assignement to the right type you wont get an error
// TypeScript has a syntax for typing objects (example below)
// but if objects are reused we call them 'interfaces' (next chapter)
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
