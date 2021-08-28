var r=require('readline-sync')
num1=r.question("enter the first number")   //input numbers from the user
num2=r.question("enter the second number")

if(num1>num2)
{
    console.log("largest number is"+num1)
}
else if(num1===num2)
{
    console.log("the numbers are equal")
}

else 
{
    console.log("largest number is "+num2)
}