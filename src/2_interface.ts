// to see error window in sublime text: command+Shft+P -> Typescript: ShowErrorList

// CONCEPTS: interface, alias, union

//an interface is a custom type 
//way that we define types for data passed through objects

//the syntax to define an interface is the keyword 'interface' 
//followed by the name of that interface, starting with capital 
//followed by open and closed braces
//in the braces add the properties with their type
export interface Person { 
	name:string;
	active:boolean;
	id:number;
	startDate: Date;
}

const mycontact:Person = {
	name: 'Renee',
	active: true,
	id: 1,
	startDate: new Date('01/13/2023')
}

// syntax for an array of objects, each with the same properties
/*const myPeeps:Person[] = [
	{name: 'Renee', active: true, id: 1, startDate: new Date('01/13/2023')},
	{name: 'Amy', active: true, id: 2, startDate: 2016},
	{name: 'Liz', active: true, id: 3, startDate: 2016},
	{name: 'Kai', active: true, id: 4, startDate: 2020},
	{name: 'Tanmay', active: true, id: 5, startDate: 'oct-2021'}
]*/
//however notice that there are three types for startDate (Date, number, string)
//we can fix this with adding a union type for the startDate property 
//union typing = defining types that combine multiple types together
//edit line 16 to add a union with this syntax: Date | number | string

//add location: 'cali' to the last interface of myPeeps
//notice how the other interface instances of myPeeps don't have the location property
//any interface field can be optional with a ?
//so add location?: 'string' to Person


//can also use the 'extends' keyword (add to line 12) 
//if you want to add what's in the Department interface below to the Person interface
//note: you'll have to add company and department properties to mycontact variable and in each interface instance of myPeeps
interface Department {
 	company:string;
 	department:string;
}

/*const myPeeps:Person[] = [
	{name: 'Renee', active: true, id: 1, startDate: new Date('02/13/2017'), company:'Paramount', department: 'DDSG'},
	{name: 'Amy', active: true, id: 2, startDate: 2016, company:'Paramount', department: 'DDSG'},
	{name: 'Liz', active: true, id: 3, startDate: 2016, company:'Paramount', department: 'DDSG'},
	{name: 'Kai', active: true, id: 4, startDate: 2020, company:'Paramount', department: 'DDSG'},
	{name: 'Tanmay', active: true, id: 5, startDate: 'oct-2021', location: 'cali', company:'Paramount', department: 'DDSG'}
]*/

// Type Aliases = another way to refer to types and define custom type
// Adds more meaning to the field that they’re describing
// If you want to change all references, just change the type
type PersonName = string //use this on line 13
type PersonStartDate = Date | number | string //can use on line 15
type PersonDepartment = (Person & Department) //can use on line 54
// alternative to the line above (make a whole new interface that combines the Person and Department interfaces):
interface PersonDepartmentAlternative extends Person, Department {}


