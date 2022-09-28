var nameVar='Sneha';
var nameVar='Sruthi';
console.log('nameVar',nameVar)// redefining and reassigning is possible


let nameLet='Sneha';
nameLet='Sruthi';
console.log('nameLet',nameLet)//reassigning is possible but redefining is not

const nameConst='Sneha';
// nameConst='Sruthi';
console.log('nameConst',nameConst)//reassigning is possible but redefining is not

// SCOPES
/* function getPetName()
{
    var petName='Roger'; ..var has only function scope
    return petName;
}
getPetName();
console.log(petName) Uncaught ReferenceError: petName is not defined  */ 

/* function getPetName()
{
    const petName='Roger'; //..const has only function scope
    return petName;
}
getPetName();
console.log(petName) //Uncaught ReferenceError: petName is not defined  */ 

// LET AND CONST ARE BLOCK SCOPED WHICH DOES INCLUDE FUNCTIONS->CANNOT ACCESS OUTSIDE BLOCK

var fullName='Sneha u'
/* if (fullName)
{
    let firstName=fullName.split()[0];
    console.log('firstName inside block',firstName)
}
console.log('firstName outside block',firstName) //Uncaught ReferenceError: firstName is not defined */

/* if (fullName)
{
    const firstName=fullName.split()[0];
    console.log('firstName inside block',firstName)
}
console.log('firstName outside block',firstName)//Uncaught ReferenceError: firstName is not defined */

if (fullName)
{
    let firstName=fullName.split()[0];
    console.log('firstName inside block',firstName)
}
console.log('firstName outside block',firstName)