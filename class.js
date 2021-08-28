class hello{                //creating class hello
    constructor(num1,num2){  //creating constructor
         this.num1=num1
         this.num2=num2
    }

    hello(){  //
        console.log("the sum is : "+(this.num1+this.num2))
    }
}

let hey=new hello(10,20) //creating hey object and value passing to the constructor num1&num2
hey.hello()   