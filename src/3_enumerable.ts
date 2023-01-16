
// to see error window in sublime text: command+Shft+P -> Typescript: ShowErrorList


// an Enum is special type that is a hard coded list of values
// they're defined using the keyword enum
// they get compiled with the rest of your code
enum Status {
	active = 'active',
	inactive = 'inactive'
}

// You often need to reference hard coded values in JavaScript 
// For example a Contact interface could have a status value of either: active, inactive...
interface Contact {
	status:string;
	name:string;
}
const renee:Contact = {
	status: '1nactive', //...however, the status can be any string, even this one with a typo
	name: 'Renee'
}
// Now in the Contact interface we can replace status with the enum (line 20)

// There are 3 types of enums: Numeric, string, heterogeneous enum

// Numeric enums are number-based enums , i.e. they store string values as numbers
// numeric enum initialized with 1
enum Directions1 {
	North = 1,
	South, //value = 2
	East, //value = 3
	West //value = 4
}

// numeric enums have reverse mapping
console.log(Directions1.North); //logs 1
console.log(Directions1[1]); // logs North

// unless otherwise initialized, 0 is the first value of the enum while the other values in the enum are incremented by 1

enum Directions {
	North, //value = 0
	South, //value = 1
	East, //value = 2
	West //value = 3
}

// String enums are similar to numeric enums 
// except that the enum values are initialized with string values rather than numeric values
enum Directions2 {
	North = 'NORTH',
	South ='SOUTH',
	East = 'EAST',
	West = 'WEST'
}

console.log(Directions2.North); //logs NORTH

//enums can be used in an interface, for example:
enum InventoryItemType {
	Computer = 'Computer',
	Furniture = 'Furniture'
}

export interface InventoryItem {
	displayName: string;
	trackingNumber: string | number;
	furnitureType: InventoryItemType;
	cost: number;
	createDate?: Date;
}

export const inventoryItems: InventoryItem[] = [
	{displayName: 'item1', trackingNumber: '1234', furnitureType: InventoryItemType.Computer, cost: 10, createDate: new Date('2020-01-01')},
	{displayName: 'item2', trackingNumber: '5678', furnitureType: InventoryItemType.Computer, cost: 30},
	{displayName: 'item3', trackingNumber: 9101, furnitureType: InventoryItemType.Computer, cost: 30}
]

// enums in functions
enum PrintMedia {
	Newspaper,
	Magazine,
	Book,
	Newsletter
}

function getMedia(media) {
	if (media === 'Forbes' || media === 'Time') {
		return PrintMedia.Magazine
	}
}

const mediatype = getMedia('Forbes')
console.log(mediatype) //logs 1
console.log(PrintMedia[mediatype]) //logs Magazine
