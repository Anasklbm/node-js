var hello=function(data){   //creating hello function and data is a variable
    console.log("Name:"+data)
}

var hey=function(callback){ //creating hey function and callback is a variable
    callback("Anas.y")
}

hey(hello) //print the hello function and then print the hey function