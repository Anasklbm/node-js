var person={name:"anas",age:21,place:"kallambalam" ,display:function()  //  display is a method name
{
    console.log(this.name)  //this is used here to print name
}}




person.blood="B+"  //adding property
console.log(person) //display all properties 



person.displayage=function() { //  adding new method=displayage
console.log(this.blood)      //display the blood
}
console.log(person.displayage())  //calling method=displayage





console.log(person.display())  //calling method=display