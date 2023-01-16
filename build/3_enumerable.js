"use strict";
// to see error window in sublime text: command+Shft+P -> Typescript: ShowErrorList
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryItems = void 0;
// an Enum is special type that is a hard coded list of values
// they're defined using the keyword enum
// they get compiled with the rest of your code
var Status;
(function (Status) {
    Status["active"] = "active";
    Status["inactive"] = "inactive";
})(Status || (Status = {}));
var renee = {
    status: '1nactive',
    name: 'Renee'
};
// Now in the Contact interface we can replace status with the enum (line 20)
// There are 3 types of enums: Numeric, string, heterogeneous enum
// Numeric enums are number-based enums , i.e. they store string values as numbers
// numeric enum initialized with 1
var Directions1;
(function (Directions1) {
    Directions1[Directions1["North"] = 1] = "North";
    Directions1[Directions1["South"] = 2] = "South";
    Directions1[Directions1["East"] = 3] = "East";
    Directions1[Directions1["West"] = 4] = "West"; //value = 4
})(Directions1 || (Directions1 = {}));
// numeric enums have reverse mapping
console.log(Directions1.North); //logs 1
console.log(Directions1[1]); // logs North
// unless otherwise initialized, 0 is the first value of the enum while the other values in the enum are incremented by 1
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 1] = "South";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West"; //value = 3
})(Directions || (Directions = {}));
// String enums are similar to numeric enums 
// except that the enum values are initialized with string values rather than numeric values
var Directions2;
(function (Directions2) {
    Directions2["North"] = "NORTH";
    Directions2["South"] = "SOUTH";
    Directions2["East"] = "EAST";
    Directions2["West"] = "WEST";
})(Directions2 || (Directions2 = {}));
console.log(Directions2.North); //logs NORTH
//enums can be used in an interface, for example:
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "Computer";
    InventoryItemType["Furniture"] = "Furniture";
})(InventoryItemType || (InventoryItemType = {}));
exports.inventoryItems = [
    { displayName: 'item1', trackingNumber: '1234', furnitureType: InventoryItemType.Computer, cost: 10, createDate: new Date('2020-01-01') },
    { displayName: 'item2', trackingNumber: '5678', furnitureType: InventoryItemType.Computer, cost: 30 },
    { displayName: 'item3', trackingNumber: 9101, furnitureType: InventoryItemType.Computer, cost: 30 }
];
// enums in functions
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Magazine"] = 1] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 2] = "Book";
    PrintMedia[PrintMedia["Newsletter"] = 3] = "Newsletter";
})(PrintMedia || (PrintMedia = {}));
function getMedia(media) {
    if (media === 'Forbes' || media === 'Time') {
        return PrintMedia.Magazine;
    }
}
var mediatype = getMedia('Forbes');
console.log(mediatype); //logs 1
console.log(PrintMedia[mediatype]); //logs Magazine
