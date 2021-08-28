var person={ name:"anas",age:21,place:"kallambalam"}  //object name is person
console.log(person.name)

console.log(person['age'])

for(x in person){     //x is  properties of person like name age place
    console.log(x)      
}

for(x in person){
    console.log(person[x])     // To display the details of a person like anas 21 kallambalam
}

person.blood="B+"   //adding new details of person
console.log(person.blood)
console.log(person)