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


const me=new Person('Sneha',22);
console.log(me.getGreetings());
console.log(me.getDescription())

const other= new Person();
console.log(other.getGreetings());
console.log(other.getDescription())