"use strict";

var add = function add(a, b) {
    console.log(arguments); //Arguments(2) [2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
    return a + b;
};
console.log(add(2, 3));

//ARGUEMENTS OBJECT NO LONGER BOUND WITH ARROW FUNCTIONS
var addArrow = function addArrow(a, b)
// {console.log(arguments);app.js:3 Uncaught ReferenceError: arguments is not defined
{
    return a + b;
};
console.log(add(2, 3));

//THIS KEYWORD NO LONGER BOUND


/* const user={name:"Sneha",
cities:["palakkad","kochi","kanhangad"],
printPlacesLived:function()
{
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function(city)
    {
        console.log(this.name+" has lived in "+ city)// app.js:24 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    })
}}
user.printPlacesLived(); */

var user = { name: "Sneha",
    cities: ["palakkad", "kochi", "kanhangad"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in " + city);
        });
    } };
user.printPlacesLived();

var userMap = {
    name: "Sneha",
    cities: ["palakkad", "kochi", "kanhangad"],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        return this.cities.map(function (city) {
            return _this2.name + " has lived in " + city;
        });
    }
};
console.log(userMap.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (num) {
            return num * _this3.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
