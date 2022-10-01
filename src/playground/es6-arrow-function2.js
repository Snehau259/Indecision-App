const add = function (a, b) {
    console.log(arguments);//Arguments(2) [2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
    return a + b;
}
console.log(add(2, 3))

//ARGUEMENTS OBJECT NO LONGER BOUND WITH ARROW FUNCTIONS
const addArrow = (a, b) =>
// {console.log(arguments);app.js:3 Uncaught ReferenceError: arguments is not defined
{
    return a + b;
}
console.log(add(2, 3))

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


const user = {
    name: "Sneha",
    cities: ["palakkad", "kochi", "kanhangad"],
    printPlacesLived: function () {


        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city)
        });
    }
}
user.printPlacesLived();

const userMap = {
    name: "Sneha",
    cities: ["palakkad", "kochi", "kanhangad"],
    printPlacesLived() {


        return this.cities.map((city) => {
            return (this.name + " has lived in " + city);
        });
    }
};
console.log(userMap.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}
console.log(multiplier.multiply());


