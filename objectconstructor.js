function person(name,age,place){       // creating function
    this.name=name
    this.age=age
    this.place=place   //objectinte placilott vekkunnu "fuction"
    this.display=function(){   //
        console.log("name:"+this.name +"age:"+this.age+"place:"+this.place)
    }
}


var anas=new person("anas",21,"kallambalam")  //passing values
var niyas=new person("niyas",23,"tvm")

anas.display()  //calling function
niyas.display()