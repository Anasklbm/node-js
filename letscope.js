function hello(){
var i=0
if (i===0){
    var hey=20
    let hoy=30
    console.log(hoy)  //let hoy 's scope is block "{ }""
}
console.log(hey)   //var hey 's scope is function 

}



hello()  //calling function hello