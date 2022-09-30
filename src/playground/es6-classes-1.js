class Person
{ constructor (name='Anonymus',age=0)
{this.name=name;
this.age=age;}
getGreetings()
{
    // console.log( 'Hi '+this.name);
    return `Hi ${this.name}`

}
getDescription()
{
    // console.log( 'Hi '+this.name);
    return `Hi ${this.name} is ${this.age} years old.`

}
}
class Student extends Person{
    constructor (name,age,major)
    {
        console.log('student constructor called')
        super(name,age);
        this.major=major;
    }
    hasMajor()
    {return `${!!this.major}`}
    getDescription(){
        let description=super.getDescription()
        if(this.hasMajor())
        description+=`The major is ${this.major}`
        return description;

    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getGreetings()
    {
        let greetings=super.getGreetings()
        if (this.homeLocation)
        {
            greetings+=`I am visitng from ${this.homeLocation}`
        }
        return greetings;
    }
}


const me=new Person('Sneha',22);
console.log(me.getGreetings());
console.log(me.getDescription())

const other= new Person();
console.log(other.getGreetings());
console.log(other.getDescription())

const meStudent=new Student('Sruthi',22,'c');
console.log(meStudent.getGreetings());
console.log(meStudent.getDescription())
console.log(meStudent.hasMajor())

const meTraveller=new Traveller('SnehaTraveller',22,'Kerala');
console.log(meTraveller.getGreetings());
console.log(meTraveller.getDescription())
// console.log(meTraveller.hasMajor())