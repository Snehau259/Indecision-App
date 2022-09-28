const square=function(x)
{return x*x;}
console.log(square(8))

const squareArrow=(x)=>{return x*x;}
console.log(squareArrow(9))

const squareArrowPrecise=(x)=>x*x;
console.log(squareArrowPrecise(10))

const getFirstName=(fullname)=>{return fullname.split(' ')[0]}
console.log(getFirstName("Sneha U"))


const getFirstName2=(fullname)=>{fullname.split(' ')[0]}
console.log(getFirstName("Sneha U"))